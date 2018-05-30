package com.seweb.backend.service;


import com.alibaba.fastjson.JSONArray;
import com.seweb.backend.domain.News;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsService extends BaseService<News> {

    @Autowired
    private NewsRepository newsRepository;

    public JSONArray queryAllNews(){
        return JsonUtil.toJSONArray(newsRepository.findAll());
    }


}
