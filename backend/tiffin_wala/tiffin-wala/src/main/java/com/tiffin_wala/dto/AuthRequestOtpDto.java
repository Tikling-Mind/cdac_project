package com.tiffin_wala.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequestOtpDto {

	@NotBlank(message = "Email can't be blank or null")
	private String email;

	@NotBlank(message = "OTP can't be blank or null")
	private int OTP;
}
