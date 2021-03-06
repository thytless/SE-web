package com.seweb.backend.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Role;
import com.seweb.backend.domain.Staff;
import com.seweb.backend.framework.utils.encryption.MD5Util;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.framework.utils.string.StringUtil;
import com.seweb.backend.mapper.StaffRoleMapper;
import com.seweb.backend.repository.StaffRepository;
import jdk.nashorn.internal.runtime.options.Option;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Service
public class StaffService extends UserService<Staff> {

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private StaffRoleMapper staffRoleMapper;

    public void addStaff(JSONObject params) throws Exception{
        Staff staff = JSONObject.toJavaObject(params, Staff.class);

        staff.setPassword(MD5Util.encrypt(params.getString("password")));

        String staffId = UUID.randomUUID().toString();

        staff.setId(staffId);

        staff.setStatus(ST_UNAUTH);

        updateStaffRoles(params,staffId);

        this.saveEntity(staff);
    }

    public void updateStaff(JSONObject params, String alteredUserId) throws Exception{
        JSONObject staffJson = JSON.parseObject(JSON.toJSONString(staffRepository.findById(params.getString("id"))));
        Staff staff = JSONObject.toJavaObject(staffJson,Staff.class);

        String username = params.getString("username");
        String email = params.getString("email");
        String phoneNumber = params.getString("phoneNumber");

        if(username != null)staff.setUsername(username);
        if(email != null)staff.setEmail(email);
        if(phoneNumber != null)staff.setPhoneNumber(phoneNumber);
        this.updateEntity(staff,alteredUserId);
    }

    public void deleteStaff(JSONObject params) throws Exception {
        String staffId = params.getString("id");
        if(getStaffRoleStringByStaffId(staffId).charAt(0) == '1'){
            throw new Exception("Admin cannot be deleted.");
        }
        staffRepository.deleteById(staffId);
        staffRoleMapper.deleteAllStaffRole(staffId);
    }



    public JSONArray queryAllStaff(){
        return queryStaffByStatus(ST_AUTH);
    }

    public JSONObject queryStaffById(JSONObject params) {
        return JSON.parseObject(JSON.toJSONString(staffRepository.findById(params.getString("id"))));
    }

    public JSONArray queryStaffByStatus(String status){
        List<Staff> staffList= staffRepository.findByStatus(status);
        for(Staff staff : staffList){
            staff.setRoleString(getStaffRoleStringByStaffId(staff.getId()));
        }
        return JsonUtil.toJSONArray(staffList);
    }



    public void updateStaffRoles(JSONObject params, String staffId) throws Exception{

        String roleString = params.getString("roleString");
        List<String> staffRoleList = staffRoleMapper.getStaffRole(staffId);
        if(roleString != null)
        {
            for(int i = 1; i < roleString.length(); i++)
            {
                String hql = "FROM Role role WHERE role.code = :roleCode";
                HashMap<String, Object> paramsMap = new HashMap<String, Object>();
                paramsMap.put("roleCode",i+"");

                List<Role> roleList = roleRepository.executeHql(hql,paramsMap);

                if(roleList.size() == 0){
                    throw new Exception("Nonexistent roleCode "+i);
                }
                else{
                    String roleId = roleList.get(0).getId();
                    switch (roleString.charAt(i)) {
                        case '1':
                            if (!StringUtil.hasString(staffRoleList, roleId))
                                staffRoleMapper.addStaffRole(staffId, roleId);
                            break;
                        case '0':
                            if (StringUtil.hasString(staffRoleList, roleId))
                                staffRoleMapper.deleteStaffRole(staffId, roleId);
                            break;
                        default:
                            throw new Exception("Invalid Bit");
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
        char[] roleString = new char[roleCount];
        List<String> staffRoleList = staffRoleMapper.getStaffRole(staffId);
        for(int i = 0;i < roleCount;i++)
            roleString[i] = '0';
        if(staffRoleList != null){
            for(String roleId : staffRoleList){
                String hql = "FROM Role role WHERE role.id = :roleId";
                HashMap<String, Object> paramsMap = new HashMap<String, Object>();
                paramsMap.put("roleId",roleId);

                String roleCode = roleRepository.executeHql(hql,paramsMap).get(0).getCode();
                roleString[Integer.valueOf(roleCode)] = '1';
            }
        }
        return new String(roleString);
    }

    public void authorize(JSONObject params) {
        Staff staff = staffRepository.findById(params.getString("id")).get();
        staff.setStatus(ST_AUTH);
        this.updateEntity(staff);
    }


    public void resetPassword(JSONObject params) throws Exception {
        Staff staff = staffRepository.findByUsername(params.getString("username"));
        if(staff == null) {
            throw new Exception("Username not exist");
        }
        String phoneNumber = params.getString("phoneNumber");
        String email = params.getString("email");
        String truename = params.getString("truename");
        String identification = params.getString("identification");
        if(phoneNumber == null || !phoneNumber.equals(staff.getPhoneNumber()))
            throw new Exception("Wrong phone number");
        if(email == null || !email.equals(staff.getEmail()))
            throw new Exception("Wrong email");
        if(truename == null || !truename.equals(staff.getTruename()))
            throw new Exception("Wrong truename");
        if(identification == null || !identification.equals(staff.getIdentification()))
            throw new Exception("Wrong identification");
        String newPassword = MD5Util.encrypt(params.getString("password"));
        staff.setPassword(newPassword);
    }

}
