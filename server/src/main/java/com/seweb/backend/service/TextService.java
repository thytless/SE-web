package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Text;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.TextRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

public class TextService<T extends Text> extends BaseService<T>{

    public TextRepository<T> textRepository;

    @Autowired
    public void setTextRepository(TextRepository<T> textRepository) {
        this.textRepository = textRepository;
    }

    private static final String ST_AUTH = "authorized";
    private static final String ST_UNAUTH = "unauthorized";
    private static final String ST_DEPRE = "deprecated";

    /**
     *
     * @param params : name, author, content
     * @param createdUserId : ~
     * @return id of new text
     */
    public JSONObject add(JSONObject params, String createdUserId) {
        T text = (T)JSONObject.toJavaObject(params, Text.class);
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
        T text = textRepository.findById(params.getString("id")).get();
        if(text.getStatus().equals(ST_UNAUTH))
            this.deleteEntity(id);
        else {
            JSONObject draftJson = JSON.parseObject(JSON.toJSONString(text));
            T draft = (T)JSONObject.toJavaObject(draftJson, Text.class);
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
        T news = textRepository.findById(params.getString("id")).get();
        T draft = (T)JSONObject.toJavaObject(params, Text.class);
        if(news.getStatus().equals(ST_UNAUTH)){
            if(draft.getName() != null) news.setName(draft.getName());
            if(draft.getAuthor() != null) news.setAuthor(draft.getAuthor());
            if(draft.getContent() != null) news.setContent(draft.getContent());
            this.updateEntity(news, alteredUserId);
        }
        else{
            draft.setParent(params.getString("id"));
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
    public void handleAuthReply(JSONObject params) throws Exception{
        String reply = params.getString("reply");
        T text = textRepository.findById(params.getString("id")).get();
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
        }
        else if("refuse".equals(reply)) {
            if(status.equals(ST_DEPRE)) {
                textRepository.deleteById(params.getString("id"));
            }
        }
        else {
            throw new Exception("Undefined reply");
        }
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

    public JSONArray queryByAuthor(JSONObject params) {
        return JsonUtil.toJSONArray((textRepository.findByCreatedUserId(params.getString("createdUserId"))));
    }

    public void concurrenceTest(JSONObject params) throws Exception{
        concurrenceTest(params,textRepository);
    }
}
