package com.seweb.backend.repository;

import com.seweb.backend.domain.Picture;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends BaseRepository<Picture>{
    void deleteByName(String name);
}
