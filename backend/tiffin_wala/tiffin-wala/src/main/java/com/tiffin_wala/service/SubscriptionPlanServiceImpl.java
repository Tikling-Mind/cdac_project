package com.tiffin_wala.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tiffin_wala.dto.SubscriptionPlanDto;
import com.tiffin_wala.repository.SubscriptionPlanRepository;

public class SubscriptionPlanServiceImpl implements SubscriptionPlanService {
	
	@Autowired
	private SubscriptionPlanRepository subscriptionPlanRep;

	@Override
	public List<SubscriptionPlanDto> getAllSubscriptionPlans() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SubscriptionPlanDto createSubscriptionPlanForVendor(int vendorId, SubscriptionPlanDto plan) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SubscriptionPlanDto getSubscriptionPlanById(int planId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SubscriptionPlanDto> getSubscriptionPlansByCustomer(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SubscriptionPlanDto> getSubscriptionPlansByVendor(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SubscriptionPlanDto> getActiveSubscriptionPlans() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SubscriptionPlanDto> getInactiveSubscriptionPlans() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SubscriptionPlanDto> updateSubscriptionPlanById(int planId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteSubscriptionPlanById(int planId) {
		// TODO Auto-generated method stub
		return null;
	}

}
