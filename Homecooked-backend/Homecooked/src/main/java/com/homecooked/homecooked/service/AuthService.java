package com.homecooked.homecooked.service;

import com.homecooked.homecooked.dto.RegisterRequest;
import com.homecooked.homecooked.exception.CustomException;
import com.homecooked.homecooked.model.User;

public interface AuthService {
    User register(RegisterRequest request) throws CustomException;
    User authenticate(String email, String rawPassword);

}
