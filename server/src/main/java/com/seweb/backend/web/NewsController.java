package com.seweb.backend.web;

import com.seweb.backend.domain.Text;
import com.seweb.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NewsController extends TextController{

    @Autowired
    private NewsRepository newsRepository;

    @RequestMapping(value = "/news")
    public List<Text> newsList() {
        return newsRepository.findAll();
    }

}
