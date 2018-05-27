package com.seweb.backend.service;

import com.seweb.backend.domain.User;
import com.seweb.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService extends BaseService<User> {

    @Autowired
    private UserRepository userRepository;

    public User getUserByUsername(String username)
    {
        return userRepository.findByUsername(username);
    }
}
