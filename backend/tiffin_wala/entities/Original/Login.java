package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.app.enums.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "logins")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Login extends BaseEntity{
	
	@Column(length = 35, unique = true)
	private String email;
	
	@Column(length = 350)
	private String password;
	
	@Enumerated(EnumType.STRING)
	private UserRole userRole;

	public Login(String email, String password, UserRole userRole) {
		super();
		this.email = email;
		this.password = password;
		this.userRole = userRole;
	}
	
	
	

}
