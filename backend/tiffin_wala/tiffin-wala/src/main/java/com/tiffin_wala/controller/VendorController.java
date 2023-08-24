package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.service.VendorService;

@RestController
@RequestMapping("/vendor")
public class VendorController {
	
	@Autowired
	VendorService vendorService ;
	
	@PostMapping
	public ResponseEntity<?> createVendor(@RequestBody VendorDto vendor){
		return new ResponseEntity<>(vendorService.createVendor(vendor), HttpStatus.CREATED) ;
	}
	
	@GetMapping // Get all (approved+unapproved) vendors -----------------------------
	public ResponseEntity<?> getAllVendors(){
		return new ResponseEntity<>(vendorService.getAllVendorsList(), HttpStatus.OK) ;
	}
	
	@GetMapping("/approved") // Get All approved vendors 
	public ResponseEntity<?> getAllApprovedVendors(){
		return new ResponseEntity<>(vendorService.getAllApprovedVendors(),HttpStatus.OK) ;
	}
	
	@GetMapping("/{vendorId}") // Get Vendors by Id
	public ResponseEntity<?> getVendorById(@PathVariable Long vendorId){
		return new ResponseEntity<>(vendorService.getVendorById(vendorId), HttpStatus.OK) ;
	}
	
	@PutMapping
	public ResponseEntity<?> updateVendor(@PathVariable VendorDto vendor){
		return new ResponseEntity<> (vendorService.updateVendor(vendor), HttpStatus.OK) ;
	}
	
	@DeleteMapping("/{vendorId}")
	public ResponseEntity<?> deleteVendorById(@PathVariable Long vendorId){
		return new ResponseEntity<> (vendorService.deleteVendorById(vendorId), HttpStatus.OK) ;
	}
		
	@PatchMapping("/approve/{vendorId}")
	public ResponseEntity<?> approveVendorById(@PathVariable Long vendorId){
		return new ResponseEntity<>(vendorService.approveVendorById(vendorId), HttpStatus.OK) ;
	}	
	
	@GetMapping("/unapproved")
	public ResponseEntity<?> getAllUnapprovedVendors(){
		return new ResponseEntity<>(vendorService.getAllUnapprovedVendors(),HttpStatus.OK) ;
	}
	
	/*
	 * @GetMapping("/unapproved/{vendorId}") public ResponseEntity<?>
	 * getUnapprovedVendorById(@PathVariable Long vendorId){ return new
	 * ResponseEntity<>(vendorService.getUnapprovedVendorById(vendorId),HttpStatus.
	 * OK) ; }
	 */

	@PatchMapping("/status/availible")
	public ResponseEntity<?> changeVendorAvailablibility(@RequestBody VendorDto vendor){
		return new ResponseEntity<>(vendorService.changeAvailability(vendor), HttpStatus.OK) ;
	}
	
	@PatchMapping("/status/block")
	public ResponseEntity<?> changeBlockingStatus(@RequestBody VendorDto vendor){
		return new ResponseEntity<> (vendorService.changeBlockingStatus(vendor), HttpStatus.OK) ;
	}
	
	@GetMapping("/vendor/{vendorId}") // Get Customer by vendor ---------
	public ResponseEntity<?> getCustomersByVendorId(@PathVariable Long vendorId){
		return new ResponseEntity<>(vendorService.getCustomersByVendorId(vendorId), HttpStatus.OK) ;
	}
	
}
