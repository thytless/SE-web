package com.seweb.backend.service;

import com.seweb.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ClientService extends UserService{

    @Autowired
    private ClientRepository clientRepository;


}
