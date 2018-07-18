package com.seweb.backend.repository;

import com.seweb.backend.domain.News;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends TextRepository<News> {


}
