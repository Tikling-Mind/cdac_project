package com.tiffin_wala.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.tiffin_wala.entities.Login;
import com.tiffin_wala.repository.LoginRepository;

public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private LoginRepository loginRepo ;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Login userLogin = loginRepo.findByEmail(email)
				.orElseThrow() ;
		return new CustomUserDetails(userLogin);
	}

}
