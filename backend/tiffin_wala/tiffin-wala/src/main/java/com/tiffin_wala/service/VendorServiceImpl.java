package com.tiffin_wala.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.entities.Vendor;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.VendorRepository;

public class VendorServiceImpl implements VendorService {
	
	@Autowired
	private VendorRepository vendorRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public VendorDto createVendor(VendorDto vendorDto) {
		Vendor vendor = modelMapper.map(vendorDto, Vendor.class);
		vendorRepo.save(vendor);
		return vendorDto;
	}

	@Override
	public List<VendorDto> getAllVendorsList() {
		List<VendorDto> allVendorsList = vendorRepo.findAll()
				.stream().map(vendor->modelMapper.map(vendor, VendorDto.class))
				.collect(Collectors.toList());
		return allVendorsList;
	}

	@Override
	public VendorDto getVendorById(Long vendorId) {
		Vendor vendor = vendorRepo.findById(vendorId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		return modelMapper.map(vendor, VendorDto.class);
	}

	@Override
	public VendorDto updateVendor(VendorDto detachedVendor) {
		Vendor vendor = modelMapper.map(detachedVendor, Vendor.class);
		return modelMapper.map(vendorRepo.save(vendor), VendorDto.class);
	}

	@Override
	public String deleteVendorById(Long vendorId) {
		Vendor vendor = vendorRepo.findById(vendorId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		vendorRepo.delete(vendor);
		return "Vendor " + vendor.getFirstName() + " " + vendor.getLastName() + " has been removed!";
	}

	@Override
	public String blockVendorById(Long vendorId) {
		Vendor vendor = vendorRepo.findById(vendorId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		vendor.setBlock(true);
		vendorRepo.save(vendor);
		return "Vendor " + vendor.getFirstName() + " " + vendor.getLastName() + " has been blocked!";
	}

	@Override
	public String approveVendorById(Long vendorId) {
		Vendor vendor = vendorRepo.findById(vendorId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		vendor.setApprove(true);
		vendorRepo.save(vendor);
		return "Vendor " + vendor.getFirstName() + " " + vendor.getLastName() + " is approved!";
	}

	@Override
	public List<VendorDto> getAllUnapprovedVendors() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VendorDto getUnapprovedVendorById(Long vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CustomerDto> getCustomersByVendorId(Long vendorId) {
		Vendor vendor  = vendorRepo.findById(vendorId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));		
//				.stream().map(customer->modelmapper.map(customer, CustomerDto.class))
//				.collect(Collectors.toList());
		return null;
	}

}
