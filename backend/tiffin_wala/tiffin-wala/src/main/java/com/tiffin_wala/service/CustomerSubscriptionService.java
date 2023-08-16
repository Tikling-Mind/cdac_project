package com.tiffin_wala.service;

public interface CustomerSubscriptionService {

	public String subscribeToPlan(int customerId, int planId);

	public String unsubscribeFromPlan(int customerId, int planId);

}
