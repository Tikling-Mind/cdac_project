 package com.tiffin_wala.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.AddressDto;
import com.tiffin_wala.dto.CustomerDto;
import com.tiffin_wala.dto.CustomerOrderDto;
import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.entities.Address;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.entities.CustomerOrder;
import com.tiffin_wala.entities.Tiffin;
import com.tiffin_wala.entities.Vendor;
import com.tiffin_wala.enums.AddressType;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.AddressRepository;
import com.tiffin_wala.repository.CustomerOrderRepository;
import com.tiffin_wala.repository.CustomerRepository;
import com.tiffin_wala.repository.TiffinRepository;
import com.tiffin_wala.repository.VendorRepository;

@Transactional
@Service
public class VendorServiceImpl implements VendorService {
	
	@Autowired
	private VendorRepository vendorRepo;
	@Autowired
	private CustomerRepository customerRepo ;
	@Autowired
	private TiffinRepository tiffinRepo ;
	@Autowired
	private CustomerOrderRepository customerOrderRepo ;
	@Autowired
	private AddressRepository addressRepo;
	
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public VendorDto createVendor(VendorDto vendorDto) {
		// Get entities
		Vendor vendor = modelMapper.map(vendorDto, Vendor.class);
		Address address = modelMapper.map(vendorDto.getAddress(), Address.class) ;
		
		// Address provided during account creation is HOME address.
		address.setAddressType(AddressType.HOME);
		vendor = vendorRepo.save(vendor) ;
		address.setVendor(vendor);
		address = addressRepo.save(address) ;
		
		// Object to be returned
		AddressDto addressDto = modelMapper.map(address, AddressDto.class) ;
		VendorDto returnVendorDto = modelMapper.map(vendor, VendorDto.class) ;
		returnVendorDto.setAddress(addressDto);
		return returnVendorDto;
		
	}

	@Override
	public List<VendorDto> getAllVendorsList() {
		
	
		List<VendorDto> allVendorsList = new ArrayList<VendorDto>() ;
		
		addressRepo.findAllByAddressTypeAndCustomer(AddressType.HOME, null)
				.orElseThrow(()->new ResourceNotFoundException("Error occured while fecthing addresses!"))
				.forEach(address -> { //Get Vendor corresponding to an address
									// Create addresss Dto and put it in the list
					VendorDto vendorDto = modelMapper.map(address.getVendor(), VendorDto.class) ;
					vendorDto.setAddress(modelMapper.map(address, AddressDto.class)) ;
					allVendorsList.add(vendorDto);
				});
		
		
		/*
		 * List<VendorDto> allVendorsList = vendorRepo.findAll().stream() .map(vendor ->
		 * { VendorDto vendorDto = modelMapper.map(vendor, VendorDto.class); Address
		 * homeAddress = homeAddressList.stream()
		 * .filter(address->address.getVendor()==vendor)
		 * .collect(Collectors.toList()).get(0);
		 * 
		 * vendorDto.setAddress(modelMapper.map(homeAddress, AddressDto.class)); return
		 * vendorDto; }) .collect(Collectors.toList());
		 * 
		 * if (allVendorsList.isEmpty()) throw new
		 * ResourceNotFoundException("No Vendors exists") ;
		 */	
		
		if (allVendorsList.isEmpty())
				throw new ResourceNotFoundException("No vendors exists" ) ;
		return allVendorsList;
	}

