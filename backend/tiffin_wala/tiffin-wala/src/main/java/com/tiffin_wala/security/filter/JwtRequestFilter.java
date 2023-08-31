package com.tiffin_wala.security.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.tiffin_wala.security.utils.JwtUtils;

import lombok.extern.slf4j.Slf4j;
@Component
@Slf4j
public class JwtRequestFilter extends OncePerRequestFilter {

	@Autowired
	private JwtUtils utils ;
	
	@Autowired
	private UserDetailsService userDetailsService ;
	
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		log.info("In JWT Request Filter") ;
		

		// Get Authorization Header
		String header = request.getHeader("Authorization") ;
		
		// Check that authorization header starts with Bearer
		if(header != null && header.startsWith("Bearer ")) {
			String token = header.substring(7) ;
			
			// Validate Token and Get UserName
			String userName = utils.getUserNameFromJwtToken(token) ;
			
			// Authenticate if Not done 
			if(userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				
				// Get UserDetails from Login using email
				UserDetails userDetails = userDetailsService.loadUserByUsername(userName) ;
				
				/* Create Authentication Object, wrapping UserDetails fetched from DB 
				 * Constructor : Principal, Credentials, Authorities
				 * */
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails.getUsername(), userDetails.getPassword(),userDetails.getAuthorities()) ;
				
				SecurityContextHolder.getContext().setAuthentication(authentication) ;	 
				log.info("User Authenticated");
			}else log.info("UserName null Or Authentication already set");
			
		}else {
			log.error("Request header does not contain a Bearer Token");			
		}

//		Pass the request to next filter in the chain
		filterChain.doFilter(request, response);
	}

}
