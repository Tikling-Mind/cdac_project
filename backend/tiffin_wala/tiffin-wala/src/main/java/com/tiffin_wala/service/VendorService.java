package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.dto.VendorDto;

public interface VendorService {

	public VendorDto createVendor(VendorDto vendor);

	public List<VendorDto> getAllVendorsList();

	public VendorDto getVendorById(Long vendorId);

	public VendorDto updateVendor(VendorDto detachedVendor);

	public String deleteVendorById(Long vendorId);

	public String blockVendorById(Long vendorId);

	public String approveVendorById(Long vendorId);

	public List<VendorDto> getAllUnapprovedVendors();

	public VendorDto getUnapprovedVendorById(Long vendorId);
	
	public List<CustomerDto> getCustomersByVendorId(Long vendorId);


}
