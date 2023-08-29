package com.tiffin_wala.security.utils;

import java.security.Key;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.tiffin_wala.security.CustomUserDetails;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {
	
	@Value("${SECRET_KEY}")
	private String jwtSecretKey ;
	
	@Value("${EXP_TIMEOUT}")
	private int jwtExpirationInMs ;
	
	private SecretKey key = Keys.hmacShaKeyFor(jwtSecretKey.getBytes()) ; 

	
	public String genereateJwtToken(Authentication authenticatedDetails) {
		log.info("Generating JWT " + authenticatedDetails) ;
		
		/*
		 * The identity of the principal being authenticated. In the case of an
		 * authentication request with username and password, this would be the
		 * username. Callers are expected to populate the principal for an
		 * authentication request.
		 */
		CustomUserDetails userPrincipal = (CustomUserDetails) authenticatedDetails.getPrincipal() ;
		String jwt =  Jwts.builder() // 
					.setSubject(userPrincipal.getUsername())
					.setIssuedAt(new Date())
					.setExpiration(new Date(new Date().getTime()+jwtExpirationInMs))
					.signWith(key,SignatureAlgorithm.HS512)
					.compact() ;
		return jwt	;
	}
	// Method invoked by Custom Filter
	/**
	 * Validate Token and Get UserName from it
	 */
	
	public String getUserNameFromJwtToken(String token ) {
		 return Jwts.parserBuilder().setSigningKey(key).build()
				 .parseClaimsJws(token)
				 .getBody().getSubject() ;
	}
	
	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parserBuilder()
				.setSigningKey(key).build()
				.parseClaimsJws(authToken)  ;
			return true ;
		}catch (Exception e) {
			log.error("Invalid jwt : "+ e.getMessage() );
		}
		return false ;
	}
	
	
}
