package com.simranduggal.music_catlog_platform.controller;

import com.simranduggal.music_catlog_platform.dto.ITunesSearchResponse;
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
    public ResponseEntity<ITunesSearchResponse> search(
            @RequestParam String query,
            @RequestParam(defaultValue = "album") String type
    ) {

        return ResponseEntity.ok(
                iTunesService.search(query, type)
        );
    }
}