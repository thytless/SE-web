package com.seweb.backend.web;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.mapper.CategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class CategoryController extends BaseController {

    @Autowired
    private CategoryMapper categoryMapper;

    @RequestMapping(value = "/home/category")
    public Response queryAllCategory(Request request) {
        Response response = new Response();
        try
        {
            response.status = ResponseType.SUCCESS;
            List<String> categoryList = categoryMapper.getCategory();
            JSONObject json = new JSONObject();
            int i = 1;
            for (String string : categoryList) {
                json.put((i++)+"",string);
            }
            response.data = json;
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

    @RequestMapping(value = "/critical/category/edit")
    public Response editCategory(Request request) {
        Response response = new Response();
        try
        {
            JSONObject params = request.getParams();
            response.status = ResponseType.SUCCESS;
            categoryMapper.editCategory(params.getString("id"),params.getString("name"));
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
