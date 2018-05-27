package com.seweb.backend.repository;

import com.seweb.backend.domain.User;

public interface UserRepository extends BaseRepository<User> {

    User findByUsername(String username);
}
