package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.domain.Solution;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.NewsRepository;
import com.seweb.backend.repository.SolutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SolutionService extends TextService<Solution>{
    @Autowired
    private SolutionRepository solutionRepository;

    /**If unauthorized, edit straightforward
     * else create an unauthorized new copy & wait for auth
     *
     * @param params : name, content, introduction
     * @param alteredUserId : ~
     */
    @Override
    public void edit(JSONObject params, String alteredUserId) {
        Solution solution = solutionRepository.findById(params.getString("id")).get();
        Solution draft = JSONObject.toJavaObject(params, Solution.class);
        if(solution.getStatus().equals(ST_UNAUTH)){
            if(draft.getName() != null) solution.setName(draft.getName());
            if(draft.getContent() != null) solution.setContent(draft.getContent());
            if(draft.getIntroduction() != null) solution.setIntroduction(draft.getIntroduction());
            this.updateEntity(solution, alteredUserId);
        }
        else{
            draft.setParent(params.getString("id"));
            draft.setStatus(ST_UNAUTH);
            this.saveEntity(draft, alteredUserId);
        }
    }
}
