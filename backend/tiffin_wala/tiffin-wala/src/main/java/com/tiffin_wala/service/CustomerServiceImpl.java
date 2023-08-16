package com.tiffin_wala.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.repository.CustomerRepository;

public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepo;
	
	@Autowired
	private ModelMapper modelmapper;

	@Override
	public CustomerDto createCustomer(CustomerDto customerDto) {
		Customer customer = modelmapper.map(customerDto, Customer.class);
		customerRepo.save(customer);
		return customerDto;
	}

	@Override
	public List<CustomerDto> getAllCustomers() {
		customerRepo.findAll();
		return null;
	}

	@Override
	public CustomerDto getCustomerById(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CustomerDto> getCustomersByVendorId(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CustomerDto updateCustomerDetails(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteCustomerById(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String blockCustomerById(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}

}
