package com.seweb.backend.service;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService extends BaseService<News> {

    @Autowired
    private NewsRepository newsRepository;

    public JSONArray queryAllNews(){
        List<News> news = newsRepository.findAll();
        JSONArray jsonArray = JsonUtil.toJSONArray(news);
        return jsonArray;
    }

    public JSONObject queryNews(JSONObject params) {
        String id=(String)params.getString("id");
        System.out.println(id);
        JSONObject jsonObject = JSON.parseObject(JSON.toJSONString(newsRepository.findById(id)));
        return jsonObject;
    }

    public void addNews(JSONObject params) {
        News news = JSONObject.toJavaObject(params, News.class);
        //this.save
    }
}