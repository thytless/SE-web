package com.seweb.backend.domain;

import javax.persistence.*;

@MappedSuperclass
public class Text extends BaseEntity{

    private String content;

    private String author;

    private String parent;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }
}
