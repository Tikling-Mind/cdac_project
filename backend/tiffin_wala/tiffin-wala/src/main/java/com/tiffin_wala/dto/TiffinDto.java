package com.tiffin_wala.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tiffin_wala.entities.Vendor;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TiffinDto {
	
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
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
	private LocalDate availableFrom;
	
	@NotBlank
	private LocalDate availableTo;
	
	@NotBlank
	@Column(columnDefinition = "integer default 0")
	private int breakLunchDinner;
	
	private Vendor vendor ;

}
