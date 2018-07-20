package com.seweb.backend.web;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController extends BaseController{
    @Autowired
    private StaffService staffService;

    @RequestMapping(value = "/home/staffRegister")
    public Response register(Request request) {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;

            /* Now staff registration only. */

            staffService.addStaff(request.getParams());

            /*
            if(request.getParams().getString("isStaffReg") == "false"){
                clientService.register(request.getParams());
            }
            else{
                staffService.register(request.getParams());
            }
            */
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

    @RequestMapping(value = "/manage/editStaff")
    public Response updateStaffInfo(Request request){
        Response response = new Response();

        try{
            response.status = ResponseType.SUCCESS;
            JSONObject params = request.getParams();
            if(!request.getUser().getUsername().equals(params.getString("username")))
                throw new Exception("Access Denied! You cannot edit other's profile.");
            staffService.updateStaff(request.getParams(),request.getUser().getId());
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();

            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }

        return response;
    }

    @RequestMapping(value = "/manage/critical/editStaff")
    public Response updateStaff(Request request){
        Response response = new Response();

        try{
            response.status = ResponseType.SUCCESS;
            staffService.updateStaff(request.getParams(),request.getUser().getId());
            staffService.updateStaffRoles(request.getParams());
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();

            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }

        return response;
    }

    @RequestMapping(value = "/manage/critical/allStaff")
    public Response queryAllStaff(Request request){
        Response response = new Response();

        try{
            response.status = ResponseType.SUCCESS;
            response.data = staffService.queryAllStaff();
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();

            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }

        return response;
    }

    @RequestMapping(value = "/manage/critical/deleteStaff")
    public Response deleteStaff(Request request){
        Response response = new Response();

        try{
            response.status = ResponseType.SUCCESS;
            staffService.deleteStaff(request.getParams());
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();

            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }

        return response;
    }


}
