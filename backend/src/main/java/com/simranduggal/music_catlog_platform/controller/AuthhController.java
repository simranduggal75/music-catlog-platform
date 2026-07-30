package com.simranduggal.music_catlog_platform.controller;

import com.simranduggal.music_catlog_platform.dto.AuthResponse;
import com.simranduggal.music_catlog_platform.dto.LoginRequest;
import com.simranduggal.music_catlog_platform.dto.RegisterRequest;
import com.simranduggal.music_catlog_platform.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthhController {

    private final AuthService authService;

    @PostMapping("/register")
@ResponseStatus(HttpStatus.CREATED)
public AuthResponse register(
        @Valid @RequestBody RegisterRequest request) {

    return authService.register(request);
}

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }
}