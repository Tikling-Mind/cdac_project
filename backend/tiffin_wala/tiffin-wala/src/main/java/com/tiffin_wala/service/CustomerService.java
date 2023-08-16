package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.CustomerDto;

public interface CustomerService {

	public CustomerDto createCustomer(CustomerDto customer);

	public List<CustomerDto> getAllCustomers();

	public CustomerDto getCustomerById(int customerId);

	public List<CustomerDto> getCustomersByVendorId(int vendorId);

	public CustomerDto updateCustomerDetails(int customerId);

	public String deleteCustomerById(int customerId);

	public String blockCustomerById(int customerId);

}
