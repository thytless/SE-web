package com.seweb.backend.domain;

import javax.persistence.*;

@MappedSuperclass
public class Text extends BaseEntity{

    @Column(length = 102400)
    private String content;

    private String parent;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }
}
