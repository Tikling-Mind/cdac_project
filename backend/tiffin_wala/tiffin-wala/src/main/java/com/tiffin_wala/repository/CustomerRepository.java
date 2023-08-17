package com.tiffin_wala.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
