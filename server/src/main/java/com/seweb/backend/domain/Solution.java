package com.seweb.backend.domain;

import javax.persistence.*;

//解决方案
@Entity
@Table(name = "tbl_text_solution")
public class Solution extends Text{
    @Column(length = 102400)
    private String introduction;

    private short category;

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }


    public short getCategory() {
        return category;
    }

    public void setCategory(short category) {
        this.category = category;
    }
}