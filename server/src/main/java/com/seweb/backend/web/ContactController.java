package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ContactController extends BaseController {
    @Autowired
    private ContactService contactService;

    @RequestMapping(value = "/home/contact")
    public Response queryAllContact(Request request)
    {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = contactService.queryAll();
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

    @RequestMapping(value = "/home/contact/query")
    public Response queryContact(Request request){
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = contactService.queryById(request.getParams());
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

    @RequestMapping(value = "/manage/content/contact/add")
    public Response addContact(Request request) {
        Response response = new Response();

        try {
            contactService.add(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/content/contact/delete")
    public Response deleteContact(Request request) {
        Response response = new Response();
        try {
            contactService.delete(request.getParams(),request.getUser().getId());
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

    @RequestMapping(value = "/manage/content/contact/edit")
    public Response editContact(Request request) {
        Response response = new Response();
        try {
            contactService.edit(request.getParams(),request.getUser().getId());
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
