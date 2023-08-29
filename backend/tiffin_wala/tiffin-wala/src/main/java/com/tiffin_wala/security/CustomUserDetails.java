package com.tiffin_wala.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.tiffin_wala.entities.Login;

public class CustomUserDetails implements UserDetails{

	private Login userLogin ;
	
	public CustomUserDetails(Login userLogin) {
		this.userLogin = userLogin ;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(userLogin.getUserRole().toString()));
	}

	@Override
	public String getPassword() {
		return userLogin.getPassword();
	}

	@Override
	public String getUsername() {
		return userLogin.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
