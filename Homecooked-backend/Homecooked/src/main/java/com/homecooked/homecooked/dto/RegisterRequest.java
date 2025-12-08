package com.homecooked.homecooked.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private String address;
    private String phone;
}