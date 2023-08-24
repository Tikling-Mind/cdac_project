package com.tiffin_wala.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import com.tiffin_wala.entities.CustomerOrder;
import com.tiffin_wala.entities.Tiffin;


public interface TiffinRepository extends JpaRepository<Tiffin, Long> {

	Optional<List<Tiffin>> findByVendorId(Long vendorId);
=======
import com.tiffin_wala.entities.Tiffin;

public interface TiffinRepository extends JpaRepository<Tiffin, Long>{
	Optional<List<Tiffin>> findAllByVendorId(Long vendorId);
>>>>>>> dc8d2d462ab9c6c2072718f636a9042b7e7b190a

}
