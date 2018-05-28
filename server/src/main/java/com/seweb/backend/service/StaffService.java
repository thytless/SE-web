package com.seweb.backend.service;

import com.seweb.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class StaffService extends UserService {

    @Autowired
    private StaffRepository staffRepository;

}
