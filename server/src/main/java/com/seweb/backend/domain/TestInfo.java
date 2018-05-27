package com.seweb.backend.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_testinfo")
public class TestInfo extends Text{
    private String type;

    public TestInfo() {
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
