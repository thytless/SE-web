package com.seweb.backend.web;

import com.seweb.backend.domain.Solution;
import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.service.NewsService;
import com.seweb.backend.service.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SolutionController extends BaseController{
    @Autowired
    private SolutionService solutionService;

    @RequestMapping(value = "/home/solution")
    public Response queryAllSolution(Request request) {
        Response response = new Response();
        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = solutionService.queryAll();
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

    @RequestMapping(value = "/home/solution/query")
    public Response querySolution(Request request){
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = solutionService.queryById(request.getParams());
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

    @RequestMapping(value = "/manage/content/solution/add")
    public Response addSolution(Request request) {
        Response response = new Response();

        try {
            solutionService.add(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/content/solution/delete")
    public Response deleteNews(Request request) {
        Response response = new Response();
        try {
            solutionService.delete(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/content/solution/edit")
    public Response editNews(Request request) {
        Response response = new Response();
        try {
            solutionService.edit(request.getParams(),request.getUser().getId());
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
