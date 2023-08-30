package com.tiffin_wala.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tiffin_wala.entities.Login;
import com.tiffin_wala.repository.LoginRepository;

@Service
@Transactional
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
