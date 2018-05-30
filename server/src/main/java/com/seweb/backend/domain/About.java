package com.seweb.backend.domain;

import javax.persistence.*;

@Entity
@Table(name = "tbl_text_about")
public class About extends Text {

    private boolean enabled;
}
