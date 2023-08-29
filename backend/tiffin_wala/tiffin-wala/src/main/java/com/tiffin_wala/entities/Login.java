package com.tiffin_wala.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.tiffin_wala.enums.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="login")
@Getter
@Setter
@NoArgsConstructor
@ToString

public class Login extends BaseEntity{
	
	@Column(length=34, unique = true)
	private String email ;
	
	@Column(length = 350)
	private String password ;
	
	@Enumerated(EnumType.STRING)
	private UserRole userRole ;
	
	public Login (String email, String passwd, UserRole userRole) {
		this.email = email ;
		this.password = passwd ;
		this.userRole = userRole ;
		}
}
