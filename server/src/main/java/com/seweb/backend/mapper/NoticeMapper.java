package com.seweb.backend.mapper;

import com.seweb.backend.domain.Notice;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface NoticeMapper {

    @Insert("insert into tbl_notice (id,target_user_id,name,content,created_time) " +
            "values (#{id},#{targetUserId},#{name},#{content},#{time});")
    void addNotice(@Param("id")String id,
                          @Param("targetUserId") String targetUserId,
                          @Param("name") String name,
                          @Param("content") String content,
                          @Param("time") String time);
}
