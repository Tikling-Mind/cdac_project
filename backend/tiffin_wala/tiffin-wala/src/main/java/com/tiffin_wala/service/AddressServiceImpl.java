package com.tiffin_wala.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiffin_wala.dto.AddressDto;
import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.entities.Address;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.entities.Vendor;
import com.tiffin_wala.enums.AddressType;
import com.tiffin_wala.enums.UserRole;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.AddressRepository;
import com.tiffin_wala.repository.CustomerRepository;
import com.tiffin_wala.repository.VendorRepository;

@Transactional
@Service	
public class AddressServiceImpl implements AddressService {

	@Autowired
	ModelMapper modelMapper ;
	
	@Autowired 
	AddressRepository addressRepo ;
	
	@Autowired
	CustomerRepository customerRepo ;
	
	@Autowired
	VendorRepository vendorRepo  ;
	
	@Override
	public Object addAddress(AddressDto addressDto) {
			Address address = modelMapper.map(addressDto, Address.class) ;
			if(addressDto.getRole() == UserRole.ROLE_CUSTOMER) {
				Customer customer = customerRepo.findById(addressDto.getId())
								.orElseThrow(() -> new ResourceNotFoundException("Invalid User Id")) ;
				
				if(addressRepo.findByAddressTypeAndCustomer(AddressType.HOME, customer) == null) 
					address.setAddressType(AddressType.HOME);
				else 
					address.setAddressType(AddressType.OTHER);
				
				address.setCustomer(customer);
				addressRepo.save(address) ;
				CustomerDto customerDto = modelMapper.map(customer, CustomerDto.class) ;
				customerDto.setAddress(addressDto);
				return customerDto ;
			}else {
				Vendor vendor = vendorRepo.findById(addressDto.getId())
								.orElseThrow(() -> new ResourceNotFoundException("Invalid User Id")) ;
				if(addressRepo.findByAddressTypeAndVendor(AddressType.HOME, vendor) == null) 
					address.setAddressType(AddressType.HOME);
				else 
					address.setAddressType(AddressType.OTHER);
				
				address.setVendor(vendor);
				addressRepo.save(address) ;
				VendorDto vendorDto = modelMapper.map(vendor, VendorDto.class) ;
				vendorDto.setAddress(addressDto);
				return vendorDto ;
			}
	}

}
