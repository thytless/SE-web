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
        StringBuilder sqlBuilder = new StringBuilder("SELECT * FROM tbl_text_about ");
        sqlBuilder.append("WHERE enabled = 1 ");
        sqlBuilder.append("ORDER BY altered_time DESC LIMIT 0,1");

        List<About> aboutList = aboutRepository.executeSql(sqlBuilder.toString(),null);
        if(aboutList.size() == 0){
            throw new Exception("No enabled ABOUT.");
        }

        JSONObject aboutJsonObject = JSON.parseObject(JSON.toJSONString(aboutList.get(0)));
        JSONObject resultJson = new JSONObject();

        resultJson.put("total", aboutList.size());
        resultJson.put("data", aboutJsonObject);

        return resultJson;
    }
}
