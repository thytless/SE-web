package com.seweb.backend.repository;

import com.seweb.backend.domain.Menu;
import com.seweb.backend.framework.helpers.hierachy.HierarchyRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends HierarchyRepository<Menu>
{

}
