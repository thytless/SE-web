package com.seweb.backend.domain;

import javax.persistence.*;

@Table(name = "tbl_notice")
@Entity
public class Notice extends Text{

    @Column(name = "target_user_id")
    private String targetUserId;

    public String getTargetUserId() {
        return targetUserId;
    }

    public void setTargetUserId(String targetUserId) {
        this.targetUserId = targetUserId;
    }
}
