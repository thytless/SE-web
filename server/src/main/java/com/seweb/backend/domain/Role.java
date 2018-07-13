package com.seweb.backend.domain;

import javax.persistence.*;

@Entity
@Table(name = "TBL_SYS_ROLE")
public class Role extends BaseEntity
{
	private static final long serialVersionUID = 2857988380369247437L;

	@Column(name = "ROLE_NAME")
	private String roleName;
	
	@Column(name = "ROLE_STRING")
	private String roleString;
	
	@Column(name = "DESCRIPTION")
	private String description;

	
	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRoleString() {
		return roleString;
	}

	public void setRoleString(String roleString) {
		this.roleString = roleString;
	}
}
