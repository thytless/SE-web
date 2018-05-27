package com.seweb.backend.repository;

import com.seweb.backend.domain.BaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Component;

@Component(value = "baseRepository")
@NoRepositoryBean
public interface BaseRepository <T extends BaseEntity>extends JpaRepository <T, String> {

}
