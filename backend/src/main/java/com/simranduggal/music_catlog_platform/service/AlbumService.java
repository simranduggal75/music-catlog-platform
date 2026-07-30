package com.simranduggal.music_catlog_platform.service;

import com.simranduggal.music_catlog_platform.model.Album;
import com.simranduggal.music_catlog_platform.repository.AlbumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AlbumService {

    private final AlbumRepository albumRepository;

    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    public Album createAlbum(Album album) {
        return albumRepository.save(album);
    }

    public Album updateAlbum(Long id, Album updatedAlbum) {
        Album album = albumRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Album not found"));

        album.setAppleCatalogId(updatedAlbum.getAppleCatalogId());
        album.setTitle(updatedAlbum.getTitle());
        album.setArtistName(updatedAlbum.getArtistName());
        album.setGenre(updatedAlbum.getGenre());
        album.setReleaseDate(updatedAlbum.getReleaseDate());
        album.setTrackCount(updatedAlbum.getTrackCount());
        album.setArtworkUrl(updatedAlbum.getArtworkUrl());
        album.setUserRating(updatedAlbum.getUserRating());
        album.setUserNotes(updatedAlbum.getUserNotes());
        album.setUpdatedAt(LocalDateTime.now());

        return albumRepository.save(album);
    }

    public void deleteAlbum(Long id) {
    Album album = albumRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Album not found"));

    albumRepository.delete(album);
}
    }
