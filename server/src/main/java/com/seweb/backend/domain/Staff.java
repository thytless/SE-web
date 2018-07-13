package com.seweb.backend.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tbl_sys_staff")
public class Staff extends User implements Serializable {

    private static final long serialVersionUID = 5721703468156919856L;
}
