
package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;Decide if you want to keep only your branch's changes, keep only the other branch's changes, or make a brand new change, which may incorporate changes from both branches. Delete the conflict markers <<<<<<<, =======, >>>>>>> and make the changes you want in the final merge.
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	
	@GetMapping // Get all approved vendors -----------------------------
	public ResponseEntity<?> getAllVendors(){
		return new ResponseEntity<>(vendorService.getAllVendorsList(), HttpStatus.OK) ;
	}
	Decide if you want to keep only your branch's changes, keep only the other branch's changes, or make a brand new change, which may incorporate changes from both branches. Delete the conflict markers <<<<<<<, =======, >>>>>>> and make the changes you want in the final merge.
	@GetMapping("/{vendorId}") // Get Approved Vendors by Id
	public ResponseEntity<?> getVendorById(@PathVariable int vendorId){
		return new ResponseEntity<>(vendorService.getVendorById(vendorId), HttpStatus.OK) ;
	}
	
	@PutMapping("/{vendorId}")
	public ResponseEntity<?> updateVendorById(@PathVariable int vendorId){
		return new ResponseEntity<> (vendorService.updateVendorById(vendorId), HttpStatus.OK) ;
	}
	
	@DeleteMapping("/{vendorId}")
	public ResponseEntity<?> deleteVendorById(@PathVariable int vendorId){
		return new ResponseEntity<> (vendorService.deleteVendorById(vendorId), HttpStatus.OK) ;
	}
		
	@PostMapping("/approve/{vendorId}")
	public ResponseEntity<?> approveVendorById(@PathVariable int vendorId){
		return new ResponseEntity<>(vendorService.approveVendorById(vendorId), HttpStatus.OK) ;
	}	
	
	@GetMapping("/unapproved")
	public ResponseEntity<?> getAllUnapprovedVendors(){
		return new ResponseEntity<>(vendorService.getAllUnapprovedVendors(),HttpStatus.OK) ;
	}
	
	@GetMapping("/unapproved/{vendorId}")
	public ResponseEntity<?> getUnapprovedVendorById(@PathVariable int vendorId){
		return new ResponseEntity<>(vendorService.getUnapprovedVendorById(vendorId),HttpStatus.OK) ;
	}

	@PatchMapping("/status/availible")
	public ResponseEntity<?> changeAvailablibility(@RequestBody VendorDto vendor){
		return new ResponseEntity<>(vendorService.changeAvailability(vendor), HttpStatus.OK) ;
	}
	
	@PatchMapping("/status/block")
	public ResponseEntity<?> changeBlockingStatus(@RequestBody VendorDto vendor){
		return new ResponseEntity<> (vendorService.changeBlockingStatus(vendor), HttpStatus.OK) ;
	}
	
}
