package com.seweb.backend.framework.helpers.hierachy;

import java.util.List;

import com.seweb.backend.repository.BaseRepository;
import org.springframework.data.repository.NoRepositoryBean;


@NoRepositoryBean
public interface HierarchyRepository<T extends Hierarchy<T>> extends BaseRepository<T>
{
	List<T> findByParentId(String parentId);
}
