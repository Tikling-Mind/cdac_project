package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiffin_wala.dto.ApiResponse;
import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	CustomerService customerService;

	@PostMapping // Create new Customer---------------------------------
	public ResponseEntity<?> createCustomer(@RequestBody CustomerDto customer) {
		try {
			System.out.println("In create Customer" + customer);
			// Add location header in the h
			return new ResponseEntity<>(customerService.createCustomer(customer), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.CONFLICT);
		}
	}

	
	@GetMapping // Get list of all  customers --------------------------
	public ResponseEntity<?> getAllCustomers() {
		try {
			System.out.println("In get all customer controller");
			return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/{customerId}") // get customer by Customer Id-----------
	public ResponseEntity<?> getCustomerById(@PathVariable int customerId){
			return new ResponseEntity<>(customerService.getCustomerById(customerId), HttpStatus.OK) ;
	}
	
	@GetMapping("/vendor/{vendorId}") // Get Customer by vendor ---------
	public ResponseEntity<?> getCustomersByVendorId(@PathVariable int vendorId){
		return new ResponseEntity<>(customerService.getCustomersByVendorId(vendorId), HttpStatus.OK) ;
	}
	
	@PutMapping("/{customerId}") // Update Customer Details -----------------
	public ResponseEntity<?> updateCustomerById(@PathVariable int customerId){
		return new ResponseEntity<>(customerService.updateCustomerDetails(customerId), HttpStatus.OK) ;
	}
	 
	@DeleteMapping("/{customerId}") // Delete Customer ----------------------
	public ResponseEntity<?> deleteCustomerById(@PathVariable int customerId){
		return new ResponseEntity<>(customerService.deleteCustomerById(customerId), HttpStatus.OK ) ;
	}
	
	@PatchMapping("/{customerId}") // Block Customer ------------------------
	public ResponseEntity<?> blockCustomerById(@PathVariable int customerId){
		return new ResponseEntity<>(customerService.blockCustomerById(customerId), HttpStatus.OK) ;
	}
	

}
