package com.seweb.backend.mapper;

import org.apache.ibatis.annotations.*;


import java.util.List;

@Mapper
public interface StaffRoleMapper {

    @Select("SELECT role_id FROM tbl_sys_staff_role "
                +"WHERE staff_id = #{userId}")
    List<String> getStaffRole(@Param("userId")String userId);

    @Insert("INSERT INTO tbl_sys_staff_role (staff_id, role_id) "
                +"VALUES (#{userId}, #{roleId})")
    void addStaffRole(@Param("userId")String userId,@Param("roleId")String roleId);

    @Delete("DELETE FROM tbl_sys_staff_role WHERE staff_id = #{userId}")
    void deleteAllStaffRole(@Param("userId")String userId);

    @Delete("DELETE FROM tbl_sys_staff_role WHERE staff_id = #{userId} AND role_id = #{roleId}")
    void deleteStaffRole(@Param("userId")String userId, @Param("roleId")String roleId);
}
