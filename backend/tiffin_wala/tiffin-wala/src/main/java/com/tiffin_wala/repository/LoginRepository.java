package com.tiffin_wala.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiffin_wala.entities.Login;

public interface LoginRepository extends JpaRepository<Login,Long> {

	Optional<Login> findByEmail(String email);

}
