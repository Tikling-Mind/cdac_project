package com.tiffin_wala.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.tiffin_wala.enums.AddressType;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@Entity
public class Address extends BaseEntity {
	
	@Enumerated(EnumType.STRING) // col : varchar => enum constant name
	private AddressType addressType;
	
	private String line1;

	private String line2;

	private String city;

	private Integer pincode;

	private String state;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer customer ;
	
	@ManyToOne
	@JoinColumn(name="vendor_id")
	private Vendor vendor ;


}
