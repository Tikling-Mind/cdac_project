package com.tiffin_wala.service;

import java.util.List;

import com.tiffin_wala.dto.TiffinDto;

public interface TiffinService {

	TiffinDto createTiffin(TiffinDto tiffin);

	List<TiffinDto> getAllTiffins();

	TiffinDto getTiffinById(int tiffinId);

	List<TiffinDto> getTiffinsByVendorId(int vendorId);

	TiffinDto updateTiffinDetails(int tiffinId);

	String deleteTiffinById(int tiffinId);

	TiffinDto blockTiffinById(int tiffinId);

	List<TiffinDto> getTiffinByType(int type);



}
