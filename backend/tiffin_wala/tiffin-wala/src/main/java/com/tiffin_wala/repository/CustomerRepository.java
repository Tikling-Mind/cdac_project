package com.tiffin_wala.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.entities.Address;
import com.tiffin_wala.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

	Optional<Customer> findByEmail(String email);

}
