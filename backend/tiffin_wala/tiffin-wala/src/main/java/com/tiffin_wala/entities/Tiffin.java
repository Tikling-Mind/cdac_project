package com.tiffin_wala.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.tiffin_wala.enums.FoodType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tiffin extends BaseEntity{

	private String name;

	private double price;
	
	private String description;
	
//	private boolean isAvaliable;
	
	@Enumerated(EnumType.STRING)
	private FoodType foodType;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="vendor_id")
	private Vendor vendor ;
	
	private LocalDate availableFrom ;
	
	private LocalDate availableTo ;
	
	// From LSB TO MSB -> the positions of the binary maps to 
	// Breakfast, Lunch and Dinner. 
	// The three digit binary is then converted to integer which corresponds to a unique configuration.
	private int breakLunchDinner ;

	public void setBreakLunchDinner(int breakLunchDinner) {
		this.breakLunchDinner = breakLunchDinner;
	}

	
	
	/*
	 * @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	 * 
	 * @JoinColumn(name = "subscription_plan_id") private List<SubscriptionPlan>
	 * subscriptionPlans;
	 */    
    
	
	
}
