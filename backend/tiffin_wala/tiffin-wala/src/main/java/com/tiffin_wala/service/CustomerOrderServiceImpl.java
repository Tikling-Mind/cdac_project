package com.tiffin_wala.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.CustomerOrderDto;

@Transactional
@Service
public class CustomerOrderServiceImpl implements CustomerOrderService {

	@Override
	public CustomerOrderDto createOrder(CustomerOrderDto order) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CustomerOrderDto> getAllOrders() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CustomerOrderDto getOrderById(int orderId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteOrderById(int orderId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CustomerOrderDto> getOrdersByTiffinId(int tiffinId) {
		// TODO Auto-generated method stub
		return null;
	}

}
