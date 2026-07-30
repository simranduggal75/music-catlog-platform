package com.simranduggal.music_catlog_platform.service;

import com.simranduggal.music_catlog_platform.dto.AuthResponse;
import com.simranduggal.music_catlog_platform.dto.LoginRequest;
import com.simranduggal.music_catlog_platform.dto.RegisterRequest;
import com.simranduggal.music_catlog_platform.entity.User;
import com.simranduggal.music_catlog_platform.exception.UserAlreadyExistsException;
import com.simranduggal.music_catlog_platform.repository.UserRepository;
import com.simranduggal.music_catlog_platform.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new UserAlreadyExistsException("Username already exists");
        }

        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        String token = jwtService.generateToken(user.getUsername());

        return new AuthResponse(
        user.getUsername(),
        token
);
    }

    public AuthResponse login(LoginRequest request) {

        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );

        } catch (BadCredentialsException ex) {
            throw new BadCredentialsException("Invalid username or password");
        }

        String token = jwtService.generateToken(request.getUsername());

        return new AuthResponse(
        request.getUsername(),
        token
);
    }
}