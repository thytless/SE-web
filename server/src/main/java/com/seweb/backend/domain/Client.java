package com.seweb.backend.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tbl_sys_client")
public class Client extends User implements Serializable {

    private static final long serialVersionUID = -4439189684704713043L;

    private String truename;

    private String identification;

    private String corporation;

    public String getTruename() {
        return truename;
    }

    public void setTruename(String truename) {
        this.truename = truename;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getCorporation() {
        return corporation;
    }

    public void setCorporation(String corporation) {
        this.corporation = corporation;
    }
}
