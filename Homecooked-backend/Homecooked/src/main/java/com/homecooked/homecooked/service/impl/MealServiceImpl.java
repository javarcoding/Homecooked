package com.homecooked.homecooked.service.impl;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.homecooked.homecooked.entity.Meal;
import com.homecooked.homecooked.repository.MealRepository;
import com.homecooked.homecooked.service.MealService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MealServiceImpl implements MealService {

    private final MealRepository mealRepository;

    @Override
    public List<Meal> getFeaturedMeals() {
        // For now: All available meals are treated as featured
        return mealRepository.findByAvailableTrue();
    }
}

