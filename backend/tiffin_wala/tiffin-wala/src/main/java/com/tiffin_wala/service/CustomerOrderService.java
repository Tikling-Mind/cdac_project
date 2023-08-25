package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.CustomerOrderDto;

public interface CustomerOrderService {

	CustomerOrderDto createOrder(CustomerOrderDto customerOrderDto);
	
	List<CustomerOrderDto> getAllCustomerOrders();
	
	CustomerOrderDto getCustomerOrderById(Long orderId);
	
	String deleteCustomerOrderById(Long customerOrderId);
	
	List<CustomerOrderDto> getCustomerOrdersByTiffinId(Long tiffinId);
	
	List<CustomerOrderDto> getCustomerOrdersByCustomerId(Long customerId);
	
	List<CustomerOrderDto> getCustomerOrdersByVendorId(Long vendorId);

}
