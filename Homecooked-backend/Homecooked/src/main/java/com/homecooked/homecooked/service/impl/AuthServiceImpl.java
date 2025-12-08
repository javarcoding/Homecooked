package com.homecooked.homecooked.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.homecooked.homecooked.dto.RegisterRequest;
import com.homecooked.homecooked.exception.CustomException;
import com.homecooked.homecooked.model.Role;
import com.homecooked.homecooked.model.User;
import com.homecooked.homecooked.repository.UserRepository;
import com.homecooked.homecooked.service.AuthService;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private static final org.slf4j.Logger log = 
    	    org.slf4j.LoggerFactory.getLogger(AuthServiceImpl.class);

    @Override
    public User register(RegisterRequest req) throws CustomException {
    	
    	log.info("Registering new user: {}", req.getEmail());

    	
        // Email Exists?
        if (userRepository.existsByEmail(req.getEmail())) {
            throw new CustomException("Email already registered.");
        }

        // Create new User
        User user = User.builder()
                .fullName(req.getName())
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getPassword()))
                .address(req.getAddress())
                .phone(req.getPhone())
                .role(Role.CUSTOMER)
                .build();


        return userRepository.save(user);
    }
    
    @Override
    public User authenticate(String email, String rawPassword) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException("Invalid email or password"));

        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            throw new CustomException("Invalid email or password");
        }

        return user;
    }

}