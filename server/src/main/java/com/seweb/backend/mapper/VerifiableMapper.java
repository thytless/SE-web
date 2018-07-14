package com.seweb.backend.mapper;

import com.seweb.backend.domain.Staff;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface VerifiableMapper {

    @Select("SELECT * FROM tbl_sys_staff " +
            "WHERE status = #{status}")
    List<Staff> getStaffByStatus(@Param("status")String status);

    @Update("UPDATE tbl_sys_staff " +
            "SET status = 'authorized' " +
            "WHERE id = #{staffId}")
    void authorizeStaff(@Param("staffId")String staffId);

}
