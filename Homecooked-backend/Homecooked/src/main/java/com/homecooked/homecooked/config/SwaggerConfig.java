package com.homecooked.homecooked.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Homecooked - Smart Tiffin API",
                version = "1.0",
                description = "Backend API Documentation for Homecooked Tiffin Service Platform"
        )
)
public class SwaggerConfig {

}
