package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.service.GuidanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GuidanceController extends BaseController {
    @Autowired
    private GuidanceService guidanceService;

    @RequestMapping(value = "/home/guidance")
    public Response queryAllGuidance(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = guidanceService.queryAll();
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

    @RequestMapping(value = "/home/guidance/query")
    public Response queryGuidance(Request request){
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = guidanceService.queryById(request.getParams());
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

    @RequestMapping(value = "/manage/content/guidance/add")
    public Response addGuidance(Request request) {
        Response response = new Response();

        try {
            guidanceService.add(request.getParams(),request.getUser().getId());
            response.status = ResponseType.SUCCESS;

        }
        catch(Exception e)
        {
            e.printStackTrace();

            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }

        return response;
    }

    @RequestMapping(value = "/manage/content/guidance/delete")
    public Response deleteGuidance(Request request) {
        Response response = new Response();
        try {
            guidanceService.delete(request.getParams(),request.getUser().getId());
            response.status = ResponseType.SUCCESS;
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

    @RequestMapping(value = "/manage/content/guidance/edit")
    public Response editGuidance(Request request) {
        Response response = new Response();
        try {
            guidanceService.edit(request.getParams(),request.getUser().getId());
            response.status = ResponseType.SUCCESS;

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
