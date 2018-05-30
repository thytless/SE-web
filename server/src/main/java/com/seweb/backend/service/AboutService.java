package com.seweb.backend.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.About;
import com.seweb.backend.framework.helpers.pagination.PageResult;
import com.seweb.backend.framework.helpers.pagination.Pager;
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
        StringBuilder hqlBuilder = new StringBuilder("FROM About about WHERE about.enabled = true ");
        hqlBuilder.append("ORDER BY alteredTime DESC LIMIT 0,1");

        List<About> aboutList = aboutRepository.executeHql(hqlBuilder.toString(),null);
        if(aboutList.size() == 0){
            throw new Exception("No enabled ABOUT.");
        }

        JSONArray aboutJsonArray = JsonUtil.toJSONArray(aboutList);

        JSONObject resultJson = new JSONObject();

        resultJson.put("total", aboutJsonArray.size());
        resultJson.put("data", aboutJsonArray.get(0));

        return resultJson;
    }
}
