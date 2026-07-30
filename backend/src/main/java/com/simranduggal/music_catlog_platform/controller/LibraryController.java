package com.simranduggal.music_catlog_platform.controller;

import com.simranduggal.music_catlog_platform.model.Album;
import com.simranduggal.music_catlog_platform.service.AlbumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/library")
@RequiredArgsConstructor
public class LibraryController {

    private final AlbumService albumService;

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    
    @PostMapping
    public ResponseEntity<Album> createAlbum(@Valid @RequestBody Album album) {
        return ResponseEntity.status(201).body(albumService.createAlbum(album));
    }

    @PutMapping("/{id}")
public ResponseEntity<Album> updateAlbum(
        @PathVariable Long id,
        @Valid @RequestBody Album album) {

    return ResponseEntity.ok(albumService.updateAlbum(id, album));
}
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAlbum(@PathVariable Long id) {
        albumService.deleteAlbum(id);
        return ResponseEntity.ok("Album deleted successfully.");
    }
}