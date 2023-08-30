package com.tiffin_wala.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.dto.VendorDto;
import com.tiffin_wala.entities.Address;
import com.tiffin_wala.entities.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long> {

	Optional<List<Vendor>> findByIsVerified(boolean b);

	Optional<Vendor> findByEmail(String email);

}
