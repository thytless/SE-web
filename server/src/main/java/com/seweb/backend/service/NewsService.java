package com.seweb.backend.service;


import com.alibaba.fastjson.JSONArray;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class NewsService extends TextService {

    @Autowired
    private NewsRepository newsRepository;

    public JSONArray queryAllNews(){
        return JsonUtil.toJSONArray(newsRepository.findAll());
    }


}
