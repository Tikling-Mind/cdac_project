package com.tiffin_wala.dto;

import java.time.LocalDateTime;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendorDto {

	@NotEmpty
	@Size(min=5 , message = "Firstname should have atleast 5 charachter")
	private String firstname;
	
	@NotEmpty
	@Size(min=5 , message = "Lastname should have atleast 5 charachter")
	private String lastName;
	
	@NotEmpty
	@Size(min=10 , message = "mobile should have atleast 10 digit")
	private String mobile;
	
	@Email
	private String email;
	
	@NotEmpty
	private LocalDateTime registerDate;
	
	private boolean isVerified;
	
	private boolean isAvailable;
	
	private boolean isBlocked;
	
}
