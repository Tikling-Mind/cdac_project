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
@AllArgsConstructor

public class Customer extends BaseEntity {
	
	String firstName;
	String lastName;
	String email;
	String mobile;
	LocalDate registerDate;
	String password;
	boolean isBlocked;
	
	@JsonBackReference
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="address_id")
	Address address;	
	
}
