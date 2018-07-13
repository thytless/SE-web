package com.seweb.backend.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@MappedSuperclass
public class User extends BaseEntity
{

	private String username;

	private String password;

	private String truename;

	private String identification;

	private String phoneNumber;

	private String email;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "TBL_SYS_ROLE_USER", joinColumns =
			{
					@JoinColumn(name = "USER_ID", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT))
			}, inverseJoinColumns =
			{
					@JoinColumn(name = "ROLE_ID", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT))
			})
	private List<Role> roles;

	@Transient
	private List<Function> functions;

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	//根据用户的角色给用户赋功能
	public List<Function> getFunctions()
	{
		List<Role> roles = this.roles;

		if(roles != null && roles.size() != 0)
		{
			List<Function> functions = new ArrayList<Function>();

			for(Role role : roles)
			{
				List<Function> subFunctions = role.getFunctions();

				functions.addAll(subFunctions);
			}

			return functions;
		}

		return this.functions;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTruename() {
		return truename;
	}

	public void setTruename(String truename) {
		this.truename = truename;
	}

	public String getIdentification() {
		return identification;
	}

	public void setIdentification(String identification) {
		this.identification = identification;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
