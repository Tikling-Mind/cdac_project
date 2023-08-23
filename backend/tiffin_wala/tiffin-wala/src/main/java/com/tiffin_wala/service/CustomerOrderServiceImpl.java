package com.tiffin_wala.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.OrderDto;

@Transactional
@Service
public class CustomerOrderServiceImpl implements CustomerOrderService {

	@Override
	public OrderDto createOrder(OrderDto order) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderDto> getAllOrders() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OrderDto getOrderById(int orderId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteOrderById(int orderId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderDto> getOrdersByTiffinId(int tiffinId) {
		// TODO Auto-generated method stub
		return null;
	}

}
