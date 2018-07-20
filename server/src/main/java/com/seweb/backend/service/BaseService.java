package com.seweb.backend.service;

import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.BaseEntity;
import com.seweb.backend.framework.utils.date.DateUtil;
import com.seweb.backend.framework.utils.string.StringUtil;
import com.seweb.backend.repository.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.UUID;


@Transactional(propagation = Propagation.REQUIRED, rollbackFor={Exception.class, RuntimeException.class})
public class BaseService<T extends BaseEntity>
{
    public BaseRepository<T> baseRepository;

    static final String ST_AUTH = "authorized";
    static final String ST_UNAUTH = "unauthorized";
    static final String ST_DEPRE = "deprecated";

    @Autowired
    public void setBaseRepository(BaseRepository<T> baseRepository) {
        this.baseRepository = baseRepository;
    }

    public T saveEntity(T entity) {
        String id = entity.getId();
        if(StringUtil.isEmpty(id))
        {
            id = UUID.randomUUID().toString();
            entity.setId(id);
        }



        entity.setCreatedTime(DateUtil.formatDateTime(new Date()));

        baseRepository.save(entity);
        return entity;
    }

    public T saveEntity(T entity, String createdUserId) {
        String id = entity.getId();
        if(StringUtil.isEmpty(id))
        {
            id = UUID.randomUUID().toString();
            entity.setId(id);
        }

        if(createdUserId != null)
        {
            entity.setCreatedUserId(createdUserId);
        }

        entity.setCreatedTime(DateUtil.formatDateTime(new Date()));

        baseRepository.save(entity);
        return entity;
    }

    public void deleteEntity(String id) {
        baseRepository.deleteById(id);
    }

    public T updateEntity(T entity) {

        entity.setAlteredTime(DateUtil.formatDateTime(new Date()));

        baseRepository.save(entity);
        return entity;
    }

    public T updateEntity(T entity, String alteredUserId) {
        if(alteredUserId != null)
        {
            entity.setAlteredUserId(alteredUserId);
        }

        entity.setAlteredTime(DateUtil.formatDateTime(new Date()));

        baseRepository.save(entity);
        return entity;
    }

    public void concurrenceTest(JSONObject params, BaseRepository<T> repository) throws Exception{
        String id = params.getString("id");
        String requestAlteredTime = params.getString("alteredTime");

        if(requestAlteredTime == null)return;
        String databaseAlteredTime = repository.findById(id).get().getAlteredTime();
        if(databaseAlteredTime == null)return;

        Date requestTime = DateUtil.getDateTimeFormat(requestAlteredTime);
        Date databaseTime = DateUtil.getDateTimeFormat(databaseAlteredTime);

        if(requestTime.before(databaseTime)){
            throw new Exception("Changes have been made before this request! Please refresh your page.");
        }
    }
}
