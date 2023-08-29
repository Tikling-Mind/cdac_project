package com.tiffin_wala.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequestDto {
	@NotBlank(message = "Email can't be blank or null")
	private String email;
	
	@NotBlank(message = "password can't be blank or null")
	private String password;}
