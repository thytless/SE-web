package com.seweb.backend.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Role;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.domain.User;
import com.seweb.backend.framework.utils.encryption.MD5Util;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.mapper.StaffRoleMapper;
import com.seweb.backend.repository.RoleRepository;
import com.seweb.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Service
public class StaffService extends UserService<Staff> {

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private StaffRoleMapper staffRoleMapper;


    public Staff toObject(JSONObject params) {
        return JSONObject.toJavaObject(params, Staff.class);
    }

    public void addStaff(JSONObject params) throws Exception{
        Staff staff = toObject(params);

        staff.setPassword(MD5Util.encrypt(params.getString("password")));

        String staffId = UUID.randomUUID().toString();

        staff.setId(staffId);

        updateStaffRoles(params,staffId);

        this.saveEntity(staff);
    }

    public void updateStaff(JSONObject params, User alteredUser) throws Exception{
        Staff staff = toObject(params);
        this.updateEntity(staff,alteredUser);

    }

    public void deleteStaff(JSONObject params) throws Exception
    {
        String userId = params.getString("username");
        if("admin".equals(userId)){
            throw new Exception("Admin cannot be deleted.");
        }
        staffRepository.deleteById(userId);
    }

    public JSONArray queryAllStaff(){
        return JsonUtil.toJSONArray(staffRepository.findAll());
    }

    public JSONObject queryStaffRoles(JSONObject params){
        JSONObject staffRoleJson = new JSONObject();
        staffRoleJson.put("roleString", getStaffRoleStringByStaffId(params.getString("id")));
        return staffRoleJson;
    }

    public void updateStaffRoles(JSONObject params, String staffId) throws Exception{

        String roleString = params.getString("roleString");
        if(roleString != null)
        {
            for(int i = 1; i < roleString.length(); i++)
            {
                if(roleString.charAt(i) == '1'){
                    String hql = "FROM Role role WHERE role.code = :roleCode";
                    HashMap<String, Object> paramsMap = new HashMap<String, Object>();
                    paramsMap.put("roleCode",i+"");

                    List<Role> roleList = roleRepository.executeHql(hql,paramsMap);

                    if(roleList.size() == 0){
                        throw new Exception("Nonexistent roleCode "+i);
                    }
                    else{
                        String roleId = roleList.get(0).getId();
                        List<String> staffRoleList = staffRoleMapper.getStaffRole(staffId);
                        //if(staffRoleList != null && !staffRoleList.contains(roleId))
                        if(!staffRoleList.contains(roleId))
                            staffRoleMapper.addStaffRole(staffId,roleId);
                    }
                }
            }
        }
    }

    public void updateStaffRoles(JSONObject params) throws Exception{
        String staffId = params.getString("id");
        updateStaffRoles(params,staffId);
    }

    public String getStaffRoleStringByStaffId(String staffId){
        int roleCount = roleRepository.findAll().size();
        byte[] roleString = new byte[roleCount];
        List<String> staffRoleList = staffRoleMapper.getStaffRole(staffId);
        for(int i = 0;i < roleCount;i++)
            roleString[i] = 0;
        if(staffRoleList != null){
            for(String roleId : staffRoleList){
                String hql = "FROM Role role WHERE role.id = :roleId";
                HashMap<String, Object> paramsMap = new HashMap<String, Object>();
                paramsMap.put("roleId",roleId);

                String roleCode = roleRepository.executeHql(hql,paramsMap).get(0).getCode();
                roleString[Integer.valueOf(roleCode)] = 1;
            }
        }
        return new String(roleString);
    }
}
