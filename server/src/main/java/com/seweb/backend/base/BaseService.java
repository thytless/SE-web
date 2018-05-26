package com.seweb.backend.base;

import com.seweb.backend.base.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Transactional(propagation = Propagation.REQUIRED, rollbackFor={Exception.class, RuntimeException.class})
public class BaseService<T extends BaseEntity> {
    public BaseRepository<T> baseRepository;

    @Autowired
    public void setBaseRepository(BaseRepository<T> baseRepository) {
        this.baseRepository = baseRepository;
    }

}
