package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.About;
import com.seweb.backend.domain.User;
import com.seweb.backend.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AboutService extends TextService<About>{

    @Autowired
    private AboutRepository aboutRepository;
}
