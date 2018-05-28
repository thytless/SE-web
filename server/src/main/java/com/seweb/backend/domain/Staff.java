package com.seweb.backend.domain;

import javax.persistence.*;

@Entity
@Table(name = "tbl_sys_client")
public class Staff extends User {

    private String truename;

    private String identification;
}
