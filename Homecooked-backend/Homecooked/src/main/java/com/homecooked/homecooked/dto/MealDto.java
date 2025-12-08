package com.homecooked.homecooked.dto;



import lombok.Data;

@Data
public class MealDto {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String cuisine;
    private String imageUrl;
}

