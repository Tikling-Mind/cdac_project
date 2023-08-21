package com.tiffin_wala.dto;

import java.time.LocalDateTime;
import javax.validation.constraints.NotEmpty;
import com.tiffin_wala.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
	
	private long id;
	
	@NotEmpty
	private LocalDateTime dateTime;
	
	@NotEmpty
	private int quantity;
	
	@NotEmpty
	private OrderStatus orderStatus;
	

}
