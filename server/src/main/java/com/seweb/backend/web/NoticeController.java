package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.*;
import com.seweb.backend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class NoticeController extends BaseController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping(value = "/manage/notice")
    public Response allNotice(Request request) {
        Response response = new Response();

        try {
            response.data = noticeService.queryNoticeByTargetUserId(request.getUser().getId());
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

    @RequestMapping(value = "/manage/notice/delete")
    public Response deleteNotice(Request request) {
        Response response = new Response();

        try {
            noticeService.deleteNotice(request.getParams());
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
