package com.seweb.backend.repository;

import com.seweb.backend.domain.Text;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Component;

@Component(value = "textRepository")
@NoRepositoryBean
public interface TextRepository extends BaseRepository<Text>{

}
