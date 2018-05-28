package com.seweb.backend.service;

import com.seweb.backend.domain.BaseEntity;
import com.seweb.backend.repository.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Transactional(propagation = Propagation.REQUIRED, rollbackFor={Exception.class, RuntimeException.class})
public class BaseService<T extends BaseEntity>
{
    public BaseRepository<T> baseRepository;

    @Autowired
    public void setBaseRepository(BaseRepository<T> baseRepository) {
        this.baseRepository = baseRepository;
    }
}
