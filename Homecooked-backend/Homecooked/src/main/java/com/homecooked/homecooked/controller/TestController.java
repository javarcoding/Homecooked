package com.homecooked.homecooked.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.homecooked.homecooked.exception.BadRequestException;

@RestController
@RequestMapping("/api/test")
public class TestController {

//    @GetMapping("/api/test")
//    public String testApi() {
//        return "Homecooked Backend is Running ✔️";
//    }
    
	private static final Logger log = LoggerFactory.getLogger(TestController.class);

    @GetMapping("/ping")
    public String ping() {
        log.info("Ping endpoint called");
        return "pong";
    }

    @GetMapping("/error")
    public String error() {
        log.error("Simulating system error");
        throw new RuntimeException("Simulated Error");
    }
    

}
