package com.seweb.backend.mapper;

import com.seweb.backend.domain.Staff;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AuthMapper {

    @Update("UPDATE #{table} " +
            "SET status = 'authorized' " +
            "WHERE id = #{id}")
    void authorize(@Param("id")String id, @Param("table")String table);

}
