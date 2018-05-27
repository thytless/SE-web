package com.seweb.backend.domain;

import javax.persistence.*;

@Entity
@Table(name = "tbl_case")
public class Case extends Text {


    private String type;


}
