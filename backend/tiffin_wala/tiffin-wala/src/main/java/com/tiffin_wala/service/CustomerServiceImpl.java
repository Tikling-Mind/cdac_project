package com.tiffin_wala.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.AddressDto;
import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.entities.Address;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.enums.AddressType;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.AddressRepository;
import com.tiffin_wala.repository.CustomerRepository;
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private AddressRepository addressRepo;

	@Override
	public CustomerDto createCustomer(CustomerDto customerDto) {
		Customer customer = modelMapper.map(customerDto, Customer.class);
		Address address = modelMapper.map(customerDto.getAddress(), Address.class) ;
		address.setAddressType(AddressType.HOME);
		customer = customerRepo.save(customer) ;
		address.setCustomer(customer);
		address = addressRepo.save(address) ;
		AddressDto addressDto = modelMapper.map(address, AddressDto.class) ;
		CustomerDto returnCustomerDto = modelMapper.map(customer, CustomerDto.class) ;
		returnCustomerDto.setAddress(addressDto);
		return returnCustomerDto;
	}

	@Override
	public List<CustomerDto> getAllCustomers() {
		//fetching all HOME addresses to find home address of each customer
		List<Address> homeAddressList = addressRepo.findAllByAddressType(AddressType.HOME)
				.orElseThrow(()->new ResourceNotFoundException("Error occured while fecthing addresses!"));
		List<CustomerDto> allCustomersList = customerRepo.findAll()
				.stream()
				.map(customer->{
					CustomerDto customerDto = modelMapper.map(customer, CustomerDto.class);
					Address homeAddress = homeAddressList.stream()
							.filter(address->address.getCustomer()==customer)
							.collect(Collectors.toList()).get(0);
					customerDto.setAddress(modelMapper.map(homeAddress, AddressDto.class));
					return customerDto;
				})
				.collect(Collectors.toList());
		return allCustomersList;
	}

	@Override
	public CustomerDto getCustomerById(Long customerId) {
		//fetching all HOME addresses to find home address of each customer
		List<Address> homeAddressList = addressRepo.findAllByAddressType(AddressType.HOME)
								.orElseThrow(()->new ResourceNotFoundException("Error occured while fecthing addresses!"));
		Customer customer = customerRepo.findById(customerId)
								.orElseThrow(()-> new ResourceNotFoundException("Invalid customer ID"));
		Address homeAddress = homeAddressList.stream()
								.filter(address->address.getCustomer()==customer)
								.collect(Collectors.toList()).get(0);
		CustomerDto customerDto =  modelMapper.map(customer, CustomerDto.class);
		customerDto.setAddress(modelMapper.map(homeAddress, AddressDto.class));
		return customerDto;
	}

	@Override
	public CustomerDto updateCustomerDetails(CustomerDto detachedCustomer) {
		customerRepo.findById(detachedCustomer.getId()).
				orElseThrow(()-> new ResourceNotFoundException("Invalid customer ID"));
		customerRepo.save(modelMapper.map(detachedCustomer, Customer.class));
		return detachedCustomer;
	}

	@Override
	public String deleteCustomerById(Long customerId) {
		Customer customer = customerRepo.findById(customerId)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid customer ID"));
		customerRepo.delete(customer);
		return "Customer " + customer.getFirstName() + " " + customer.getLastName() + " has been removed!";
	}


	@Override
	public String changeBlockingStatus(Long customerId) {
		Customer customer = customerRepo.findById(customerId)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid customer ID")) ;
		customer.setBlocked(!customer.isBlocked());
		customerRepo.save(customer) ;
		String status = customer.isBlocked()?"Blocked":"Unblocked" ;
		return "Customer " + customer.getFirstName() + " "+ customer.getLastName()+ " has been " + status ;
	}

//	@Override
//	public CustomerDto changeBlockingStatus(CustomerDto customer) {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
