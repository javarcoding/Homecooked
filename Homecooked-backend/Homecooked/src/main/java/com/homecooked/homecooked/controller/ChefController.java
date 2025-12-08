package com.homecooked.homecooked.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.homecooked.homecooked.model.User;
import com.homecooked.homecooked.service.ChefService;

import java.util.List;

@RestController
@RequestMapping("/chefs")
@RequiredArgsConstructor
public class ChefController {

    private final ChefService chefService;

    @GetMapping
    public List<User> getAllChefs() {
        return chefService.getAllChefs();
    }
}

