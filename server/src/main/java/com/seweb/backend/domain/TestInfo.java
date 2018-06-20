package com.seweb.backend.domain;

import javax.persistence.*;

@Entity
@Table(name = "tbl_text_testinfo")
public class TestInfo extends Text{
    private String type;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
