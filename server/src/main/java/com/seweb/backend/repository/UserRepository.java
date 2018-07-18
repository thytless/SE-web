package com.seweb.backend.repository;

import com.seweb.backend.domain.User;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface UserRepository<T extends User> extends BaseRepository<T> {

    T findByUsername(String username);

    List<T> findByStatus(String status);
}
