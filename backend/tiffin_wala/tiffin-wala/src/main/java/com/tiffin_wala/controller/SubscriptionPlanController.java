package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiffin_wala.dto.SubscriptionPlanDto;
import com.tiffin_wala.service.SubscriptionPlanService;

@RestController
@RequestMapping("/plan")
public class SubscriptionPlanController {

	@Autowired
	SubscriptionPlanService planService ;
	
	@PostMapping("/{vendorId}")
	public ResponseEntity<?> createSubscriptionPlanForVendor(@PathVariable int vendorId, @RequestBody SubscriptionPlanDto plan ){
		return new ResponseEntity<> (planService.createSubscriptionPlanForVendor(vendorId,plan), HttpStatus.CREATED) ;
	}
	
	@GetMapping // Both Active and InActive
	public ResponseEntity<?> getAllSubscriptionPlans(){
		return new ResponseEntity<>(planService.getAllSubscriptionPlans(), HttpStatus.OK) ;
	} 
	
	@GetMapping("/{planId}")
	public ResponseEntity<?> getSubscriptionPlanById(@PathVariable int planId){
		return new ResponseEntity<> (planService.getSubscriptionPlanById(planId), HttpStatus.OK) ;
	}
	
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<?> getSubscriptionPlansByCustomer(@PathVariable int customerId){
		return new ResponseEntity<> (planService.getSubscriptionPlansByCustomer(customerId), HttpStatus.OK) ;
	}
	
	@GetMapping("/vendor/{vendorId}")
	public ResponseEntity<?> getSubscriptionPlansByVendor(@PathVariable int vendorId){
		return new ResponseEntity<> (planService.getSubscriptionPlansByVendor(vendorId), HttpStatus.OK) ;
	}
	
	@GetMapping("/active")
	public ResponseEntity<?> getActiveSubscriptionPlans(){
		return new ResponseEntity<> (planService.getActiveSubscriptionPlans(), HttpStatus.OK) ;
	}
	
	@GetMapping("/inactive")
	public ResponseEntity<?> getInactiveSubscriptionPlans(){
		return new ResponseEntity<> (planService.getInactiveSubscriptionPlans(), HttpStatus.OK) ;
	}
	
	
	@PutMapping("/{planId}")
	public ResponseEntity<?> updateSubscriptionPlanById(@PathVariable int planId, @RequestBody SubscriptionPlanDto plan ){
		return new ResponseEntity<> (planService.updateSubscriptionPlanById(planId), HttpStatus.OK) ;
	}
	
	@DeleteMapping("{planId}")
	public ResponseEntity<?> deleteSubscriptionPlanById(@PathVariable int planId){
		return new ResponseEntity<>(planService.deleteSubscriptionPlanById(planId),HttpStatus.OK) ;
	}
	
	
	
	
	
	
}
