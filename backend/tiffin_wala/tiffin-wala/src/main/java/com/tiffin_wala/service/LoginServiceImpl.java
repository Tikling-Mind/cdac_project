package com.tiffin_wala.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.ChangePasswordDto;
import com.tiffin_wala.dto.UserDto;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.entities.Login;
import com.tiffin_wala.entities.OTP;
import com.tiffin_wala.entities.Vendor;
import com.tiffin_wala.enums.UserRole;
import com.tiffin_wala.repository.CustomerRepository;
import com.tiffin_wala.repository.LoginRepository;
import com.tiffin_wala.repository.OtpRepository;
import com.tiffin_wala.repository.VendorRepository;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private LoginRepository loginRepo;

	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private CustomerRepository customerRepo;

	@Autowired
	private VendorRepository vendorRepo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private AuthenticationManager manager;
	
	@Autowired
	private OtpRepository otpRepository;
	
	@Autowired
	private JavaMailSender sender;

	@Override
	public Login findByEmail(String email) {
		return loginRepo.findByEmail(email).orElseThrow();
	}

	@Override
	public Login addLogin(UserDto user) {
		// Extracting Role from request dto object
		UserRole role = user.getUserRole();

		// Creating an login object will be saved in database in login table if user
		// data is added
		Login login = new Login(user.getEmail(), encoder.encode(user.getPassword()), role);

		// Customer entity = null;

		// Creating user object as per the type of role
		if (role == UserRole.ROLE_CUSTOMER) {
			// customer role
			Customer customer = new Customer(user.getFirstName(), user.getLastName(), user.getEmail(),
					user.getMobile(), LocalDate.now(), false);

			// saving in customers table
			// entity = customerRepo.save(customer);
			customerRepo.save(customer);
		}
		// vendor role
		else {
			Vendor vendor = new Vendor(false, true, false, user.getFirstName(), user.getLastName(), user.getEmail(),
					user.getMobile(), LocalDate.now() );
			// saving in vendors table
			// entity = vendorRepo.save(vendor);
			vendorRepo.save(vendor);
		}
		//	entity.setProfileImage("images\\2023-03-05blankProfile.jpg");
		// adding entry to login table
		loginRepo.save(login);
		return login;
	}

	@Override
	public String changePassword(ChangePasswordDto changePasswordDto) {
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
				changePasswordDto.getEmail(), changePasswordDto.getOldPassword());
		// authenticate the credentials
		manager.authenticate(authToken);

		Login login = loginRepo.findByEmail(changePasswordDto.getEmail()).orElseThrow();
		login.setPassword(encoder.encode(changePasswordDto.getNewPassword()));

		return "Password Updated Successfully";
	}

	@Override
	public String validateEmail(String email) {
		Optional<Login> login = loginRepo.findByEmail(email);
		System.out.println(login);
		if(login.isPresent()) {
			throw new RuntimeException("Email Already Registered");
		}	
		return sendOTP(email);
	}
	
	@Override
	public String sendOTP(String email) {
		Random ramdom = new Random();
		// To get random number between 0 (inclusive) to 999999
		Integer otp = ramdom.nextInt(999999);

		OTP otpObj = new OTP(email, otp);
		otpRepository.save(otpObj);
		
		SimpleMailMessage mesg = new SimpleMailMessage();
		mesg.setTo(email);
		mesg.setSubject("OTP for verification (Valid for 10 min");
		mesg.setText("Enter this OTP for verification : " + otp + "\nDo not share it with anyone !!!!!");
		sender.send(mesg);
		return "Otp sent to Your Email";
	}

	@Override
	public String forgotPassword(String email) {
		//Checking if email exist in database
		Login login=loginRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Email id not Found"));
		return sendOTP(login.getEmail());
	}

	@Override
	public String changeForgottenPassword(ChangePasswordDto changePasswordDto) {
		if(validateOTP(changePasswordDto.getEmail(),changePasswordDto.getOTP())) {
		Login login = loginRepo.findByEmail(changePasswordDto.getEmail()).orElseThrow();
		login.setPassword(encoder.encode(changePasswordDto.getNewPassword()));
		return "Password Updated Successfully";
		}
		return "Password Update Failed,Please Try again";	
	}

	@Override
	public boolean validateOTP(String email, int otp) {
		System.out.println(email + " " + otp);
		LocalDateTime now = LocalDateTime.now();
		OTP persistOTP = otpRepository.findByEmailAndOtp(email, otp);
		if (!now.isBefore(persistOTP.getDateCreated().plusMinutes(10)))
			throw new RuntimeException("OTP expired, genrate new OTP");
		otpRepository.delete(persistOTP);
		return true;

	}

}
