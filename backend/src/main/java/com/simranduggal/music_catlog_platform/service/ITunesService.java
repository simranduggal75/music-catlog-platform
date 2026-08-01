package com.simranduggal.music_catlog_platform.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ITunesService {

    private final RestTemplate restTemplate;

    @Value("${itunes.api.base-url}")
    private String baseUrl;

   public String search(String query, String type) {

    UriComponentsBuilder builder = UriComponentsBuilder
            .fromUriString(baseUrl)
            .queryParam("term", query);

    switch (type.toLowerCase()) {
        case "song":
            builder.queryParam("entity", "song");
            break;

        case "album":
            builder.queryParam("entity", "album");
            break;

        case "movie":
           builder.queryParam("media", "movie");
           break;
        case "artist":
            // Don't add entity for artist search
            break;

        default:
            throw new IllegalArgumentException("Invalid search type");
    }

    String url = builder.toUriString();

    log.info("iTunes URL: {}", url);

    String response = restTemplate.getForObject(url, String.class);

    log.info("Response: {}", response);

    return response;
}
}