	@Override
	public List<VendorDto> getAllApprovedVendors() {
		
		List<VendorDto> allApprovedVendorsList = new ArrayList<VendorDto>() ;
		
		addressRepo.findAllByAddressTypeAndCustomer(AddressType.HOME,null)
				.orElseThrow(()->new ResourceNotFoundException("Error occured while fecthing addresses!"))
				.forEach(address -> { //Get Vendor corresponding to an address
									// Create addresss Dto and put it in the list
					if(address.getVendor().isVerified()) {
						VendorDto vendorDto = modelMapper.map(address.getVendor(), VendorDto.class) ;
						vendorDto.setAddress(modelMapper.map(address, AddressDto.class)) ;
						allApprovedVendorsList.add(vendorDto);					
					}
				});
		
		if (allApprovedVendorsList.isEmpty())
			throw new ResourceNotFoundException("No vendors exists" ) ;
		
		return allApprovedVendorsList ;
		
		/*
		 * //fetching all HOME addresses to find home address of each vendor
		 * List<Address> homeAddressList =
		 * addressRepo.findAllByAddressType(AddressType.HOME) .orElseThrow(()->new
		 * ResourceNotFoundException("Error occured while fecthing addresses!"));
		 * List<Vendor> approvedVendors = vendorRepo.findByIsVerified(true)
		 * .orElseThrow(() -> new
		 * ResourceNotFoundException("No Approved Vendors Exist!")); return
		 * approvedVendors.stream() .map(vendor->{ VendorDto vendorDto =
		 * modelMapper.map(vendor, VendorDto.class); Address homeAddress =
		 * homeAddressList.stream() .filter(address->address.getVendor()==vendor)
		 * .collect(Collectors.toList()).get(0);
		 * vendorDto.setAddress(modelMapper.map(homeAddress, AddressDto.class)); return
		 * vendorDto; }) .collect(Collectors.toList()) ;
		 */	}

	@Override
	public List<VendorDto> getAllUnapprovedVendors() {
		System.out.println("Findin upapproved vendors");
		List<VendorDto> allUnApprovedVendorsList = new ArrayList<VendorDto>() ;
		
		addressRepo.findAllByAddressTypeAndCustomer(AddressType.HOME,null)
				.orElseThrow(()->new ResourceNotFoundException("Error occured while fecthing addresses!"))
				.forEach(address -> { //Get Vendor corresponding to an address
									// Create addresss Dto and put it in the list
					System.out.println(address.getCity());
					if(!address.getVendor().isVerified()) {
						VendorDto vendorDto = modelMapper.map(address.getVendor(), VendorDto.class) ;
						vendorDto.setAddress(modelMapper.map(address, AddressDto.class)) ;
						allUnApprovedVendorsList.add(vendorDto);					
					}
				});
		System.out.println(allUnApprovedVendorsList.get(0).getFirstName() );
		System.out.println(allUnApprovedVendorsList.size());
		
		if (allUnApprovedVendorsList.isEmpty())
			throw new ResourceNotFoundException("No vendors exists" ) ;
		
		return allUnApprovedVendorsList ;
		/*
		 * //fetching all HOME addresses to find home address of each vendor
		 * List<Address> homeAddressList =
		 * addressRepo.findAllByAddressType(AddressType.HOME) .orElseThrow(()->new
		 * ResourceNotFoundException("Error occured while fecthing addresses!")); //
		 * Query : SELECT * FROM vendors WHERE is_verified="false" ; List<Vendor>
		 * vendorList = vendorRepo.findByIsVerified(false) .orElseThrow(() -> new
		 * ResourceNotFoundException("No UnApproved Vendors!")) ; return
		 * vendorList.stream() .map(vendor->{ VendorDto vendorDto =
		 * modelMapper.map(vendor, VendorDto.class); Address homeAddress =
		 * homeAddressList.stream() .filter(address->address.getVendor()==vendor)
		 * .collect(Collectors.toList()).get(0);
		 * vendorDto.setAddress(modelMapper.map(homeAddress, AddressDto.class)); return
		 * vendorDto; }) .collect(Collectors.toList()) ;
		 */
		
	}

	
	@Override
	public VendorDto getVendorById(Long vendorId) {
		// Find Vendor
		Vendor vendor = vendorRepo.findById(vendorId)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		
		// Find Home type address for the vendor
		Address address = addressRepo.findByAddressTypeAndVendor(AddressType.HOME,vendor) ;

		
		VendorDto vendorDto =  modelMapper.map(vendor, VendorDto.class);
		vendorDto.setAddress(modelMapper.map(address, AddressDto.class));
		return vendorDto;
	}

