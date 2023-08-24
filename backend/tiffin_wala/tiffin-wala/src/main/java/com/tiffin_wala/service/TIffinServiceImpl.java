package com.tiffin_wala.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.tiffin_wala.dto.TiffinDto;
import com.tiffin_wala.entities.Tiffin;
import com.tiffin_wala.execptions.ResourceNotFoundException;
import com.tiffin_wala.repository.CustomerRepository;
import com.tiffin_wala.repository.TiffinRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TIffinServiceImpl implements TiffinService {

	@Autowired
	private TiffinRepository tiffinRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public TiffinDto createTiffin(TiffinDto tiffinDto) {
		Tiffin tiffin = tiffinRepo.save(modelMapper.map(tiffinDto, Tiffin.class));
		return modelMapper.map(tiffin, TiffinDto.class);
	}

	@Override
	public List<TiffinDto> getAllTiffins() {
		return tiffinRepo.findAll()
				.stream().map(tiffin->modelMapper.map(tiffin, TiffinDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public TiffinDto getTiffinById(Long tiffinId) {
		return modelMapper.map(tiffinRepo.findById(tiffinId), TiffinDto.class);
	}

	@Override
	public List<TiffinDto> getTiffinsByVendorId(Long vendorId) {
		List<Tiffin> tiffinList = tiffinRepo.findAllByVendorId(vendorId)
				.orElseThrow( () -> new ResourceNotFoundException("This vendor has no tiffins.") );

		return tiffinList.stream()
								.map(tiffin->modelMapper.map(tiffin, TiffinDto.class))
								.collect(Collectors.toList());
	}

	@Override
	public TiffinDto updateTiffinDetails(TiffinDto tiffinDto) {
		tiffinRepo.findById(tiffinDto.getId())
						.orElseThrow(()->new ResourceNotFoundException("Tiffin not found"));
		Tiffin tiffin = tiffinRepo.save(modelMapper.map(tiffinDto, Tiffin.class));
		return modelMapper.map(tiffin, TiffinDto.class);
	}

	@Override
	public String deleteTiffinById(Long tiffinId) {
		Tiffin tiffin = tiffinRepo.findById(tiffinId)
				.orElseThrow(()->new ResourceNotFoundException("Tiffin not found"));
		tiffinRepo.deleteById(tiffinId);
		return "Tiffin " + tiffin.getName() + " has been removed!";		
	}

	@Override
	public TiffinDto blockTiffinById(Long tiffinId) {
		Tiffin tiffin = tiffinRepo.findById(tiffinId)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Tiffin Id"));
		tiffin.setBreakLunchDinner(0);
		return modelMapper.map(tiffinRepo.save(tiffin), TiffinDto.class);
	}

	@Override
	public List<TiffinDto> getAllAvailableTiffins() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<TiffinDto> getAllUnAvailableTiffins() {
		// TODO Auto-generated method stub
		return null;
	}

}
