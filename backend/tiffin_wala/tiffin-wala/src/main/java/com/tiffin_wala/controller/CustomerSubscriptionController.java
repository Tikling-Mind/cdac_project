package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiffin_wala.service.CustomerSubscriptionService;

@RestController
@RequestMapping("customer-plan")
public class CustomerSubscriptionController {

	@Autowired
	CustomerSubscriptionService  subscriptionService ;
	
	@PostMapping("/{customerId}/{tiffinId}")
	public ResponseEntity<?> subscribeToTiffin(@PathVariable int customerId, @PathVariable int planId){
		return new ResponseEntity<>(subscriptionService.subscribeToPlan(customerId,planId), HttpStatus.CREATED) ;
	}
	
	@DeleteMapping("/{customerId}/{tiffinId}")
	public ResponseEntity<?> unsubscribeFromTiffin(@PathVariable int customerId, @PathVariable int planId){
		return new ResponseEntity<>(subscriptionService.unsubscribeFromPlan(customerId,planId), HttpStatus.CREATED) ;
	}
}
