package com.tiffin_wala.execptions;

public class ResourceNotFoundException extends RuntimeException {
	public ResourceNotFoundException(String message) {
		super(message) ;
	}
}
