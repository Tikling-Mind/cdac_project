package com.tiffin_wala.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tiffin_wala.entities.Address;
import com.tiffin_wala.entities.Customer;
import com.tiffin_wala.entities.Tiffin;
import com.tiffin_wala.entities.Vendor;
import com.tiffin_wala.enums.AddressType;

public interface AddressRepository extends JpaRepository<Address, Long> {
	
	Optional<List<Address>> findAllByCustomerId(Long customerId);
	
	Optional<List<Address>> findAllByAddressType(AddressType addressType);

	Optional<List<Address>> findAllByVendorId(Long vendorId);

	Address findByAddressTypeAndVendor(AddressType home, Vendor vendor);
	
	Optional<List<Address>> findAllByPincode(Integer pincode);
	
	@Query("SELECT vendor FROM Address WHERE pincode=?1 ")
	Optional<List<Vendor>> findAllVendorsByPincode(Integer pincode);

	Optional<Address> findByCustomerIdAndAddressType(Long id, AddressType addressType);
	
	Optional<Address> findByVendorIdAndAddressType(Long id, AddressType addressType);
	
}
