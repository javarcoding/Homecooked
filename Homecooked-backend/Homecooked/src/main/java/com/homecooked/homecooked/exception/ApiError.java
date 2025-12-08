package com.homecooked.homecooked.exception;

import lombok.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApiError {
    private String message;
    private String path;
    private int status;
    private String errorCode;      // NEW
    private String debugMessage;   // NEW (optional)
    private LocalDateTime timestamp;
}