package com.tiffin_wala.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.entities.OTP;

public interface OtpRepository extends JpaRepository<OTP, Integer> {

	OTP findByEmailAndOtp(String email, int otp);
}
