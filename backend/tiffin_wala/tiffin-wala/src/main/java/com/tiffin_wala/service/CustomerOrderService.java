package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.OrderDto;

public interface CustomerOrderService {

	OrderDto createOrder(OrderDto order);

	List<OrderDto> getAllOrders();

	OrderDto getOrderById(int orderId);

	String deleteOrderById(int orderId);

	List<OrderDto> getOrdersByTiffinId(int tiffinId);

}
