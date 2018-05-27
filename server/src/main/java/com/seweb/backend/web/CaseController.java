package com.seweb.backend.web;

import com.seweb.backend.service.CaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CaseController extends BaseController {

    @Autowired
    private CaseService caseService;


}
