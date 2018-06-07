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

    public JSONArray queryAllNews(){ return JsonUtil.toJSONArray(newsRepository.findAll()); }

    public JSONObject queryNewsById(JSONObject params) {
        String id = params.getString("id");
        //System.out.println(id);
        return JSON.parseObject(JSON.toJSONString(newsRepository.findById(id)));
    }
}
