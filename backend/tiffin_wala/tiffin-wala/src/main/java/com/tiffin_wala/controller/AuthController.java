package com.tiffin_wala.controller;

import javax.validation.Valid;

import org.springdoc.api.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiffin_wala.dto.AddressDto;
import com.tiffin_wala.dto.AuthRequestDto;
import com.tiffin_wala.dto.AuthRequestOtpDto;
import com.tiffin_wala.dto.AuthRespDto;
import com.tiffin_wala.dto.ChangePasswordDto;
import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.dto.UserDto;
import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.entities.Login;
import com.tiffin_wala.enums.UserRole;
import com.tiffin_wala.security.utils.JwtUtils;
import com.tiffin_wala.service.AddressService;
import com.tiffin_wala.service.CustomerService;
import com.tiffin_wala.service.LoginService;
import com.tiffin_wala.service.VendorService;

import lombok.extern.slf4j.Slf4j;


/**
 *  Controller for all authentication related requests. 
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:3000/")
@Slf4j
public class AuthController {
	
	@Autowired
	private JwtUtils utils ;
	
	@Autowired 
	private AuthenticationManager manager ;
	
	@Autowired
	private LoginService loginService ;
	
	@Autowired 
	private CustomerService customerService ;
	
	@Autowired 
	private VendorService vendorService ;
	
	@Autowired
	private AddressService addressService ;
	
	
	/**
	 * @param AuthenticationRequestDto
	 * @return ResponseEntity with JWT
	 * Authenticates the User details using AuthenticationManager. Then generates the JWT for the user. 
	 * ResponseEntity contains AuthenticationResponseDto which has UserId for appropriate type, ROLE and JWT.
	 */
	@PostMapping("/signin")
	public ResponseEntity<?> validateUser(@RequestBody @Valid AuthRequestDto request){
		
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()) ;  
		log.info("Auth token : " + authToken) ;
		
		Authentication authenticatedDetails = manager.authenticate(authToken) ;
		log.info("Authenticated details"+ authenticatedDetails) ;
		
		String jwt = utils.genereateJwtToken(authenticatedDetails) ;
		
		AuthRespDto response ;
		Login login = loginService.findByEmail(request.getEmail()) ;
		System.out.println("Got login " + login.getEmail());
		if(login.getUserRole() == UserRole.ROLE_CUSTOMER) {
			CustomerDto customer = customerService.getCustomerByEmail(request.getEmail()) ; 			
			response = new AuthRespDto(customer.getId(),customer.getEmail(),"ROLE_CUSTOMER",customer.getFirstName()+" "+ customer.getLastName(),"Authentication Successful!",jwt) ; 			
			System.out.println("User is Customer " + customer.getFirstName());

		}else if(login.getUserRole()== UserRole.ROLE_VENDOR) {
			VendorDto vendor = vendorService.getVendorByEmail(request.getEmail()) ;
			response = new AuthRespDto(vendor.getId(),vendor.getEmail(),"ROLE_VENDOR", vendor.getFirstName()+ " " +vendor.getLastName(),"Authentication Successfull",jwt) ;
			System.out.println("User is Vendor " + vendor.getFirstName());

		}else 	// User is admin
			response = new AuthRespDto(login.getId(),request.getEmail(),"ROLE_ADMIN", "Admin","Authentication Successfull",jwt) ;
		System.out.println("User is admin " );

		return new ResponseEntity<>( response, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody @Valid UserDto user){
		return new ResponseEntity<>(loginService.addLogin(user), HttpStatus.CREATED) ;
	}
	
	@PostMapping("/address")
	public ResponseEntity<?> addAddress(@RequestBody @Valid AddressDto address){
		return new ResponseEntity<>(addressService.addAddress(address), HttpStatus.CREATED) ;
	}
	
	/*
	 * // method to update password
	 * 
	 * @PostMapping("/updatepassword") public ResponseEntity<?>
	 * changePassword(@RequestBody ChangePasswordDto changePasswordDto) { return
	 * ResponseEntity.status(HttpStatus.CREATED).body(loginService.changePassword(
	 * changePasswordDto)); }
	 */

	/*
	 * // method to generateOTP
	 * 
	 * @PostMapping("/validateEmail") public ResponseEntity<?>
	 * validateEmail(@RequestBody ChangePasswordDto changePasswordDto) {
	 * System.out.println(changePasswordDto.getEmail()); return
	 * ResponseEntity.status(HttpStatus.CREATED).body(loginService.validateEmail(
	 * changePasswordDto.getEmail())); }
	 */

	/*
	 * @PostMapping("/verifyOtp") public ResponseEntity<?> verifyOtp(@RequestBody
	 * AuthRequestOtpDto requestOTP) { String str; if
	 * (loginService.validateOTP(requestOTP.getEmail(), requestOTP.getOTP())) { str
	 * = "Email Validated Successfully"; } else str = "Invalid OTP"; return
	 * ResponseEntity.status(HttpStatus.CREATED).body(str); }
	 */

	/*
	 * @PostMapping("/forgotPassword") public ResponseEntity<?>
	 * forgotPassword(@RequestBody ChangePasswordDto changePasswordDto) {
	 * System.out.println("email "+changePasswordDto); return
	 * ResponseEntity.status(HttpStatus.CREATED).body(loginService.forgotPassword(
	 * changePasswordDto.getEmail())); }
	 */
	
	/*
	 * @PostMapping("/changeForgottenPassword") public ResponseEntity<?>
	 * changeForgottenPassword(@RequestBody ChangePasswordDto changePasswordDto) {
	 * return ResponseEntity.status(HttpStatus.CREATED).body(loginService.
	 * changeForgottenPassword(changePasswordDto)); }
	 */
	
	
	
}
