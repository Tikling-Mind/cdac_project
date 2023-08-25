package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.CustomerOrderDto;

public interface CustomerOrderService {

	CustomerOrderDto createOrder(CustomerOrderDto order);

	List<CustomerOrderDto> getAllOrders();

	CustomerOrderDto getOrderById(int orderId);

	String deleteOrderById(int orderId);

	List<CustomerOrderDto> getOrdersByTiffinId(int tiffinId);

}
