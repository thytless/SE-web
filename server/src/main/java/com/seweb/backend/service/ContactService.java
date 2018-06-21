package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Contact;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ContactService extends BaseService<Contact>{
    @Autowired
    private ContactRepository contactRepository;

    public JSONArray queryAllContact(){ return JsonUtil.toJSONArray(contactRepository.findAll()); }

    public JSONObject queryContactById(JSONObject params) {
        String id = params.getString("id");
        //System.out.println(id);
        return JSON.parseObject(JSON.toJSONString(contactRepository.findById(id)));
    }

    public void addContact(JSONObject params) {
        Contact contact = JSONObject.toJavaObject(params, Contact.class);
        contact.setId(UUID.randomUUID().toString());
        this.saveEntity(contact);

    }

    public void deleteContact(JSONObject params) {
        String id = params.getString("id");
        this.deleteEntity(id);
    }

    public void editContact(JSONObject params) {
        Contact contact = JSONObject.toJavaObject(params, Contact.class);
        this.updateEntity(contact);
    }
}
