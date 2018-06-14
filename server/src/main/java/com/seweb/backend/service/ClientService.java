package com.seweb.backend.service;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Client;
import com.seweb.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ClientService extends UserService<Client>{

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client toObject(JSONObject params) {
        return JSONObject.toJavaObject(params, Client.class);
    }
}
