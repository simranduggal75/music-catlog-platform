package com.simranduggal.music_catlog_platform.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ITunesSearchResponse {

    private int resultCount;
    private List<ITunesResult> results;

    public ITunesSearchResponse() {
    }

    public int getResultCount() {
        return resultCount;
    }

    public void setResultCount(int resultCount) {
        this.resultCount = resultCount;
    }

    public List<ITunesResult> getResults() {
        return results;
    }

    public void setResults(List<ITunesResult> results) {
        this.results = results;
    }
}