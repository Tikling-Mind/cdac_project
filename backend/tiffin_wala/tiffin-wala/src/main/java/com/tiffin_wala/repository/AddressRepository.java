package com.tiffin_wala.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

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


}
