package com.tiffin_wala.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.CustomerRepository;

public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CustomerDto createCustomer(CustomerDto customerDto) {
		Customer customer = modelMapper.map(customerDto, Customer.class);
		customerRepo.save(customer);
		return customerDto;
	}

	@Override
	public List<CustomerDto> getAllCustomers() {
		List<CustomerDto> allCustomersList = customerRepo.findAll()
				.stream().map(customer->modelMapper.map(customer, CustomerDto.class))
				.collect(Collectors.toList());
		return allCustomersList;
	}

	@Override
	public CustomerDto getCustomerById(Long customerId) {
		Customer customer = customerRepo.findById(customerId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid customer ID"));
		
		return modelMapper.map(customer, CustomerDto.class);
	}

	@Override
	public CustomerDto updateCustomerDetails(CustomerDto detachedCustomer) {
		Customer customer = modelMapper.map(detachedCustomer, Customer.class);
		customerRepo.save(customer);
		return detachedCustomer;
	}

	@Override
	public String deleteCustomerById(Long customerId) {
		Customer customer = customerRepo.findById(customerId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid customer ID"));
		
		customerRepo.delete(customer);
		return "Customer " + customer.getFirstName() + " " + customer.getLastName() + " has been removed!";
	}


	@Override
	public String changeBlockingStatus(CustomerDto customerDto) {
		Customer customer = customerRepo.findById(customerDto.getId())
				.orElseThrow(()-> new ResourceNotFoundException("Invalid customer ID")) ;
		customer.setBlocked(customerDto.isBlocked());
		customerRepo.save(customer) ;
		String status = customerDto.isBlocked()?"Blocked":"Unblocked" ;
		return "Customer " + customer.getFirstName() + " "+ customer.getLastName()+ " has been " + status ;
	}

}
