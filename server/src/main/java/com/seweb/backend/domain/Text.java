package com.seweb.backend.domain;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Text extends BaseEntity{

    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
