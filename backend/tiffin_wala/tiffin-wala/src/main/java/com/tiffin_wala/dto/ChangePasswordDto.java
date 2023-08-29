package com.tiffin_wala.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ChangePasswordDto {

	private Long id;
	private String email;
	private String newPassword;
	private String oldPassword;
	private int OTP;
}
