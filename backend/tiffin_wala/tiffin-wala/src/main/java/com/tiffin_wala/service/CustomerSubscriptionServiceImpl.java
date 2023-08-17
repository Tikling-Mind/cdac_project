package com.tiffin_wala.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.tiffin_wala.repository.CustomerSubscriptionRepository;

public class CustomerSubscriptionServiceImpl implements CustomerSubscriptionService {
	
	@Autowired
	private CustomerSubscriptionRepository customerSubscriptionRepo;

	@Autowired
	private ModelMapper modelMapper;


	@Override
	public String subscribeToPlan(int customerId, int planId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String unsubscribeFromPlan(int customerId, int planId) {
		// TODO Auto-generated method stub
		return null;
	}

}
