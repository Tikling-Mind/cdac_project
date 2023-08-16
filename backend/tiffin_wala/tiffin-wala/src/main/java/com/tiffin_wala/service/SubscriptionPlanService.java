package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.SubscriptionPlanDto;

public interface SubscriptionPlanService {

	public List<SubscriptionPlanDto> getAllSubscriptionPlans();

	public SubscriptionPlanDto createSubscriptionPlanForVendor(int vendorId, SubscriptionPlanDto plan);

	public SubscriptionPlanDto getSubscriptionPlanById(int planId);

	public List<SubscriptionPlanDto> getSubscriptionPlansByCustomer(int customerId);

	public List<SubscriptionPlanDto> getSubscriptionPlansByVendor(int vendorId);

	public List<SubscriptionPlanDto> getActiveSubscriptionPlans();

	public List<SubscriptionPlanDto> getInactiveSubscriptionPlans();

	public List<SubscriptionPlanDto> updateSubscriptionPlanById(int planId);

	public String deleteSubscriptionPlanById(int planId);

	

}
