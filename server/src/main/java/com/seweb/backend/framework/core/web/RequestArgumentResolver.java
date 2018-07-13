package com.seweb.backend.framework.core.web;

import java.util.Date;

import com.seweb.backend.domain.Client;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.domain.type.UserType;
import com.seweb.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.service.*;
import com.seweb.backend.framework.utils.date.DateUtil;

public class RequestArgumentResolver implements HandlerMethodArgumentResolver 
{
	@Autowired
	private StaffService staffService;
	
    @Override
    public boolean supportsParameter(MethodParameter methodParameter)
    {
    	System.out.println("请求是否为Request类型："+methodParameter.getParameterType().equals(Request.class));
    	//如果controller的形参为Request对象，则返回true，表示需要处理该参数分解，调用下面的resolveArgument处理
        return methodParameter.getParameterType().equals(Request.class);
    }
 
    @Override
    public Object resolveArgument(MethodParameter methodParameter, ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception 
    {
    	Request request = new Request();

		System.out.println("RequestInfo: "+webRequest);

    	//通过请求中的参数username设置request的user&userType
    	String username = webRequest.getParameter("username");

		String[] descriptions = webRequest.getDescription(true).split(";");
		String uri = descriptions[0].split("=")[1];
		String client = descriptions[1].split("=")[1];
		request.setUri(uri);
		request.setClient(client);

		/* MODIFIED BEGIN */

		if(username != null) {

			/* not registration & username not found*/
			if(!"/staffLogin".equals(uri)) {
				Staff staff = staffService.getUserByUsername(username);
				if (staff == null) {
					throw new Exception("Username:" + username + " not exist!");
				} else if (staff.getAdmin() == 1) {
					request.setUser(staff);
				} else {
					request.setUser(staff);
				}
			}

			/* username duplication */
			else if(staffService.getUserByUsername(username) != null){
				throw new Exception("Username:" + username + " exists!");
			}

		}


    	/* END */

    	String dateTime = DateUtil.formatTime(new Date());
    	request.setDateTime(dateTime);
    	
        String paramsString = webRequest.getParameter("params");
        JSONObject params = JSONObject.parseObject(paramsString);
        
        request.setParams(params);

        return request;
    }

}