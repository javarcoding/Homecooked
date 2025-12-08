package com.homecooked.homecooked.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import com.homecooked.homecooked.model.Role;
import com.homecooked.homecooked.model.User;
import com.homecooked.homecooked.repository.UserRepository;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;

    @Override
    public void run(String... args) {
        if (!userRepository.existsByEmail("admin@homecooked.com")) {
            userRepository.save(
                User.builder()
                        .fullName("Super Admin")
                        .email("admin@homecooked.com")
                        .password("admin123")
                        .role(Role.ADMIN)
                        .build()
            );
        }
    }
}