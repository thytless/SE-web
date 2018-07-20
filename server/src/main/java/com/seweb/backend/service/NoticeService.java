package com.seweb.backend.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.seweb.backend.domain.Notice;
import com.seweb.backend.framework.utils.json.JsonUtil;
import com.seweb.backend.mapper.NoticeMapper;
import com.seweb.backend.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeService extends TextService<Notice>{

    @Autowired
    private NoticeRepository noticeRepository;

    @Autowired
    private NoticeMapper noticeMapper;

    public void deleteNotice(JSONObject params) {
        noticeRepository.deleteById(params.getString("id"));
    }

    public JSONArray queryNoticeByTargetUserId(String userId) {
        return JsonUtil.toJSONArray(noticeRepository.findByTargetUserId(userId));
    }
}
