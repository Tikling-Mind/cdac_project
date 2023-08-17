package com.tiffin_wala.entities;

import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Customer extends BaseEntity {
	
	String firstName;
	String lastName;
	String email;
	String mobile;
	LocalDate registerDate;
	String password;
	boolean isBlocked;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="address_id")
	Address address;	
	
}
