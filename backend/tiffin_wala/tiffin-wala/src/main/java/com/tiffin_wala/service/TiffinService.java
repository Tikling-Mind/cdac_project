package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.TiffinDto;

public interface TiffinService {

	TiffinDto createTiffin(TiffinDto tiffin);

	List<TiffinDto> getAllTiffins();

	TiffinDto getTiffinById(Long tiffinId);

	List<TiffinDto> getTiffinsByVendorId(Long vendorId);

	TiffinDto updateTiffinDetails(TiffinDto tiffinDto);

	String deleteTiffinById(Long tiffinId);

	TiffinDto blockTiffinById(Long tiffinId);

	List<TiffinDto> getAllAvailableTiffins();

	List<TiffinDto> getAllUnAvailableTiffins();



}
