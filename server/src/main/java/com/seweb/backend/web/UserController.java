package com.seweb.backend.web;

import com.seweb.backend.domain.User;
import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.service.ClientService;
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

    @Autowired
    private ClientService clientService;

    @RequestMapping(value = "/register")
    public Response register(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            if(request.getParams().getString("regType") == "CLIENT"){
                clientService.register(request.getParams());
            }
            else{
                staffService.register(request.getParams());
            }
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
