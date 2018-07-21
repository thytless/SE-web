package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Guidance;
import com.seweb.backend.domain.News;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.GuidanceRepository;
import com.seweb.backend.repository.NewsRepository;
import com.seweb.backend.repository.TextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class GuidanceService extends TextService<Guidance> {
    @Autowired
    private GuidanceRepository guidanceRepository;

    @Override
    public Guidance toObject(JSONObject params) {
        return JSONObject.toJavaObject(params, Guidance.class);
    }
}
