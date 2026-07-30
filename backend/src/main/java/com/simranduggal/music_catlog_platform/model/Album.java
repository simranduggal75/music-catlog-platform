package com.simranduggal.music_catlog_platform.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "library")
@Data
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Apple Catalog ID is required")
    private Long appleCatalogId;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Artist name is required")
    private String artistName;

    @NotBlank(message = "Genre is required")
    private String genre;

    @NotNull(message = "Release date is required")
    private LocalDate releaseDate;

    @NotNull(message = "Track count is required")
    @Min(value = 1, message = "Track count must be at least 1")
    private Integer trackCount;

    @NotBlank(message = "Artwork URL is required")
    private String artworkUrl;

    @NotNull(message = "User rating is required")
    @Min(value = 1, message = "Rating must be at least 1")
    @Max(value = 5, message = "Rating cannot be more than 5")
    private Integer userRating;

    private String userNotes;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime updatedAt = LocalDateTime.now();
}