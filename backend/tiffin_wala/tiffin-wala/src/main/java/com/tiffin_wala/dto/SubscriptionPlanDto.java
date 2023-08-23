package com.tiffin_wala.dto;

import java.time.LocalDateTime;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionPlanDto {
	
	@NotEmpty
	@Size(min=5 , message = "Name should have atleast 5 charachter")
	private String name;
	
	@NotEmpty
	@Size(min=5 , message = "Description should have atleast 5 charachter")
	private String description;
	
	@NotEmpty
	private LocalDateTime startDate;
	
	@NotEmpty
	private LocalDateTime endDate;
	
	private boolean isAvaliable;
	
}
