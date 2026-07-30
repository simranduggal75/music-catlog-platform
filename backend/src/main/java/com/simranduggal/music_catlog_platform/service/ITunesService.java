package com.simranduggal.music_catlog_platform.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
@Slf4j
public class ITunesService {

    private final RestTemplate restTemplate;

    @Value("${itunes.api.base-url}")
    private String baseUrl;

    public String search(String query, String type) {

        String url = UriComponentsBuilder.fromUriString(baseUrl)
                .queryParam("term", query)
                .queryParam("entity", type)
                .toUriString();

        log.info("Searching iTunes | Query: {} | Type: {}", query, type);

        return restTemplate.getForObject(url, String.class);
    }
}