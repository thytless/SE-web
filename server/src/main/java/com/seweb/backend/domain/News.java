package com.seweb.backend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_news")
public class News extends BaseEntity{
    @Column(name = "content")
    private  String content;
}
