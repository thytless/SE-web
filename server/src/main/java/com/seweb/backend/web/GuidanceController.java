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
    public Response queryAllGuidance(Request request) {
        Response response = new Response();

        try
        {
            response.status = ResponseType.SUCCESS;
            response.data = guidanceService.queryByStatus("authorized");
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
