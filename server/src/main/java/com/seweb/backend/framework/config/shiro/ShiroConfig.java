package com.seweb.backend.framework.config.shiro;

import java.util.LinkedHashMap;
import java.util.Map;

import com.seweb.backend.framework.core.auth.StatelessAccessControlFilter;
import com.seweb.backend.framework.core.auth.StatelessAuthorizingRealm;
import com.seweb.backend.framework.core.auth.StatelessDefaultSubjectFactory;
import org.apache.shiro.mgt.DefaultSessionStorageEvaluator;
import org.apache.shiro.mgt.DefaultSubjectDAO;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.session.mgt.DefaultSessionManager;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.mgt.DefaultWebSubjectFactory;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class ShiroConfig 
{ 
    @Bean
    public ShiroFilterFactoryBean shiroFilter(SecurityManager securityManager)
    {
    	ShiroFilterFactoryBean factoryBean = new ShiroFilterFactoryBean();
    	factoryBean.setSecurityManager(securityManager);
    	factoryBean.setUnauthorizedUrl("/unauthorized");

        Map<String,String> filterChainDefinitionMap = new LinkedHashMap<String, String>();
        filterChainDefinitionMap.put("/**","anon");
/*

        filterChainDefinitionMap.put("/home/**", "anon");
        filterChainDefinitionMap.put("/critical/**", "statelessAuthc, roles[role777]");
        filterChainDefinitionMap.put("/manage/news/**", "statelessAuthc, roles[role110]");
        filterChainDefinitionMap.put("/auth/news/**", "statelessAuthc, roles[role210]");
        filterChainDefinitionMap.put("/manage/content/**", "statelessAuthc, roles[role120]");
        filterChainDefinitionMap.put("/auth/content/**", "statelessAuthc, roles[role220]");
*/

        factoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);
        
        factoryBean.getFilters().put("statelessAuthc", statelessAuthcFilter());
        
    	return factoryBean;
    }
   
    @Bean
    public DefaultWebSecurityManager securityManager()
    {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        
        securityManager.setSubjectFactory(subjectFactory());
        securityManager.setSessionManager(sessionManager());
        securityManager.setRealm(statelessRealm());
        
        ((DefaultSessionStorageEvaluator)((DefaultSubjectDAO)securityManager.getSubjectDAO()).getSessionStorageEvaluator()).setSessionStorageEnabled(false);
        
        return securityManager;
    }  
    
    @Bean
    public DefaultWebSubjectFactory subjectFactory()
    {
        StatelessDefaultSubjectFactory subjectFactory = new StatelessDefaultSubjectFactory();
        return subjectFactory;
    }

    @Bean
    public DefaultSessionManager sessionManager()
    {
    	DefaultSessionManager sessionManager = new DefaultSessionManager();
    	sessionManager.setSessionValidationSchedulerEnabled(false);
    	return sessionManager;
    }
    
    @Bean
    public StatelessAuthorizingRealm statelessRealm()
    {
    	StatelessAuthorizingRealm realm = new StatelessAuthorizingRealm();
    	return realm;
    }
   
    @Bean
    public StatelessAccessControlFilter statelessAuthcFilter()
    {
    	StatelessAccessControlFilter statelessAuthcFilter = new StatelessAccessControlFilter();
    	return statelessAuthcFilter;
    }
    
    @Bean
    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(SecurityManager securityManager)
    {
    	AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor = new AuthorizationAttributeSourceAdvisor();
    	authorizationAttributeSourceAdvisor.setSecurityManager(securityManager);
    	return authorizationAttributeSourceAdvisor;
    }
   
    @Bean
    public DefaultAdvisorAutoProxyCreator getDefaultAdvisorAutoProxyCreator() 
    {
    	DefaultAdvisorAutoProxyCreator daap = new DefaultAdvisorAutoProxyCreator();
    	daap.setProxyTargetClass(true);
    	return daap;
    }
}	