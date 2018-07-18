package com.seweb.backend.service;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.domain.User;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.mapper.AuthMapper;
import com.seweb.backend.repository.NewsRepository;
import org.hibernate.sql.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.awt.geom.AreaOp;

import java.util.List;
import java.util.UUID;

@Service
public class NewsService extends TextService<News> {

    @Autowired
    private NewsRepository newsRepository;

    private static final String TBL_NAME = "tbl_text_news";

    private static String ST_AUTH = "authorized";
    private static String ST_UNAUTH = "unauthorized";
    private static String ST_DEPRE = "deprecated";

    /**
     *
     * @param params : name, author, content
     * @param createdUserId : ~
     */
    /*public JSONObject addNews(JSONObject params, String createdUserId) {
        News news = JSONObject.toJavaObject(params, News.class);
        news.setStatus(ST_UNAUTH);
        this.saveEntity(news,createdUserId);
        JSONObject idJson = new JSONObject();
        idJson.put("id", news.getId());
        return idJson;
    }*/


    /** If unauthorized, delete straightforward
     * else create a deprecated copy & wait for auth
     *
     * @param params : newsId
     * @param userId :
     */
    /*public void deleteNews(JSONObject params, String userId) {
        String id = params.getString("id");
        News news = newsRepository.findById(params.getString("id")).get();
        if(news.getStatus().equals(ST_UNAUTH))
            this.deleteEntity(id);
        else {
            JSONObject draftJson = JSON.parseObject(JSON.toJSONString(news));
            News draft = JSONObject.toJavaObject(draftJson, News.class);
            draft.setId(UUID.randomUUID().toString());
            draft.setParent(id);
            draft.setStatus(ST_DEPRE);
            this.saveEntity(draft,userId);
        }
    }*/


    /**If unauthorized, edit straightforward
     * else create an unauthorized new copy & wait for auth
     *
     * @param params : name, author, content
     * @param alteredUserId : ~
     */
    /*public void editNews(JSONObject params, String alteredUserId) {
        News news = newsRepository.findById(params.getString("id")).get();
        News draft = JSONObject.toJavaObject(params, News.class);
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
    }*/

    /**Case 1. ADD (NEW)
     * Case 2. CHANGE (EDIT)
     * Case 3. DELETE
     *
     * Accept:  Case 1. Set status of new news to "authorized".
     *          Case 2. Set status of changed news to "authorized", copy creating message and delete old news.
     *          Case 3. Delete both the deprecated copy and its parent.
     * Refuse:  Case 1. Do nothing.
     *          Case 2. Do nothing.
     *          Case 3. Delete the deprecated copy.
     *
     * @param params : id, reply:{accept, refuse}
     * @throws Exception : ~
     */
    /*public void handleAuthReply(JSONObject params) throws Exception{
        String reply = params.getString("reply");
        News news = newsRepository.findById(params.getString("id")).get();
        String parentId = news.getParent();
        String status = news.getStatus();

        *//* TODO: Send Notice *//*
        if("accept".equals(reply)) {
            if(parentId == null) {*//* ADD *//*
                news.setStatus(ST_AUTH);
            }
            else {
                if(status.equals(ST_UNAUTH)) {*//* CHANGE *//*
                    News parent = newsRepository.findById(parentId).get();
                    news.setCreatedTime(parent.getCreatedTime());
                    news.setCreatedUserId(parent.getCreatedUserId());
                    newsRepository.deleteById(parentId);
                    news.setStatus(ST_AUTH);
                    this.updateEntity(news,news.getCreatedUserId());

                }
                else if(status.equals(ST_DEPRE)){*//* DELETE *//*
                    newsRepository.deleteById(params.getString("id"));
                    newsRepository.deleteById(parentId);
                }
                else {
                    throw new Exception("Undefined text status");
                }
            }
        }
        else if("refuse".equals(reply)) {
            if(status.equals(ST_DEPRE)) {
                newsRepository.deleteById(params.getString("id"));
            }
        }
        else {
            throw new Exception("Undefined reply");
        }
    }*/




}
