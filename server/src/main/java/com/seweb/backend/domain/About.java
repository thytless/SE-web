package com.seweb.backend.domain;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tbl_text_about")
public class About extends Text implements Serializable {

    private static final long serialVersionUID = 3370323311234791174L;

    private byte enabled;

    public byte getEnabled() {
        return enabled;
    }

    public void setEnabled(byte enabled) {
        this.enabled = enabled;
    }
}
