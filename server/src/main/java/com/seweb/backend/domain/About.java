package com.seweb.backend.domain;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "tbl_text_about")
public class About extends Text {

    @Type(type = "byte")
    private boolean enabled;
}
