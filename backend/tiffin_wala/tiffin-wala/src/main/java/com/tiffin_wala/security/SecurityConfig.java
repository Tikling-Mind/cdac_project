package com.tiffin_wala.security;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.tiffin_wala.security.filter.JwtRequestFilter;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
	@Autowired
	private JwtRequestFilter filter ;
	
	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity httpSecurity) throws Exception{
		httpSecurity.cors() // Add cors filter
			.and()
			.csrf().disable() // Disable CSRF to continue with REST APIs
			.exceptionHandling() // Allow configuring Exception Handling
			
			.authenticationEntryPoint((request, response, ex) ->{
				response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage()) ;
			})
			
			.and()
			
			.authorizeHttpRequests()
				.antMatchers(HttpMethod.DELETE,"/vendor","/customer").hasRole("ROLE_ADMIN")
				.antMatchers("/vendor/approve","/vendor/unapproved","/vendor/status/block","/vendor/customer").hasRole("ROLE_ADMIN")
				.antMatchers("").hasRole("ROLE_VENDOR")
				.antMatchers("").hasRole("ROLE_CUSTOMER")
				.antMatchers("/home", "/orders/**","/auth/**", "/swagger*/**", "/v*/api-docs/**","/subscription/**","/customerplan/**").permitAll()
				.antMatchers(HttpMethod.OPTIONS).permitAll().anyRequest().authenticated()
			.and().sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class) ;
		return httpSecurity.build() ;
	}
	

	@Bean 
	public PasswordEncoder getPasswordEncoder(){
		return new BCryptPasswordEncoder() ;
	}
	
	// expose spring supplied auth mgr as a spring bean , so that auth controller
	// can use it for authentication .
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
}
