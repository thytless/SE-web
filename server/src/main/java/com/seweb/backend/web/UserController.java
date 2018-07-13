package com.seweb.backend.web;

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
    public Response register(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;

            /* Now staff registration only. */

            staffService.addUser(request.getParams());

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

    @RequestMapping(value = "/manage/editAccount")
    public Response updateUserInfo(Request request){
        Response response = new Response();

        try{
            response.status = ResponseType.SUCCESS;
            staffService.updateUser(request.getParams(),request.getUser());
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();

            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }

        return response;
    }

    @RequestMapping(value = "/critical/deleteAccount")
    public Response deleteUser(Request request){
        Response response = new Response();

        try{
            response.status = ResponseType.SUCCESS;
            staffService.deleteUser(request.getParams());
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
