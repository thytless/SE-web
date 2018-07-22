package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Case;
import com.seweb.backend.domain.News;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.mapper.CategoryMapper;
import com.seweb.backend.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.UUID;

@Service
public class CaseService extends TextService<Case>{
    @Autowired
    private CaseRepository caseRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    public JSONArray queryByCategory(JSONObject params) {
        return JsonUtil.toJSONArray(categoryMapper.getCaseByCategory(params.getString("category")));
    }

    @Override
    public Case toObject(JSONObject params) {
        return JSONObject.toJavaObject(params, Case.class);
    }
}
