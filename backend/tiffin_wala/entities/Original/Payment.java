package com.app.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.app.enums.PaymentStatus;
import com.app.enums.PaymentType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="payments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Payment extends BaseEntity {

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="order_id")
	private Order order;

	private Double amount;

	@Enumerated(EnumType.STRING)
	private PaymentType paymentType;
	
	private String razorpayPaymentId;
	
	@CreationTimestamp
	private Date paymentTime;

	@Enumerated(EnumType.STRING)
	private PaymentStatus status;
}
