package com.seweb.backend.service;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.awt.geom.AreaOp;

import java.util.List;
import java.util.UUID;

@Service
public class NewsService extends BaseService<News> {

    @Autowired
    private NewsRepository newsRepository;

    public JSONArray queryAllNews(){
        //一键查询，返回所有
        return JsonUtil.toJSONArray(newsRepository.findAll());
    }


    public JSONObject queryNewsById(JSONObject params) {
        //根据id查询
        String id = params.getString("id");
        return JSON.parseObject(JSON.toJSONString(newsRepository.findById(id)));
    }

    public void addNews(JSONObject params) {
        //params包括name、content
        News news = JSONObject.toJavaObject(params, News.class);
        news.setId(UUID.randomUUID().toString());
        this.saveEntity(news);
    }

    public void deleteNews(JSONObject params) {
        //根据id删除
        String id = params.getString("id");
        this.deleteEntity(id);
    }

    public void editNews(JSONObject params) {
        //params包括id、name、content其中，以id为主
        //其他消息会被置为null
        String id = params.getString("id");
        String name=params.getString("name");
        String content=params.getString("content");

        JSONObject tp=JSON.parseObject(JSON.toJSONString(newsRepository.findById(id)));
        News news = JSONObject.toJavaObject(tp, News.class);
        news.setName(name);
        news.setContent(content);

    }
}
