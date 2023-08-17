package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
public class Customer extends UserEntity {

	public Customer(String firstName, String lastName, String email, String mobile) {
		super(firstName, lastName, email, mobile);

	}

	@Embedded
	private Address deliveryAddress;

	@JsonManagedReference
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private Set<Order> orders;

	@JsonManagedReference
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CustomerPlanSubscription> plans = new HashSet<>();

	@Override
	public String toString() {
		return "Customer [getFirstName()=" + getFirstName() + ", getLastName()=" + getLastName() + ", getEmail()="
				+ getEmail() + ", getMobile()=" + getMobile() + ", getId()=" + getId() + "]";
	}
	
	
	
}
