package com.seweb.backend.web;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.framework.utils.encryption.HmacSHA256Util;
import com.seweb.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AuthController extends BaseController {

    @Autowired
    private StaffService staffService;

    @RequestMapping(value = "/home/staffLogin")
    public Response staffLogin(Request request)
    {
        Response response = new Response();

        try
        {
            Staff staff = staffService.getLoginUser(request.getParams());
            JSONObject userJson = JSONObject.parseObject(JSONObject.toJSONString(staff));
            //user中没有modules信息，但前端需要，故这里将该用户可以管理的modules发给前端，
            //前端根据这些modules决定侧边栏显示哪些modules
            //userJson.put("modules", functionService.getFunctionsHierarchies(user.getFunctions()));
            //logger.info("处理完成");
            //System.out.println("处理完成--systemout");

            userJson.put("roleString",staffService.getStaffRoleStringByStaffId(staff.getId()));

            String digest = HmacSHA256Util.digest(staff.getUsername(), staff.getPassword());
            userJson.put("clientDigest", digest);

            response.status = ResponseType.SUCCESS;
            response.data = userJson;
            response.message = "";
        }
        catch(Exception e)
        {
            e.printStackTrace();

            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }

        return response;
    }



}
