package com.tiffin_wala.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
	private String message;
	private LocalDateTime timeStamp;
	
	public ApiResponse(String mesg) {
		this.message=mesg;
		this.timeStamp=LocalDateTime.now();
	}
}