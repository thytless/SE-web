package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Role;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.domain.User;
import com.seweb.backend.framework.utils.encryption.MD5Util;
import com.seweb.backend.framework.utils.string.StringUtil;
import com.seweb.backend.repository.RoleRepository;
import com.seweb.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

public class UserService<T extends User> extends BaseService<T> {

    public UserRepository<T> userRepository;

    private RoleRepository roleRepository;

    @Autowired
    public void setUserRepository(UserRepository<T> userRepository) {
        this.userRepository = userRepository;
    }

    public T getUserByUsername(String username)
    {
        return userRepository.findByUsername(username);
    }

    public T getLoginUser(JSONObject params) throws Exception
    {
        //All password are encrypted.
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

        T user = userRepository.findByUsername(userName);
        if(user == null)
        {
            throw new Exception("no such user");
        }

        String encryptedPassword = MD5Util.encrypt(password);
        if(!password.equals(user.getPassword()))
        {
            throw new Exception("incorrect password");
        }

        return user;
    }

    public void addUser(JSONObject params) throws Exception{

        T user = toObject(params);
        user.setId(UUID.randomUUID().toString());

        JSONArray roleIds = params.getJSONArray("roleIds");
        if(roleIds != null)
        {
            List<Role> roles = new ArrayList<Role>();


            for(int i = 0; i < roleIds.size(); i++)
            {
                String roleId = roleIds.getString(i);
                String hql = "FROM ROLE role WHERE role.id == :roleId";
                HashMap<String, Object> paramsMap = new HashMap<String, Object>();
                paramsMap.put("roleId",roleId);

                List<Role> roleList = roleRepository.executeHql(hql,paramsMap);

                if(roleList.size() == 0){
                    throw new Exception("No such roleId");
                }
                else{
                    roles.add(roleList.get(0));
                }
            }

            user.setRoles(roles);
        }

        this.saveEntity(user);
    }

    public void updateUser(JSONObject params, User alteredUser) throws Exception{
        T user = toObject(params);

        JSONArray roleIds = params.getJSONArray("roleIds");
        if(roleIds != null)
        {
            List<Role> roles = new ArrayList<Role>();


            for(int i = 0; i < roleIds.size(); i++)
            {
                String roleId = roleIds.getString(i);
                String hql = "FROM ROLE role WHERE role.id == :roleId";
                HashMap<String, Object> paramsMap = new HashMap<String, Object>();
                paramsMap.put("roleId",roleId);

                List<Role> roleList = roleRepository.executeHql(hql,paramsMap);

                if(roleList.size() == 0){
                    throw new Exception("No such roleId");
                }
                else{
                    roles.add(roleList.get(0));
                }
            }

            user.setRoles(roles);
        }

        this.updateEntity(user,alteredUser);

    }

    public void deleteUser(JSONObject params)
    {
        String userId = params.getString("id");
        userRepository.deleteById(userId);
    }

    public T toObject(JSONObject params){return null;}
}
