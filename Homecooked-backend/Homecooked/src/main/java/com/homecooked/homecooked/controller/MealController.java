package com.homecooked.homecooked.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.homecooked.homecooked.entity.Meal;
import com.homecooked.homecooked.service.MealService;

import java.util.List;

@RestController
@RequestMapping("/menus")
@RequiredArgsConstructor
public class MealController {

    private final MealService mealService;

    @GetMapping("/featured")
    public List<Meal> getFeaturedMeals() {
        return mealService.getFeaturedMeals();
    }
}

