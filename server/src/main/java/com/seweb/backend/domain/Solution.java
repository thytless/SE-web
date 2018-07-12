package com.seweb.backend.domain;

import javax.persistence.*;

@Entity
@Table(name = "tbl_text_solution")
public class Solution extends Text{
    private int type;

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}