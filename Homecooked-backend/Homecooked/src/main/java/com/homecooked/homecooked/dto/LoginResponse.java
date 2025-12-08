package com.homecooked.homecooked.dto;

import com.homecooked.homecooked.model.Role;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginResponse {

    private String token;
    private String email;
    private String name;
    private Role role;
}