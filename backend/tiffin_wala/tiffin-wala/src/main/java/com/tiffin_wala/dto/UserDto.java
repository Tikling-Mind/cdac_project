package com.tiffin_wala.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.*;
import com.tiffin_wala.enums.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	
	private long id  ;
	
	@NotBlank(message = "first name must be supplied")
	private String firstName;
	
	@NotBlank(message = "last name must be supplied")
	private String lastName;
	
	@NotBlank(message = "email must be supplied")
	@Email(message = "Invalid email format")
	private String email;
	
	private String mobile;
	
	@NotBlank(message = "password must be supplied")
	private String password;


	private UserRole userRole;	
	
}
