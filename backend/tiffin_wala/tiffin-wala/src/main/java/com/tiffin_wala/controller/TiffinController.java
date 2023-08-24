package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tiffin_wala.dto.ApiResponse;
import com.tiffin_wala.dto.TiffinDto;
import com.tiffin_wala.service.TiffinService;

@RestController
@RequestMapping("/tiffin")
public class TiffinController {

	@Autowired
	TiffinService tiffinService ;
	

	@PostMapping // Create new Tiffin---------------------------------
	public ResponseEntity<?> createTiffin(@RequestBody TiffinDto tiffin) {
		return new ResponseEntity<>(tiffinService.createTiffin(tiffin), HttpStatus.CREATED);
	}

	
	@GetMapping // Get list of all  tiffins --------------------------
	public ResponseEntity<?> getAllTiffins() {
			return new ResponseEntity<>(tiffinService.getAllTiffins(), HttpStatus.OK);
	}
	
	@GetMapping("/{tiffinId}") // get tiffin by Tiffin Id-----------
	public ResponseEntity<?> getTiffinById(@PathVariable Long tiffinId){
			return new ResponseEntity<>(tiffinService.getTiffinById(tiffinId), HttpStatus.OK) ;
	}
	
	@GetMapping("/vendor/{vendorId}") // Get Tiffin by vendor ---------
	public ResponseEntity<?> getTiffinsByVendorId(@PathVariable Long vendorId){
		return new ResponseEntity<>(tiffinService.getTiffinsByVendorId(vendorId), HttpStatus.OK) ;
	}
	
	@PutMapping("/{tiffinId}") // Update Tiffin Details -----------------
	public ResponseEntity<?> updateTiffinById(@RequestBody TiffinDto tiffinDto){
		return new ResponseEntity<>(tiffinService.updateTiffinDetails(tiffinDto), HttpStatus.OK) ;
	}
	 
	@DeleteMapping("/{tiffinId}") // Delete Tiffin ----------------------
	public ResponseEntity<?> deleteTiffinById(@PathVariable Long tiffinId){
		return new ResponseEntity<>(tiffinService.deleteTiffinById(tiffinId), HttpStatus.OK ) ;
	}
	
	@PatchMapping("/{tiffinId}") // Block Tiffin ------------------------
	public ResponseEntity<?> blockTiffinById(@PathVariable Long tiffinId){
		return new ResponseEntity<>(tiffinService.blockTiffinById(tiffinId), HttpStatus.OK) ;
	}

	
}
