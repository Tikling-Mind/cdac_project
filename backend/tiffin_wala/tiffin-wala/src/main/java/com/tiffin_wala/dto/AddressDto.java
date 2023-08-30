package com.tiffin_wala.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

import com.tiffin_wala.enums.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {

	private Long id ;
	
	private UserRole role ;
	
	@NotBlank
	@Length(max=256 ,message="Address should  be less than 256 charachter")
	private String line1;

	@NotBlank
	@Length(max=256 ,message="Address should be less than 256 charachter")
	private String line2;
	
	@NotBlank
	private String city;
	
	@NotBlank
	@Length(min=6, max=6 ,message = "Pincode should have only 6 characters")
	private String pincode;
	
	@NotBlank
	private String state;
}
