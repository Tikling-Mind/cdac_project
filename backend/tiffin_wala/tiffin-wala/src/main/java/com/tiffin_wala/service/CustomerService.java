package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.CustomerDto;

public interface CustomerService {

	public CustomerDto createCustomer(CustomerDto customer);

	public List<CustomerDto> getAllCustomers();

	public CustomerDto getCustomerById(Long customerId);

	public CustomerDto updateCustomerDetails(CustomerDto customer);

	public String deleteCustomerById(Long customerId);

	public CustomerDto changeBlockingStatus(CustomerDto customer);
}
