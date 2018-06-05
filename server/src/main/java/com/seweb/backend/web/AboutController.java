package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.service.AboutService;
import com.seweb.backend.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AboutController extends TextController{

    @Autowired
    private AboutService aboutService;

    @RequestMapping(value = "/about")
    public Response queryLatestEnabledAbout(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = aboutService.getLatestEnabledAbout();
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
