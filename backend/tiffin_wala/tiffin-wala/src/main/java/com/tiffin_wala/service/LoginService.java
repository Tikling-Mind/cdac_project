package com.tiffin_wala.service;

import com.tiffin_wala.dto.ChangePasswordDto;
import com.tiffin_wala.dto.UserDto;
import com.tiffin_wala.entities.Login;

public interface LoginService {

	Login findByEmail(String email);

	UserDto addLogin(UserDto user);

	Object changePassword(ChangePasswordDto changePasswordDto);

	Object validateEmail(String email);

	Object forgotPassword(String email);

	Object changeForgottenPassword(ChangePasswordDto changePasswordDto);

	boolean validateOTP(String email, int otp);

}
