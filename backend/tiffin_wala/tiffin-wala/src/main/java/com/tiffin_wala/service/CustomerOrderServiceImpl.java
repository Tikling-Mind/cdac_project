package com.tiffin_wala.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.CustomerOrderDto;
import com.tiffin_wala.dto.TiffinDto;
import com.tiffin_wala.entities.CustomerOrder;
import com.tiffin_wala.entities.Tiffin;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.CustomerOrderRepository;
import com.tiffin_wala.repository.TiffinRepository;


@Transactional
@Service
public class CustomerOrderServiceImpl implements CustomerOrderService {
	
	@Autowired
	private CustomerOrderRepository customerOrderRepo;
	
	@Autowired
	private TiffinRepository tiffinRepo;
	
	@Autowired
	private ModelMapper modelMapper;


	@Override
	public CustomerOrderDto createOrder(CustomerOrderDto customerOrderDto) {
		CustomerOrder customerOrder = modelMapper.map(customerOrderDto, CustomerOrder.class);
		customerOrderRepo.save(customerOrder);
		return customerOrderDto;
	}
	

	@Override
	public List<CustomerOrderDto> getAllCustomerOrders() {
		List<CustomerOrderDto> allCustomerOrdersList = customerOrderRepo.findAll()
				.stream().map(customerOrder->modelMapper.map(customerOrder, CustomerOrderDto.class))
				.collect(Collectors.toList());
		return allCustomerOrdersList;
	}
	
	@Override
	public CustomerOrderDto getCustomerOrderById(Long customerOrderId) {
		CustomerOrder customerOrder = customerOrderRepo.findById(customerOrderId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid customer order ID"));
		
		return modelMapper.map(customerOrder, CustomerOrderDto.class);
	}

	@Override
	public String deleteCustomerOrderById(Long customerOrderId) {
		CustomerOrder customerOrder = customerOrderRepo.findById(customerOrderId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid Customer Order ID"));
		
		customerOrderRepo.delete(customerOrder);
		return "Order with Order Id: " + customerOrder.getId() +  "Customer Name: " + customerOrder.getCustomer().getFirstName() +
				" " + customerOrder.getCustomer().getLastName() + " has been removed!";
	}
	
	@Override
	public List<CustomerOrderDto> getCustomerOrdersByTiffinId(Long tiffinId) {
		List<CustomerOrderDto> customerOrdersList = customerOrderRepo.findByTiffinId(tiffinId)
				.stream().map(customerOrder->modelMapper.map(customerOrder, CustomerOrderDto.class))
				.collect(Collectors.toList());
		return customerOrdersList;
	}
	
	@Override
	public List<CustomerOrderDto> getCustomerOrdersByCustomerId(Long customerId) {
		List<CustomerOrderDto> customerOrdersList = customerOrderRepo.findByCustomerId(customerId)
				.stream().map(customerOrder->modelMapper.map(customerOrder, CustomerOrderDto.class))
				.collect(Collectors.toList());
		return customerOrdersList;
	}


	@Override
	public List<CustomerOrderDto> getCustomerOrdersByVendorId(Long vendorId) {
		List<Tiffin> tiffinListForVendor = tiffinRepo.findByVendorId(vendorId)
				.orElseThrow(()-> new ResourceNotFoundException("This vendor has no Tiffins!")) ;		
		  
		List<CustomerOrder> customerOrderList = new ArrayList<>() ;
		  
		tiffinListForVendor.forEach(tiffin-> {
			  customerOrderList.addAll(customerOrderRepo.findByTiffinId(tiffin.getId()));
			  });
		 
		return customerOrderList.stream()
			   .map( cs -> modelMapper.map(cs, CustomerOrderDto.class))
			   .collect(Collectors.toList());
		
//		Object customerOrdersList = 
		
		/*
		 * return tiffinListForVendor.stream() .map(tiffin ->
		 * customerOrderRepo.findByTiffinId(tiffin.getId()))
		 * .collect(Collectors.toList());
		 */
		// customerOrdersList;
	}
	
	
	

}
