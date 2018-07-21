package com.seweb.backend.repository;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map.Entry;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import com.seweb.backend.domain.BaseEntity;

public class BaseRepositoryImpl<T extends BaseEntity> extends SimpleJpaRepository<T, String> implements BaseRepository<T>
{
	private final Class<T> domainClass;

	private final EntityManager entityManager;

	public BaseRepositoryImpl(Class<T> domainClass, EntityManager entityManager)
	{
		super(domainClass, entityManager);
		this.domainClass = domainClass;
		this.entityManager = entityManager;
	}

	@Override
	public boolean support(String modelType) 
	{
		return domainClass.getName().equals(modelType);
	}
	
	public EntityManager getEntityManager()
	{
		return this.entityManager;
	}

	@SuppressWarnings("unchecked")
	@Override
	public <U> List<U> executeSql(String sql, HashMap<String, Object> paramsMap)
	{
		Query query = this.entityManager.createNativeQuery(sql);
		setParams(query, paramsMap);

		return query.getResultList();
	}

	@Override
	public int executeSql(String sql)
	{
		Query query = this.entityManager.createNativeQuery(sql);
		return query.executeUpdate();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<T> executeHql(String hql, HashMap<String, Object> paramsMap)
	{
		Query query = this.entityManager.createQuery(hql);
		setParams(query, paramsMap);
		
		return query.getResultList();
	}

	
	@SuppressWarnings("unchecked")
	@Override
	public <U> List<U> executeHqlIndicatingType(String hql, HashMap<String, Object> paramsMap)
	{
		Query query = this.entityManager.createQuery(hql);
		
		if(paramsMap != null)
		{
			Iterator <Entry <String, Object>> iter = paramsMap.entrySet().iterator();
			while(iter.hasNext())
			{
				Entry <String, Object> entry = iter.next();
				
				String paramName = entry.getKey();
				Object paramValue = entry.getValue();
				
				query.setParameter(paramName, paramValue);
			}
		}
		
		return query.getResultList();
	}
	
	private void setParams(Query query, HashMap<String, Object> paramsMap)
	{
		if(paramsMap != null)
		{
			Iterator<Entry <String, Object>> iter = paramsMap.entrySet().iterator();
			while(iter.hasNext())
			{
				Entry <String, Object> entry = iter.next();
				
				String paramName = entry.getKey();
				Object paramValue = entry.getValue();
				
				query.setParameter(paramName, paramValue);
			}
		}
	}

	
	private String genCountSql(String sql)
	{
		String regex = "\\s*SELECT\\s+[^\\s]+";
		
		if(sql.matches(regex))
		{	
			String countSql = sql.replaceFirst(regex, "SELECT COUNT(1)");
			return countSql;
		}
		else
		{
			String countSql = "SELECT COUNT(1) " + sql;
			return countSql;
		}
	}
}
