package com.homecooked.homecooked.controller;



import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @GetMapping("/profile")
    public String getCustomerProfile() {
        return "✅ Customer Profile - Access Granted";
    }
}
