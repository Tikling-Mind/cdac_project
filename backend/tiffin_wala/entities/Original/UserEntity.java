package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
public class UserEntity extends BaseEntity {

	@Column(length = 50)
	private String firstName;

	@Column(length = 50)
	private String lastName;

	@Column(length = 50,unique = true)
	private String email;

	@Column(length = 10,unique = true)
	private String mobile;

	@CreationTimestamp
	private LocalDateTime registerDate;

	private String profileImage;

	public UserEntity(String firstName, String lastName, String email, String mobile) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
	}

	
	
	
}
