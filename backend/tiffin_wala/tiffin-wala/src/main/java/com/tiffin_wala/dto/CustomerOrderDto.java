package com.tiffin_wala.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.tiffin_wala.entities.Address;
import com.tiffin_wala.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerOrderDto {
	
	@NotEmpty
	@Column(columnDefinition = "integer default 0")
	private int breakFastQuantity;

	@NotEmpty
	@Column(columnDefinition = "integer default 0")
	private int LunchQuantity;
	
	@NotEmpty
	@Column(columnDefinition = "integer default 0")
	private int dinnerQuantity;
	
	@NotEmpty
	private LocalDate orderStartDate ;
	
	@NotEmpty
	private LocalDate orderEndDate ;
	
	@NotEmpty
	private Address deliveryAddress ;
	
	@NotEmpty
	@Size(max=256 ,message="Delivery note should not be more than 256 charachter")
	private String DeliveryNote ;	
	

}
