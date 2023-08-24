package com.tiffin_wala.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tiffin_wala.entities.CustomerOrder;
import com.tiffin_wala.entities.Tiffin;

public interface TiffinRepository extends JpaRepository<Tiffin, Long>{
	
	Optional<List<Tiffin>> findAllByVendorId(Long vendorId);
	
	@Query("SELECT t FROM Tiffin t WHERE t.availableFrom <= CURRENT_DATE and t.availableTo >= CURRENT_DATE")
	Optional<List<Tiffin>> findAllAvailabletiffins();
	
	@Query("SELECT t FROM Tiffin t WHERE t.availableFrom > CURRENT_DATE or t.availableTo < CURRENT_DATE")
	Optional<List<Tiffin>> findAllUnavailabletiffins();

}
