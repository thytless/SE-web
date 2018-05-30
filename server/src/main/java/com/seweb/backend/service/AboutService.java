package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.About;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AboutService extends TextService<About>{

    @Autowired
    private AboutRepository aboutRepository;

    public JSONObject getLatestEnabledAbout() throws Exception{
        StringBuilder hqlBuilder = new StringBuilder("FROM About about ");
        hqlBuilder.append("WHERE about.enabled = 1 ");
        hqlBuilder.append("ORDER BY alteredTime DESC");

        List<About> aboutList = aboutRepository.executeHql(hqlBuilder.toString(),null);
        if(aboutList.size() == 0){
            throw new Exception("No enabled ABOUT.");
        }

        About about = (About)(aboutList.toArray()[0]);
        //String about = aboutList.toString();

        JSONObject aboutJsonObject = JSON.parseObject(JSON.toJSONString(about));

        JSONObject resultJson = new JSONObject();

        resultJson.put("total", aboutList.size());
        resultJson.put("data", aboutJsonObject);
        //resultJson.put("data", about);

        return resultJson;
    }
}
