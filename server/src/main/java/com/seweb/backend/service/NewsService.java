package com.seweb.backend.service;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class NewsService extends TextService<News> {

    @Autowired
    private NewsRepository newsRepository;

    /**If unauthorized, edit straightforward
     * else create an unauthorized new copy & wait for auth
     *
     * @param params : name, author, content
     * @param alteredUserId : ~
     */
    @Override
    public void edit(JSONObject params, String alteredUserId) {
        News news = newsRepository.findById(params.getString("id")).get();
        News draft = JSONObject.toJavaObject(params, News.class);
        if(news.getStatus().equals(ST_UNAUTH)){
            if(draft.getName() != null) news.setName(draft.getName());
            if(draft.getAuthor() != null) news.setAuthor(draft.getAuthor());
            if(draft.getContent() != null) news.setContent(draft.getContent());
            if(draft.getPicture() != null) news.setPicture(draft.getPicture());
            this.updateEntity(news, alteredUserId);
        }
        else{
            draft.setId(UUID.randomUUID().toString());
            draft.setParent(params.getString("id"));
            draft.setStatus(ST_UNAUTH);
            this.saveEntity(draft, alteredUserId);
        }
    }

    public void bindNews(JSONObject params) {
        String newsId = params.getString("newsId");
        String url = params.getString("picURL");

        News news = newsRepository.findById(newsId).get();
        news.setPicture(url);
        this.updateEntity(news);
    }

    @Override
    public News toObject(JSONObject params) {
        return JSONObject.toJavaObject(params, News.class);
    }

    private void handleEdit(News parent, News text) {
        parent.setName(text.getName());
        parent.setAuthor(text.getAuthor());
        parent.setContent(text.getContent());
    }

    public JSONArray queryByCode(String code) {
        return JsonUtil.toJSONArray(newsRepository.findByCode(code));
    }
}
