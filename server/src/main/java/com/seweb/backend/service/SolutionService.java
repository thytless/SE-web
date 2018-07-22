package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Solution;
import com.seweb.backend.domain.Text;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.mapper.CategoryMapper;
import com.seweb.backend.repository.SolutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.UUID;

@Service
public class SolutionService extends TextService<Solution>{
    @Autowired
    private SolutionRepository solutionRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    public JSONArray queryByCategory(JSONObject params) {
        return JsonUtil.toJSONArray(categoryMapper.getCaseByCategory(params.getString("category")));
    }

    @Override
    public Solution toObject(JSONObject params) {
        return JSONObject.toJavaObject(params, Solution.class);
    }


    @Override
    public void handleEdit(Solution parent, JSONObject params) {
        System.out.println("Solution");
        String name = params.getString("name");
        if(name != null) parent.setName(name);
        String content = params.getString("content");
        if(content != null) parent.setContent(content);
        String introduction = params.getString("introduction");
        if(introduction != null) parent.setIntroduction(introduction);

    }

    @Override
    public void handleEdit(Solution parent, Solution text) {
        parent.setName(text.getName());
        parent.setContent(text.getContent());
        parent.setIntroduction(text.getIntroduction());
    }
}
