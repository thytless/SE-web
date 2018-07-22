package com.seweb.backend.service;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.framework.utils.string.StringUtil;
import com.seweb.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class NewsService extends TextService<News> {

    @Autowired
    private NewsRepository newsRepository;

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

    public void handleEdit(News parent, JSONObject params) {
        String name = params.getString("name");
        if(name != null) parent.setName(name);
        String content = params.getString("content");
        if(content != null) parent.setContent(content);
        String author = params.getString("author");
        if(author != null) parent.setName(author);
        String picture = params.getString("picture");
        if(picture != null) parent.setContent(picture);

    }

    public void handleEdit(News parent, News text) {
         parent.setName(text.getName());
         parent.setContent(text.getContent());
         parent.setAuthor(text.getAuthor());
         parent.setPicture(text.getPicture());
    }

    public JSONArray queryByCode(String code) {
        return JsonUtil.toJSONArray(newsRepository.findByCode(code));
    }
}
