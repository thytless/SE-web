package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class NewsController extends TextController{

    @Autowired
    private NewsService newsService;

    @RequestMapping(value = "/home/news")
    public Response queryAllNews(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = newsService.queryAllNews();
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
            response.data = newsService.queryNewsById(request.getParams());
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
            newsService.addNews(request.getParams());
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
            newsService.deleteNews(request.getParams());
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
            newsService.editNews(request.getParams());
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