	@Override
	public VendorDto getVendorByEmail(String email) {
		// Find Vendor
		Vendor vendor = vendorRepo.findByEmail(email)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		
		System.out.println("In VendorService "+ vendor.getFirstName());
		// Find Home type address for the vendor
		Address address = addressRepo.findByAddressTypeAndVendor(AddressType.HOME,vendor) ;
		System.out.println("Got Address "+ address.getCity());
		
		VendorDto vendorDto =  modelMapper.map(vendor, VendorDto.class);
		vendorDto.setAddress(modelMapper.map(address, AddressDto.class));
		System.out.println("VendorDto ready "+ vendorDto.getFirstName() + " "+ vendorDto.getAddress().getCity());
		return vendorDto;
	}
	
	@Override
	public VendorDto updateVendor(VendorDto detachedVendor) {
		Vendor vendor = modelMapper.map(detachedVendor, Vendor.class);
		return modelMapper.map(vendorRepo.save(vendor), VendorDto.class);
	}

	@Override
	public String deleteVendorById(Long vendorId) {
		// Get all addresses corresponding to the vendor
		List<Address> vendorAddressList = addressRepo.findAllByVendorId(vendorId)
				.orElseThrow(()->new ResourceNotFoundException("Error occursed while fecthing vendor's addresses"));
		
		// Delete all Addresses 
		for (Address address : vendorAddressList) {
			addressRepo.delete(address);
		}
		
		// Delete Vendor
		Vendor vendor = vendorRepo.findById(vendorId)
						.orElseThrow(()-> new ResourceNotFoundException("Invalid vendor ID"));
		
		vendorRepo.delete(vendor);
		
		return "Vendor " + vendor.getFirstName() + " " + vendor.getLastName() + " has been removed!";
	}


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
		
		List<Tiffin> tiffinList = tiffinRepo.findAllByVendorId(vendor.getId())
				.orElseThrow( () -> new ResourceNotFoundException("This vendor has no tiffins.") );

		List<CustomerOrder> customerOrderListForVendor = new ArrayList<>() ;
		//List<Customer> customerListForVendor = new ArrayList<>() ;
		List<Customer> customerListForVendor  = new ArrayList<>() ; 
		
		tiffinList.forEach(tiffin-> {
				customerOrderListForVendor.addAll(customerOrderRepo.findByTiffinId(tiffin.getId()));
				});
				
		customerOrderListForVendor.forEach(customerOrder-> {
				customerListForVendor.add(customerOrder.getCustomer());
			});
		
		List<CustomerDto> distinctCustomers = customerListForVendor.stream()
                				.distinct()
                				.map((customer)->{
                					CustomerDto customerDto = modelMapper.map(customer, CustomerDto.class);
        							Address homeAddress = addressRepo.findByCustomerIdAndAddressType(customerDto.getId(), AddressType.HOME)
                							.orElseThrow(()->new ResourceNotFoundException("Error occured while fecting customer's HOME address"));
        							AddressDto homeAddressDto = modelMapper.map(homeAddress, AddressDto.class);
                					customerDto.setAddress(homeAddressDto);
        							System.out.println(homeAddress+"\n"+homeAddressDto);
                					return customerDto;
                				})
                				.collect(Collectors.toList());
		
		return distinctCustomers;
		
//		return distinctCustomers.stream()
//				   .map( customer -> modelMapper.map(customer, CustomerDto.class))
//				   .collect(Collectors.toList());
		
		
	}
	
	public List<VendorDto> findAllVendorsByPincode(Integer pincode){
		List<Vendor> list = addressRepo.findAllVendorsByPincode(pincode)
				.orElseThrow(()->new ResourceNotFoundException("Error occured while fetching vendors"));
				
		return list.stream()
				.map((vendor)->{
					VendorDto vendorDto = modelMapper.map(vendor, VendorDto.class);
					
					Address homeAddress = addressRepo.findByVendorIdAndAddressType(vendorDto.getId(), AddressType.HOME)
							.orElseThrow(()->new ResourceNotFoundException("Error occured while fecting vendor's HOME address"));
					
					vendorDto.setAddress(modelMapper.map(homeAddress, AddressDto.class));
					return vendorDto;
				})
				.collect(Collectors.toList());
	}
	
}


