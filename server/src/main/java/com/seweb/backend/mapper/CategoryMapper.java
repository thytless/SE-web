package com.seweb.backend.mapper;

import com.seweb.backend.domain.Case;
import com.seweb.backend.domain.Solution;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CategoryMapper {

    @Select("select name from tbl_category;")
    List<String> getCategory();

    @Update("update tbl_category set name = #{name} where id = #{id}")
    void editCategory(@Param("id")String id,
                        @Param("name")String name);

    @Select("select * from tbl_text_case where status = 'authorized' and category = #{category}")
    List<Case> getCaseByCategory(@Param("category")String category);


    @Select("select * from tbl_text_solution where status = 'authorized' and category = #{category}")
    List<Solution> getSolutionByCategory(@Param("category")String category);

}
