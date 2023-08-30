package com.tiffin_wala.service;

import com.tiffin_wala.dto.ChangePasswordDto;
import com.tiffin_wala.dto.UserDto;
import com.tiffin_wala.entities.Login;

public interface LoginService {

	Login findByEmail(String email);

	UserDto addLogin(UserDto user);

	/*
	 * String changePassword(ChangePasswordDto changePasswordDto);
	 * 
	 * String validateEmail(String email);
	 * 
	 * String forgotPassword(String email);
	 * 
	 * String changeForgottenPassword(ChangePasswordDto changePasswordDto);
	 * 
	 * String sendOTP(String email);
	 * 
	 * boolean validateOTP(String email, int otp);
	 */

}
