package com.seweb.backend.repository;

import com.seweb.backend.domain.BaseEntity;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface TextRepository<T extends BaseEntity> extends BaseRepository<T> {

    List<T> findByStatus(String status);

    List<T> findByCreatedUserId(String createdUserId);
}
