package com.seweb.backend.web;

import com.seweb.backend.framework.core.web.Response;
import com.seweb.backend.framework.core.web.ResponseType;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;

@RestController
public class FileController {
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

            // 设置文件存储路径
            String filePath = "/Users/jin/Documents/";
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

    @RequestMapping("/download")
    public ResponseEntity<InputStreamResource> downloadFile(HttpServletRequest request) {
        // 设置文件名，根据业务需要替换成要下载的文件名
        String name="成绩互评.png";

        if (name != null) {
            //设置文件路径
            //String realPath = "D://aim//";
            String realPath = "/Users/jin/Documents/";
            File file = new File(realPath+name);

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
}
