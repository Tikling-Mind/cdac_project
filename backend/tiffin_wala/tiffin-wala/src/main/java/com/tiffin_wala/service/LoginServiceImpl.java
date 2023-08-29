package com.tiffin_wala.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.tiffin_wala.dto.ChangePasswordDto;
import com.tiffin_wala.dto.UserDto;
import com.tiffin_wala.entities.Login;

@Transactional
@Service
public class LoginServiceImpl implements LoginService {

	@Override
	public Login findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDto addLogin(UserDto user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object changePassword(ChangePasswordDto changePasswordDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object validateEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object forgotPassword(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object changeForgottenPassword(ChangePasswordDto changePasswordDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean validateOTP(String email, int otp) {
		// TODO Auto-generated method stub
		return false;
	}

}
