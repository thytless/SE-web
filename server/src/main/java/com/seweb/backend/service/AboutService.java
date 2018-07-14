package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.About;
import com.seweb.backend.domain.User;
import com.seweb.backend.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AboutService extends TextService<About>{

    @Autowired
    private AboutRepository aboutRepository;

    public JSONObject getAbout() throws Exception{
        List<About> aboutList = aboutRepository.findAll();
        if(aboutList.size() == 0){
            throw new Exception("No enabled ABOUT.");
        }

        return JSON.parseObject(JSON.toJSONString(aboutList.get(0)));
    }

    public JSONObject editAbout(JSONObject params){
        About about = aboutRepository.findAll().get(0);
        about.setContent(params.getString("content"));
        updateEntity(about,params.getString("alteredUserId"));
        return JSON.parseObject(JSON.toJSONString(about));
    }
}
