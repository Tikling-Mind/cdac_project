package com.tiffin_wala.dto;

import com.tiffin_wala.enums.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AuthRespDto {
	private Long id ;
	private String email ;
	private String role ;
	private String name ;
	private String message ;
	private String jwt ;
}
