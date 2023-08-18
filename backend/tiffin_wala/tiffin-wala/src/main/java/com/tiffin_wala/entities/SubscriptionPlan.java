package com.tiffin_wala.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.tiffin_wala.enums.PlanType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="subscription_plans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SubscriptionPlan extends BaseEntity{
	
	private String name;
	
	private String description;
	
	private double price;
	
	private boolean isAvaliable;

	@Enumerated(EnumType.STRING)
	private PlanType planType;
	
//	@JsonManagedReference
//	@OneToMany(mappedBy = "subscriptionPlan",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
//	private Set<Tiffin> tiffins = new HashSet<Tiffin>();
//	
	
	@ManyToOne
	@JoinColumn(name = "vendor_id")
	private Vendor vendor;
	
}
	
	
