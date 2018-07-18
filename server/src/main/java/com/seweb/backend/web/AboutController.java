package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AboutController extends TextController{

    @Autowired
    private AboutService aboutService;

    @RequestMapping(value = "/home/about")
    public Response queryAbout(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = aboutService.queryAll();
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

    @RequestMapping(value = "/manage/content/about/edit")
    public Response editAbout(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            aboutService.edit(request.getParams(),request.getUser().getId());
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
