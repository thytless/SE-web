package com.seweb.backend.web;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ContentAuthController extends TextController {

    @Autowired
    private AboutService aboutService;

    @Autowired
    private CaseService caseService;

    @Autowired
    private ContactService contactService;

    @Autowired
    private GuidanceService guidanceService;

    @Autowired
    private SolutionService solutionService;

    @RequestMapping(value = "/manage/content/authorize/list")
    public Response queryAllUnauthorizedNews(Request request){
        Response response = new Response();
        try {
            JSONObject data = new JSONObject();
            data.put("about",aboutService.queryAuth());
            data.put("case",caseService.queryAuth());
            data.put("contact",contactService.queryAuth());
            data.put("guidance",guidanceService.queryAuth());
            data.put("solution",solutionService.queryAuth());

            response.status = ResponseType.SUCCESS;
            response.data = data;
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();
            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }
        return response;
    }

    @RequestMapping(value = "/manage/content/authorize/execute")
    public Response authorize(Request request){
        Response response = new Response();
        JSONObject params = request.getParams();
        try {
            response.status = ResponseType.SUCCESS;
            if(!aboutService.handleAuthReply(params) &&
                    !caseService.handleAuthReply(params) &&
                    !contactService.handleAuthReply(params) &&
                    !guidanceService.handleAuthReply(params) &&
                    !solutionService.handleAuthReply(params)){
                throw new Exception("cannot find the text to be authorize");
            }
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
