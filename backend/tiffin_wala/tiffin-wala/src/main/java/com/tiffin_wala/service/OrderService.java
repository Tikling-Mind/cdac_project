package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.OrderDto;

public interface OrderService {

	public List<OrderDto> getAllOrders();

	public OrderDto getOrderById(int orderId);

	public String deleteOrderById(int orderId);

	public OrderDto createOrder(OrderDto order);

	public List<OrderDto> getOrdersByTiffin(int tiffinId);


}
