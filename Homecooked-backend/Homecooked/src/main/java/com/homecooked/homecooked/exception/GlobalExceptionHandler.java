package com.homecooked.homecooked.exception;

import org.slf4j.Logger;
import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

	private static final Logger log = org.slf4j.LoggerFactory.getLogger(GlobalExceptionHandler.class);

    private ApiError buildError(String message, String path, HttpStatus status) {
        return ApiError.builder()
                .message(message)
                .path(path.replace("uri=", ""))
                .status(status.value())
                .timestamp(LocalDateTime.now())
                .build();
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiError> handleNotFound(ResourceNotFoundException ex, WebRequest req) {

        log.error("ResourceNotFoundException: {}", ex.getMessage());

        ApiError apiError = ApiError.builder()
                .message(ex.getMessage())
                .path(req.getDescription(false))
                .status(HttpStatus.NOT_FOUND.value())
                .errorCode("NOT_FOUND")
                .debugMessage(ex.toString())
                .timestamp(LocalDateTime.now())
                .build();

        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ApiError> handleBadRequest(BadRequestException ex, WebRequest request) {
        ApiError apiError = buildError(ex.getMessage(), request.getDescription(false), HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleGeneralError(Exception ex, WebRequest request) {
        ApiError apiError = buildError(ex.getMessage(), request.getDescription(false), HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiError> handleValidation(MethodArgumentNotValidException ex, WebRequest request) {
        String errorMessage = ex.getBindingResult().getFieldErrors()
                .stream()
                .map(err -> err.getField() + ": " + err.getDefaultMessage())
                .findFirst()
                .orElse("Validation error");

        ApiError apiError = buildError(errorMessage, request.getDescription(false), HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

}