package com.tiffin_wala.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
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
	
	@NotEmpty
	@Size(min=5 , message = "Name should have atleast 5 charachter")
	private String name;
	
	@NotEmpty
	@Size(min=5 , message = "Foodtype should have atleast 5 charachter")
	private String foodType;
	
	@NotEmpty
	private double price;
	
	@NotEmpty
	@Size(min=5 , message = "Description should have atleast 5 charachter")
	private String description;
	
	private boolean isAvaliable;

}
