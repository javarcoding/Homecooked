package com.homecooked.homecooked.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.homecooked.homecooked.dto.LoginRequest;
import com.homecooked.homecooked.dto.LoginResponse;
import com.homecooked.homecooked.dto.RegisterRequest;
import com.homecooked.homecooked.model.User;
import com.homecooked.homecooked.security.JwtUtil;
import com.homecooked.homecooked.service.AuthService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {

        User savedUser = authService.register(request);

        return ResponseEntity.ok(
                "User registered successfully: " + savedUser.getEmail()
        );
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        User user = authService.authenticate(request.getEmail(), request.getPassword());

        // Use the injected jwtUtil instance, not the class
        String token = jwtUtil.generateToken(user);

        LoginResponse response = LoginResponse.builder()
                .token(token)
                .email(user.getEmail())
                .name(user.getFullName())  // make sure getFullName() exists
                .role(user.getRole())
                .build();

        return ResponseEntity.ok(response);
    }


}