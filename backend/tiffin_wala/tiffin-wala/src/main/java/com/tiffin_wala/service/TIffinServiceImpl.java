package com.tiffin_wala.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiffin_wala.dto.TiffinDto;

@Transactional
@Service
public class TIffinServiceImpl implements TiffinService {

	@Override
	public TiffinDto createTiffin(TiffinDto tiffin) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<TiffinDto> getAllTiffins() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TiffinDto getTiffinById(int tiffinId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<TiffinDto> getTiffinsByVendorId(int vendorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TiffinDto updateTiffinDetails(int tiffinId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteTiffinById(int tiffinId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TiffinDto blockTiffinById(int tiffinId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<TiffinDto> getTiffinByType(int type) {
		// TODO Auto-generated method stub
		return null;
	}

}
