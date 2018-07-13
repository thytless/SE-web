package com.seweb.backend.service;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Function;
import com.seweb.backend.domain.Role;
import com.seweb.backend.repository.FunctionRepository;
import com.seweb.backend.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class RoleService extends BaseService<Role>
{
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private FunctionRepository functionRepository;
	
	private void setFunctions(Role role, JSONObject params) throws Exception
	{
		JSONArray functionIds = params.getJSONArray("functions");
		if(functionIds != null)
		{
			List<Function> functions = new ArrayList<Function>();
			
			for(int i = 0; i < functionIds.size(); i++)
			{
				String functionId = functionIds.getString(i);

				String hql = "FROM FUNCTION function WHERE function.id == :functionId";
				HashMap<String, Object> paramsMap = new HashMap<String, Object>();
				paramsMap.put("functionId",functionId);

				List<Function> functionList = functionRepository.executeHql(hql,paramsMap);

				if(functionList.size() == 0){
					throw new Exception("No such roleId");
				}
				else{
					functions.add(functionList.get(0));
				}
			}
			
			role.setFunctions(functions);
		}
	}
}
