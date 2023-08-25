package com.tiffin_wala.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.tiffin_wala.enums.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
	private int breakFastQuantity;

	private int LunchQuantity;
	
	private int dinnerQuantity;
	
	private LocalDate orderStartDate ;
	
	private LocalDate orderEndDate ;
	
//	@ManyToOne
//	@JoinColumn(name="address_id")
//	private Address deliveryAddress ;
	
	private String DeliveryNote ;	
	
	
	
//	@CreationTimestamp
//	private LocalDateTime dateTime;

	
/*	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;*/
		
}
