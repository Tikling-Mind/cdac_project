package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.VendorDto;

public interface VendorService {

	public VendorDto createVendor(VendorDto vendor);

	public List<VendorDto> getAllVendorsList();

	public VendorDto getVendorById(int vendorId);

	public VendorDto updateVendorById(int vendorId);

	public String deleteVendorById(int vendorId);

	public String blockVendorById(int vendorId);

	public String approveVendorById(int vendorId);

	public List<VendorDto> getAllUnapprovedVendors();

	public VendorDto getUnapprovedVendorById(int vendorId);

	public VendorDto changeAvailability(VendorDto vendor);

	public VendorDto changeBlockingStatus(VendorDto vendor);

}
