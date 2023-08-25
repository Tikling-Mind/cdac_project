package com.tiffin_wala.dto;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendorDto {
	private long id;
	
	@NotBlank(message = "Firstname can't be blank")
	@Length(min=2 , message = "Firstname should have atleast 5 character")
	private String firstName;
	
	@NotBlank(message = "Lastname can't be blank")
	@Length(min=2 , message = "Lastname should have atleast 5 character")
	private String lastName;
	
	@NotBlank
	@Length(max=10 , message = "mobile should have atleast 10 digit")
	private String mobile;
	
	@NotBlank
	@Length(max=256 ,message= "address must have minimum 256 character")
	private String address;
	
	@Email
	private String email;
	
	private boolean isVerified;
	
	private boolean isAvailable;
	
	private boolean isBlocked;
	
}
