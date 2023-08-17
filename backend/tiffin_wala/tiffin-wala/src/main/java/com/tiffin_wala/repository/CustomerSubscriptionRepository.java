package com.tiffin_wala.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.entities.CustomerSubscription;

public interface CustomerSubscriptionRepository extends JpaRepository<CustomerSubscription, Long> {

}
