package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.service.CaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CaseController extends BaseController {
    @Autowired
    private CaseService caseService;

    @RequestMapping(value = "/home/case")
    public Response queryAllCase(Request request) {
        Response response = new Response();
        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = caseService.queryAll();
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

    @RequestMapping(value = "/home/case/query")
    public Response queryCase(Request request){
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = caseService.queryById(request.getParams());
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

    @RequestMapping(value = "/manage/content/case/add")
    public Response addCase(Request request) {
        Response response = new Response();

        try {
            caseService.add(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/content/case/delete")
    public Response deleteCase(Request request) {
        Response response = new Response();
        try {
            caseService.delete(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/content/case/edit")
    public Response editCase(Request request) {
        Response response = new Response();
        try {
            caseService.edit(request.getParams(),request.getUser().getId());
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
}
