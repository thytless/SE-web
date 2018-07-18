package com.seweb.backend.service;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.domain.Text;
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
            this.updateEntity(news, alteredUserId);
        }
        else{
            draft.setParent(params.getString("id"));
            draft.setStatus(ST_UNAUTH);
            this.saveEntity(draft, alteredUserId);
        }
    }

    public void bindNews(JSONObject params) {
        //params包括id、picture其中，以id为主
        String id = params.getString("id");
        String picture = params.getString("picture");

        JSONObject tp=JSON.parseObject(JSON.toJSONString(newsRepository.findById(id)));
        News news = JSONObject.toJavaObject(tp, News.class);
        news.setPicture(picture);
        this.updateEntity(news);
    }
}
