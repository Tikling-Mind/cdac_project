 package com.tiffin_wala.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.entities.Vendor;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.CustomerRepository;
import com.tiffin_wala.repository.VendorRepository;

@Transactional
@Service
public class VendorServiceImpl implements VendorService {
	
	@Autowired
	private VendorRepository vendorRepo;
	@Autowired
	private CustomerRepository customerRepo ;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public VendorDto createVendor(VendorDto vendorDto) {
		Vendor vendor = modelMapper.map(vendorDto, Vendor.class);
		return modelMapper.map(vendorRepo.save(vendor), VendorDto.class);
	}

	@Override
	public List<VendorDto> getAllVendorsList() {
		List<VendorDto> allVendorsList = vendorRepo.findAll()
										.stream()
										.map(vendor->modelMapper.map(vendor, VendorDto.class))
										.collect(Collectors.toList());
		
		if (allVendorsList.isEmpty())
			throw new ResourceNotFoundException("No Vendors exists") ;
		
		return allVendorsList;
	}

	@Override
	public List<VendorDto> getAllApprovedVendors() {
		List<Vendor> approvedVendors = vendorRepo.findByIsVerified(true)
										.orElseThrow(() -> new ResourceNotFoundException("No Approved Vendors Exist!"));
		return approvedVendors.stream()
				.map(vendor-> modelMapper.map(vendor, VendorDto.class))
				.collect(Collectors.toList()) ;
	}

	@Override
	public List<VendorDto> getAllUnapprovedVendors() {
		// Query : SELECT * FROM vendors WHERE is_verified="false" ;
		List<Vendor> vendorList = vendorRepo.findByIsVerified(false)
							.orElseThrow(() ->  new ResourceNotFoundException("No UnApproved Vendors!")) ;
		return vendorList.stream()
				.map(vendor-> modelMapper.map(vendor, VendorDto.class))
				.collect(Collectors.toList()) ;
		
	}

	
	@Override
	public VendorDto getVendorById(Long vendorId) {
		
		Vendor vendor = vendorRepo.findById(vendorId)
						.orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		
		return modelMapper.map(vendor, VendorDto.class);
	}

	/*
	 * @Override public VendorDto getUnapprovedVendorById(Long vendorId) { Vendor
	 * vendor = vendorRepo.findById(vendorId) .orElseThrow(()->new
	 * ResourceNotFoundException("Incorrect Vendor Id!"));
	 * 
	 * VendorDto vendorDto ; if(vendor.isVerified()) throw new
	 * ResourceNotFoundException("Incorrect vendor id") ; else{ vendorDto =
	 * modelMapper.map(vendor, VendorDto.class) ; } return vendorDto; }
	 */
	
	@Override
	public VendorDto updateVendor(VendorDto detachedVendor) {
		Vendor vendor = modelMapper.map(detachedVendor, Vendor.class);
		return modelMapper.map(vendorRepo.save(vendor), VendorDto.class);
	}

	@Override
	public String deleteVendorById(Long vendorId) {
		Vendor vendor = vendorRepo.findById(vendorId)
						.orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		
		vendorRepo.delete(vendor);
		
		return "Vendor " + vendor.getFirstName() + " " + vendor.getLastName() + " has been removed!";
	}

	/*
	 * @Override public String blockVendorById(Long vendorId) { Vendor vendor =
	 * vendorRepo.findById(vendorId). orElseThrow(()-> new
	 * ResourceNotFoundException("Invalid vendor ID")); vendor.setBlock(true);
	 * vendorRepo.save(vendor); return "Vendor " + vendor.getFirstName() + " " +
	 * vendor.getLastName() + " has been blocked!"; }
	 */

	@Override
	public String approveVendorById(Long vendorId) {
		Vendor vendor = vendorRepo.findById(vendorId)
						.orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		vendor.setVerified(true) ;
		vendorRepo.save(vendor);
		return "Vendor " + vendor.getFirstName() + " " + vendor.getLastName() + " has been approved!";
	}


	@Override
	public String changeAvailability(VendorDto vendorDto) {
		Vendor vendor = vendorRepo.findById(vendorDto.getId())
					.orElseThrow(() ->  new ResourceNotFoundException("No UnApproved Vendors!")) ;
		vendor.setAvailable(vendorDto.isAvailable());
		String status = vendorDto.isAvailable()?"Available":"UnAvailable" ;
		return "Vendor " + vendor.getFirstName() + " "+ vendor.getLastName()+ " is been " + status ;
	}

	@Override
	public String changeBlockingStatus(VendorDto vendorDto) {
		Vendor vendor = vendorRepo.findById(vendorDto.getId())
					.orElseThrow(() ->  new ResourceNotFoundException("No UnApproved Vendors!"));
		vendor.setBlocked(vendorDto.isBlocked());
		String status = vendorDto.isBlocked()?"Blocked":"Unblocked" ;
		return "Vendor " + vendor.getFirstName() + " "+ vendor.getLastName()+ " has been " + status ;
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


