package com.tiffin_wala.entities;

import javax.persistence.Embeddable;
import javax.persistence.Entity;

import com.tiffin_wala.entities.BaseEntity;

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

	private String Line1;

	private String Line2;

	private String city;

	private Integer pincode;

	private String state;

}
