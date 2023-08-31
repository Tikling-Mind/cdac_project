package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin("http://localhost:3000/")
public class CustomerController {

	@Autowired
	CustomerService customerService;

	@PostMapping // Create new Customer---------------------------------
	public ResponseEntity<?> createCustomer(@RequestBody CustomerDto customer) {
		try {
			System.out.println("In create Customer" + customer);
			// Add location header in the 
			return new ResponseEntity<>(customerService.createCustomer(customer), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping // Get list of all  customers --------------------------
	public ResponseEntity<?> getAllCustomers() {
			return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
	}
	
	@GetMapping("/{customerId}") // get customer by Customer Id-----------
	public ResponseEntity<?> getCustomerById(@PathVariable Long customerId){
			return new ResponseEntity<>(customerService.getCustomerById(customerId), HttpStatus.OK) ;
	}
	
	@PutMapping // Update Customer Details -----------------
	public ResponseEntity<?> updateCustomer(@RequestBody CustomerDto customer){
		return new ResponseEntity<>(customerService.updateCustomerDetails(customer), HttpStatus.OK) ;
	}
	 
	@DeleteMapping("/{customerId}") // Delete Customer ----------------------
	public ResponseEntity<?> deleteCustomerById(@PathVariable Long customerId){
		return new ResponseEntity<>(customerService.deleteCustomerById(customerId), HttpStatus.OK ) ;
	}

	@PatchMapping("/block/")
	public ResponseEntity<?> changeBlockingStatus(@RequestBody CustomerDto customer){
		System.out.println("In change blocking status");
		return new ResponseEntity<> (customerService.changeBlockingStatus(customer.getId()), HttpStatus.OK) ;
	}

}
