package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "otps")
@NoArgsConstructor
@AllArgsConstructor
public class OTP extends BaseEntity{
	
	@Column(length = 35)
	private String email;
	
	private int otp;
    
	@CreationTimestamp
	private LocalDateTime dateCreated;

	public OTP(String email, int otp) {
		super();
		this.email = email;
		this.otp = otp;
	}
	
	
}