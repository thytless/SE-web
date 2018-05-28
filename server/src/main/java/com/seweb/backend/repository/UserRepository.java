package com.seweb.backend.repository;

import com.seweb.backend.domain.User;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface UserRepository extends BaseRepository<User> {

    User findByUsername(String username);
}
