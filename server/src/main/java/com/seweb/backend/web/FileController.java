package com.seweb.backend.web;

import com.seweb.backend.domain.Picture;
import com.seweb.backend.framework.core.web.Request;
import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import com.seweb.backend.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.UUID;

@CrossOrigin
@RestController
public class FileController {
    @Autowired
    private PictureService pictureService;
    // 设置文件存储路径
    private String filePath = "/Users/jin/Documents/";

    @RequestMapping(value = "/upload")
    public Response upload(@RequestParam("file") MultipartFile file) {
        Response response = new Response();

        try {
            if (file.isEmpty()) {
                response.status=ResponseType.FAILURE;
                return response;
            }
            // 获取文件名
            String fileName = file.getOriginalFilename();
            // 获取文件的后缀名
            String suffixName = fileName.substring(fileName.lastIndexOf("."));
            //System.out.println(suffixName);
            //".pdf"
            pictureService.addPicture(fileName);

            String path = filePath + fileName ;


            File dest = new File(path);
            // 检测是否存在目录
            if (!dest.getParentFile().exists()) {
                dest.getParentFile().mkdirs();// 新建文件夹
            }
            file.transferTo(dest);// 文件写入
            response.status=ResponseType.SUCCESS;
            return response;
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        response.status=ResponseType.FAILURE;
        return response;
    }

    @RequestMapping("/download/{name}")
    public ResponseEntity<InputStreamResource> downloadFile(@PathVariable("name")String name, HttpServletRequest request) {
        if (name != null) {
            //设置文件路径

            //String realPath = "D://aim//";

            File file = new File(filePath+name);

            InputStream inputStream;
            try {
                inputStream=new FileInputStream(file);
                InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
                HttpHeaders headers=new HttpHeaders();
                headers.add("Content-Type", "application/octet-stream");

                //headers.add("Content-Disposition", "attachment;filename="+fileName);
                try {
                    headers.add("Content-Disposition", "attachment;filename="+URLEncoder.encode(name, "UTF-8"));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
                ResponseEntity<InputStreamResource> response =
                        new ResponseEntity<InputStreamResource>(inputStreamResource, headers, HttpStatus.OK);
                return response;

            } catch (FileNotFoundException e) {
                return ResponseEntity.notFound().build();
            }

        }
        return null;
    }

    @RequestMapping("/deleteFile/{name}")
    public void deleteFile(@PathVariable("name")String name) throws Exception{
        if(name == null)
            System.out.println("请输入文件名");

        //TODO：考虑文件不存在的情况
        File targetFile= null;
        if (name != null) {
            targetFile = new File(filePath,name);
        }
        else {
            throw new Exception("Request file not exist.");
        }
        boolean isDelete = targetFile.delete();
        pictureService.deletePicture(name);
    }

    @RequestMapping("/home/certificate")
    public Response queryPictureByCode(Request request) {
        Response response = new Response();

        try {
            response.data = pictureService.queryCertificate();
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

    @RequestMapping("/home/certificate/query")
    public Response queryPictureById(Request request) {
        Response response = new Response();

        try {
            response.data = pictureService.queryPictureById(request.getParams());
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

    @RequestMapping("/critical/certificate/delete")
    public Response deleteCertificate(Request request) {
        Response response = new Response();

        try {
            pictureService.deletePicture(request.getParams().getString("name"));
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

    @RequestMapping("/critical/certificate/add")
    public Response addCertificate(Request request) {
        Response response = new Response();

        try {
            pictureService.addCertificate(request.getParams().getString("name"));
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
