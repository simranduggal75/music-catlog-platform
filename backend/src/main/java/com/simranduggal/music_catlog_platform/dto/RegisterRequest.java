package com.simranduggal.music_catlog_platform.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    @NotBlank(message = "Username is required")
private String username;

@NotBlank(message = "Password is required")
@Size(min = 6, max = 50,
      message = "Password must be between 6 and 50 characters")
private String password;
}