package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "customer_plans")
@NoArgsConstructor
@AllArgsConstructor
public class CustomerPlanSubscription extends BaseEntity {
	
	@CreationTimestamp
	private LocalDate startDate;
	
	private LocalDate endDate;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "subscription_plan_id")
	private SubscriptionPlan subscriptionPlan;

	public CustomerPlanSubscription(Customer customer, SubscriptionPlan subscriptionPlan) {
		super();
		this.customer = customer;
		this.subscriptionPlan = subscriptionPlan;
	}

	@Override
	public String toString() {
		return "CustomerPlanSubscription [startDate=" + startDate + ", endDate=" + endDate + ", customer=" + customer.getId()
				+ ", subscriptionPlan=" + subscriptionPlan.getId() + "]";
	}
	
	
	

}
