package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.News;
import com.seweb.backend.domain.Picture;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.midi.Soundbank;
import java.io.File;
import java.util.UUID;

@Service
public class PictureService extends BaseService<Picture>{

    @Autowired
    private PictureRepository pictureRepository;

    private static final String magicString = "0010";


    public JSONArray queryAllPicture(){
        //一键查询，返回所有
        return JsonUtil.toJSONArray(pictureRepository.findAll());
    }


    public JSONObject queryPictureById(JSONObject params) {
        //根据id查询
        String id = params.getString("id");
        return JSON.parseObject(JSON.toJSONString(pictureRepository.findById(id)));
    }

    public JSONArray queryCertificate() {
        return JsonUtil.toJSONArray(pictureRepository.findByCode(magicString));
    }

    public void addPicture(String fileName) {
        //params包括name、content
        Picture picture = new Picture();
        picture.setName(fileName);
        picture.setId(UUID.randomUUID().toString());
        this.saveEntity(picture);
    }

    public void addCertificate(String fileName) {
        //params包括name、content
        Picture picture = new Picture();
        picture.setName(fileName);
        picture.setCode(magicString);
        picture.setId(UUID.randomUUID().toString());
        this.saveEntity(picture);
    }

    public void deletePicture(String name) {
        //根据id删除
        //String id = params.getString("id");
        //this.deleteEntity(id);

        pictureRepository.deleteByName(name);


    }

    public void editPicture(JSONObject params) {
        //params包括id、name、content其中，以id为主
        //其他消息会被置为null
        String id = params.getString("id");
        String name=params.getString("name");


        JSONObject tp=JSON.parseObject(JSON.toJSONString(pictureRepository.findById(id)));
        Picture picture = JSONObject.toJavaObject(tp, Picture.class);
        picture.setName(name);

        this.updateEntity(picture);

    }
}
