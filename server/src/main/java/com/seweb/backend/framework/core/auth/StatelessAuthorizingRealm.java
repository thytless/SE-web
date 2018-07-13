package com.seweb.backend.framework.core.auth;

import com.seweb.backend.domain.Function;
import com.seweb.backend.domain.Role;
import com.seweb.backend.domain.User;
import com.seweb.backend.framework.utils.encryption.HmacSHA256Util;
import com.seweb.backend.repository.StaffRepository;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;


public class StatelessAuthorizingRealm extends AuthorizingRealm
{
	@Autowired
	private StaffRepository staffRepository;
	
	@Override
    public boolean supports(AuthenticationToken token) 
	{
		return token instanceof StatelessAuthenticationToken;
    }
   
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException 
    {	
    	StatelessAuthenticationToken statelessToken = (StatelessAuthenticationToken)token;
    	String username = (String)statelessToken.getPrincipal();

		User user = staffRepository.findByUsername(username);
		if(user == null)
		{
			return null;
		}

    	
    	String serverDigest = HmacSHA256Util.digest(user.getUsername(),user.getPassword());

    	SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(username, serverDigest, getName());
    	return authenticationInfo;
    }


    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) 
    {
    	String username = (String) principals.getPrimaryPrincipal();
    	SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();

		User user = staffRepository.findByUsername(username);
		if(user == null)
		{
			return null;
		}
    	

    	for(Role role : user.getRoles()){
    		String roleString = role.getRoleName();
    		authorizationInfo.addRole(roleString);
    	}

    	for(Function function : user.getFunctions()){

    		String functionString = function.getFunctionString();
    		authorizationInfo.addStringPermission(functionString);
    	}

    	return authorizationInfo;
    }

}
