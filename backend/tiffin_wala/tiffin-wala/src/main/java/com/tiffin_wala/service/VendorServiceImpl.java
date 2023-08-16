package com.tiffin_wala.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.repository.VendorRepository;

public class VendorServiceImpl implements VendorService {
	
	@Autowired
	private VendorRepository vendorRepo;

	@Override
	public VendorDto createVendor(VendorDto vendor) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<VendorDto> getAllVendorsList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VendorDto getVendorById(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VendorDto updateVendorById(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteVendorById(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String blockVendorById(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String approveVendorById(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<VendorDto> getAllUnapprovedVendors() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VendorDto getUnapprovedVendorById(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

}
