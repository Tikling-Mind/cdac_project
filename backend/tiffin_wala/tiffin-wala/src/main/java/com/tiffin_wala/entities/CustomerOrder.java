package com.tiffin_wala.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@ToString
@Entity
@Table(name="orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerOrder extends BaseEntity{

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customer_id")
	private Customer customer;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="tiffin_id")
	private Tiffin tiffin;		

	// Make zero by default
	private int breakfastQuantity;

	private int lunchQuantity;
	
	private int dinnerQuantity;
	
	private LocalDate orderStartDate ;
	
	private LocalDate orderEndDate ;
	
//	@ManyToOne
//	@JoinColumn(name="address_id")
//	private Address deliveryAddress ;
	
	private String deliveryNote ;	
	
	
	
//	@CreationTimestamp
//	private LocalDateTime dateTime;

	
/*	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;*/
		
}
