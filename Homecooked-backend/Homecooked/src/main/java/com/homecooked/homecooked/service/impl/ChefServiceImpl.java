package com.homecooked.homecooked.service.impl;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.homecooked.homecooked.model.Role;
import com.homecooked.homecooked.model.User;
import com.homecooked.homecooked.repository.UserRepository;
import com.homecooked.homecooked.service.ChefService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChefServiceImpl implements ChefService {

    private final UserRepository userRepository;

    @Override
    public List<User> getAllChefs() {
        return userRepository.findByRole(Role.CHEF);
    }
}

