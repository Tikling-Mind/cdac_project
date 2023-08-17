package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "vendors")
@Getter
@Setter
@NoArgsConstructor
public class Vendor extends UserEntity {

	private boolean isVerified;
	
	private boolean isBlocked;

	public Vendor(String firstName, String lastName, String email, String mobile) {
		super(firstName, lastName, email, mobile);

	}
	
	
	
	public Vendor(String firstName, String lastName, String email, String mobile, boolean isVerified, boolean isBlocked,
			Address address) {
		super(firstName, lastName, email, mobile);
		this.isVerified = isVerified;
		this.isBlocked = isBlocked;
		this.address = address;
	}



	@Embedded
	private Address address;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<SubscriptionPlan> plans = new HashSet<SubscriptionPlan>();


}
