package com.simranduggal.music_catlog_platform.controller;


import com.simranduggal.music_catlog_platform.service.ITunesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SearchController {

    private final ITunesService iTunesService;

    public SearchController(ITunesService iTunesService) {
        this.iTunesService = iTunesService;
    }

    @GetMapping("/search")
public ResponseEntity<String> search(
        @RequestParam String query,
        @RequestParam String type) {

    if (query == null || query.isBlank()) {
        return ResponseEntity.badRequest().body("Query cannot be empty.");
    }

    switch (type.toLowerCase()) {
        case "album":
        case "song":
        case "artist":
        case "movie":
            break;
        default:
            return ResponseEntity.badRequest().body("Invalid type. Allowed values: album, song, artist, movie.");
    }

    return ResponseEntity.ok(iTunesService.search(query, type));
}

}
