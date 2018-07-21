package com.seweb.backend.web;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ContentAuthController extends BaseController {

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

    @RequestMapping(value = "/auth/content/query")
    public Response queryContent(Request request) {
        Response response = new Response();
        JSONObject params = request.getParams();
        try {
            String type = params.getString("type");
            switch (type) {
                case "about" : {
                    response.data = aboutService.queryById(params);
                    break;
                }
                case "case" : {
                    response.data = caseService.queryById(params);
                    break;
                }
                case "contact" : {
                    response.data = contactService.queryById(params);
                    break;
                }
                case "guidance" : {
                    response.data = guidanceService.queryById(params);
                    break;
                }
                case "solution" : {
                    response.data = solutionService.queryById(params);
                    break;
                }
            }

            response.status = ResponseType.SUCCESS;
            response.message = "";
        }
        catch (Exception e){
            e.printStackTrace();
            response.status = ResponseType.FAILURE;
            response.message = e.getMessage();
        }
        return response;
    }

    @RequestMapping(value = "/auth/content/list")
    public Response queryAllUnauthorized(Request request){
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

    @RequestMapping(value = "/auth/content/execute")
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
