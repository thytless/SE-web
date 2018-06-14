package com.seweb.backend.service;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffService extends UserService<Staff> {

    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Staff toObject(JSONObject params) {
        return JSONObject.toJavaObject(params, Staff.class);
    }
}
