package com.tiffin_wala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tiffin_wala.dto.OrderDto;
import com.tiffin_wala.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	OrderService orderService ;
	
	@PostMapping
	public ResponseEntity<?> createOrder(OrderDto order){
		return new ResponseEntity<>(orderService.createOrder(order), HttpStatus.CREATED) ;
	}
	
	@GetMapping
	public ResponseEntity<?> getAllOrders(){
		return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK) ;
	}
	
	@GetMapping("/{orderId}")
	public ResponseEntity<?> getOrderById(@PathVariable int orderId){
		return new ResponseEntity<>(orderService.getOrderById(orderId),HttpStatus.OK) ;
	}
	
	@DeleteMapping("/{orderId}")
	public ResponseEntity<?> deleteOrderById(@PathVariable int orderId){
		return new ResponseEntity<>(orderService.deleteOrderById(orderId), HttpStatus.OK) ;
	}
	
	@GetMapping("/tiffin/{tiffinId}")
	public ResponseEntity<?> getOrdersByTiffin(@PathVariable int tiffinId){
		return new ResponseEntity<>(orderService.getOrdersByTiffin(tiffinId), HttpStatus.OK) ;
	}
	
	
}
