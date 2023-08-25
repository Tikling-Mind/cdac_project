package com.tiffin_wala.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TiffinDto {
	
	private long id;
	
	@NotBlank(message = "Firstname can't be blank")
	@Length(min=2 , message = "Firstname should have atleast 5 character")
	private String name;
	
	@NotBlank
	@Length(min=2 , message = "Foodtype should have atleast 5 charachter")
	@Column(columnDefinition = "String default Veg")
	private String foodType;
	
	@NotBlank
	private double price;
	
	@NotBlank
	@Length(min=5 , message = "Description should have atleast 5 charachter")
	private String description;
	
	@NotBlank
	private boolean avaliablefrom;
	
	@NotBlank
	private boolean avaliableTo;
	
	@NotBlank
	@Column(columnDefinition = "integer default 0")
	private int breakLunchDinner;

}
