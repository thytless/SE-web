package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class NewsController extends BaseController {

    @Autowired
    private NewsService newsService;

    @RequestMapping(value = "/home/news")
    public Response queryAllAuthorizedNews(Request request) {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = newsService.queryByStatus("authorized");
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

    @RequestMapping(value = "/home/news/query")
    public Response queryNews(Request request){
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = newsService.queryById(request.getParams());
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

    @RequestMapping(value = "/manage/news/add")
    public Response addNews(Request request) {
        Response response = new Response();

        try {
            response.data = newsService.add(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/news/delete")
    public Response deleteNews(Request request) {
        Response response = new Response();
        try {
            newsService.concurrenceTest(request.getParams());
            newsService.delete(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/news/edit")
    public Response editNews(Request request) {
        Response response = new Response();
        try {
            newsService.concurrenceTest(request.getParams());
            newsService.edit(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/news/pictureBind")
    public Response bindNews(Request request) {
        Response response = new Response();

        try {
            newsService.bindNews(request.getParams());
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

    @RequestMapping(value = "/manage/news/authorize/list")
    public Response queryAllUnauthorizedNews(Request request){
        Response response = new Response();
        try {
            response.status = ResponseType.SUCCESS;
            response.data = newsService.queryAuth();
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();
            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }
        return response;
    }

    @RequestMapping(value = "/manage/news/authorize/execute")
    public Response authorizeNews(Request request){
        Response response = new Response();
        try {
            response.status = ResponseType.SUCCESS;
            newsService.handleAuthReply(request.getParams());
            response.message = "";
        }
        catch (Exception e) {
            e.printStackTrace();
            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }
        return response;
    }
}
