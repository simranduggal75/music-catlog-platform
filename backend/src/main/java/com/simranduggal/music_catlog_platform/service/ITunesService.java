package com.simranduggal.music_catlog_platform.service;

import com.simranduggal.music_catlog_platform.dto.ITunesSearchResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ITunesService {

    private static final Logger logger = LoggerFactory.getLogger(ITunesService.class);

    private final RestTemplate restTemplate = new RestTemplate();

    public ITunesSearchResponse search(String query, String type) {

        logger.info("Searching iTunes | Query: {} | Type: {}", query, type);

        String entity = switch (type.toLowerCase()) {
            case "album" -> "album";
            case "song" -> "song";
            case "artist" -> "musicArtist";
            default -> "album";
        };

        String url = UriComponentsBuilder
                .fromUriString("https://itunes.apple.com/search")
                .queryParam("term", query)
                .queryParam("entity", entity)
                .queryParam("limit", 25)
                .toUriString();

        ITunesSearchResponse response =
                restTemplate.getForObject(url, ITunesSearchResponse.class);

        logger.info("Found {} result(s)", response != null ? response.getResultCount() : 0);

        return response;
    }
}