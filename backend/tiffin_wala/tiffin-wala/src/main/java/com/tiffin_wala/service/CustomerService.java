package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.dto.VendorDto;

public interface CustomerService {

	public CustomerDto createCustomer(CustomerDto customer);

	public List<CustomerDto> getAllCustomers();

	public CustomerDto getCustomerById(int customerId);

	public List<CustomerDto> getCustomersByVendorId(int vendorId);

	public CustomerDto updateCustomerDetails(CustomerDto customer);

	public String deleteCustomerById(int customerId);

	public CustomerDto changeBlockingStatus(CustomerDto customer);

}
