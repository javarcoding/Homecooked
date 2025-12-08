package com.homecooked.homecooked.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homecooked.homecooked.entity.Meal;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {

    List<Meal> findByAvailableTrue();

    List<Meal> findByChefId(Long chefId);

    List<Meal> findByCuisine(String cuisine);

}
