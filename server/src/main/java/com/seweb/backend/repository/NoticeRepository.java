package com.seweb.backend.repository;

import com.seweb.backend.domain.Notice;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticeRepository extends TextRepository<Notice> {
    List<Notice> findByTargetUserId(String targetUserId);
}
