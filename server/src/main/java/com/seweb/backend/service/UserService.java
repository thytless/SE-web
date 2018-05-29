package com.seweb.backend.service;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.User;
import com.seweb.backend.framework.utils.encryption.MD5Util;
import com.seweb.backend.framework.utils.string.StringUtil;
import com.seweb.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService<T extends User> extends BaseService<T> {

    public UserRepository<T> userRepository;

    @Autowired
    public void setUserRepository(UserRepository<T> userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByUsername(String username)
    {
        return userRepository.findByUsername(username);
    }

    public User getLoginUser(JSONObject params) throws Exception
    {
        String userName = params.getString("username");
        if(StringUtil.isEmpty(userName))
        {
            throw new Exception("empty username");
        }

        String password = params.getString("password");
        if(StringUtil.isEmpty(password))
        {
            throw new Exception("empty password");
        }

        User user = userRepository.findByUsername(userName);
        if(user == null)
        {
            throw new Exception("no such user");
        }

        String encrptedPassword = MD5Util.encrypt(password);
        if(!encrptedPassword.equals(user.getPassword()))
        {
            throw new Exception("incorrect password");
        }

        return user;
    }
}
