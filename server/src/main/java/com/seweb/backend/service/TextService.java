package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Notice;
import com.seweb.backend.domain.Text;
import com.seweb.backend.framework.utils.date.DateUtil;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.mapper.NoticeMapper;
import com.seweb.backend.repository.TextRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

public class TextService<T extends Text> extends BaseService<T>{

    public TextRepository<T> textRepository;

    @Autowired
    public NoticeMapper noticeMapper;

    @Autowired
    public void setTextRepository(TextRepository<T> textRepository) {
        this.textRepository = textRepository;
    }

    private static final String AUTH_ACCEPT_STRING = "Your commit was accepted.";
    private static final String AUTH_REFUSE_STRING = "Your commit was declined.";
    private static final String NAME_STRING = "Name: ";
    private static final String INFO_STRING = "Info: ";

    /**
     *
     * @param params : name, author, content
     * @param createdUserId : ~
     * @return id of new text
     */
    public JSONObject add(JSONObject params, String createdUserId) {
        T text = toObject(params);
        text.setStatus(ST_UNAUTH);
        this.saveEntity(text,createdUserId);
        JSONObject idJson = new JSONObject();
        idJson.put("id", text.getId());
        return idJson;
    }


    /** If unauthorized, delete straightforward
     * else create a deprecated copy & wait for auth
     *
     * @param params : newsId
     * @param userId :
     */
    public void delete(JSONObject params, String userId) {
        String id = params.getString("id");
        T text = textRepository.findById(id).get();
        if(text.getStatus().equals(ST_UNAUTH))
            this.deleteEntity(id);
        else {
            JSONObject draftJson = JSON.parseObject(JSON.toJSONString(text));
            T draft = toObject(draftJson);
            draft.setId(UUID.randomUUID().toString());
            draft.setParent(id);
            draft.setStatus(ST_DEPRE);
            this.saveEntity(draft,userId);
        }
    }


    /**If unauthorized, edit straightforward
     * else create an unauthorized new copy & wait for auth
     *
     * @param params : name, author, content
     * @param alteredUserId : ~
     */
    public void edit(JSONObject params, String alteredUserId) {
        String id = params.getString("id");
        T news = textRepository.findById(id).get();
        T draft = toObject(params);
        if(news.getStatus().equals(ST_UNAUTH)){
            if(draft.getName() != null) news.setName(draft.getName());
            if(draft.getContent() != null) news.setContent(draft.getContent());
            this.updateEntity(news, alteredUserId);
        }
        else{
            draft.setId(UUID.randomUUID().toString());
            draft.setParent(id);
            draft.setStatus(ST_UNAUTH);
            this.saveEntity(draft, alteredUserId);
        }
    }

    /**
     *
     * @return JSONObject
     *          key : ST_UNAUTH ,value : JSONArray unauthorizedList
     *          key : ST_DEPRE  ,value : JSONArray deprecatedList
     */
    public JSONObject queryAuth() {
        JSONObject authJson = new JSONObject();
        authJson.put(ST_UNAUTH,queryByStatus(ST_UNAUTH));
        authJson.put(ST_DEPRE,queryByStatus(ST_DEPRE));
        return authJson;
    }

    /**Case 1. ADD (NEW)
     * Case 2. CHANGE (EDIT)
     * Case 3. DELETE
     *
     * Accept:  Case 1. Set status of new text to "authorized".
     *          Case 2. Set status of changed text to "authorized", copy creating message and delete old text.
     *          Case 3. Delete both the deprecated copy and its parent.
     * Refuse:  Case 1. Do nothing.
     *          Case 2. Do nothing.
     *          Case 3. Delete the deprecated copy.
     *
     * @param params : id, reply:{accept, refuse}
     * @throws Exception : ~
     */
    public boolean handleAuthReply(JSONObject params) throws Exception{
        String reply = params.getString("reply");
        Optional<T> textOptional = textRepository.findById(params.getString("id"));
        T text = null;
        if(textOptional != null && textOptional.isPresent()){
            text = textOptional.get();
        }
        else {
            return false;
        }
        String parentId = text.getParent();
        String status = text.getStatus();

        /* TODO: Send Notice */
        if("accept".equals(reply)) {
            if(parentId == null) {/* ADD */
                text.setStatus(ST_AUTH);
            }
            else {
                if(status.equals(ST_UNAUTH)) {/* CHANGE */
                    T parent = textRepository.findById(parentId).get();
                    text.setCreatedTime(parent.getCreatedTime());
                    text.setCreatedUserId(parent.getCreatedUserId());
                    textRepository.deleteById(parentId);
                    text.setStatus(ST_AUTH);
                    text.setParent(null);
                    this.updateEntity(text,text.getCreatedUserId());

                }
                else if(status.equals(ST_DEPRE)){/* DELETE */
                    textRepository.deleteById(params.getString("id"));
                    textRepository.deleteById(parentId);
                }
                else {
                    throw new Exception("Undefined text status");
                }
            }
            addAcceptNotice(text.getCreatedUserId(),text.getName(),DateUtil.formatDateTime(new Date()));
        }
        else if("refuse".equals(reply)) {
            if(status.equals(ST_DEPRE)) {
                textRepository.deleteById(params.getString("id"));
            }
            addRefuseNotice(text.getCreatedUserId(),text.getName(),DateUtil.formatDateTime(new Date()),params.getString("info"));
        }
        else {
            throw new Exception("Undefined reply");
        }
        return true;
    }

    public JSONArray queryByStatus(String status){
        return JsonUtil.toJSONArray(textRepository.findByStatus(status));
    }

    public JSONArray queryAll() {
        return JsonUtil.toJSONArray(textRepository.findAll());
    }

    public JSONObject queryById(JSONObject params) {
        return JSON.parseObject(JSON.toJSONString(textRepository.findById(params.getString("id"))));
    }

    public void concurrenceTest(JSONObject params) throws Exception{
        concurrenceTest(params,textRepository);
    }

    public T toObject(JSONObject params) {
        return null;
    }

    private void addNotice(String targetUserId, String title, String content, String time) {
        noticeMapper.addNotice(UUID.randomUUID().toString(),targetUserId,title,content,time);
    }

    private void addAcceptNotice(String targetUserId, String name, String time) {
        String string = NAME_STRING + name + "\n";
        addNotice(targetUserId,AUTH_ACCEPT_STRING,string,time);
    }

    private void addRefuseNotice(String targetUserId, String name, String time, String info) {
        String string = NAME_STRING + name + "\n" + INFO_STRING + info + "\n";
        addNotice(targetUserId,AUTH_REFUSE_STRING,string,time);
    }
}
