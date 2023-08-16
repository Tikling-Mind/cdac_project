package com.tiffin_wala.service;

public interface CustomerSubscriptionService {

	String subscribeToPlan(int customerId, int planId);

	String unsubscribeFromPlan(int customerId, int planId);

}
