package com.tiffin_wala.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.entities.Tiffin;

public interface TiffinRepository extends JpaRepository<Tiffin, Long>{
	Optional<List<Tiffin>> findAllByVendorId(Long vendorId);

}
