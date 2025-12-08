package com.homecooked.homecooked.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.homecooked.homecooked.model.Role;
import com.homecooked.homecooked.model.User;
import com.homecooked.homecooked.security.JwtUtil;

@RestController
@RequestMapping("/jwt-test")
@RequiredArgsConstructor
public class TestJwtController {

    private final JwtUtil jwtUtil;

    @GetMapping("/generate")
    public String generateToken() {
        User u = User.builder()
                .id(1L)
                .email("test@demo.com")
                .role(Role.CUSTOMER)
                .build();

        return jwtUtil.generateToken(u);
    }
}