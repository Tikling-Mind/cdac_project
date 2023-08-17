package com.tiffin_wala.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.entities.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long> {

}
