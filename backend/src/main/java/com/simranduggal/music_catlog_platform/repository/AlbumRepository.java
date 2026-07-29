package com.simranduggal.music_catlog_platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simranduggal.music_catlog_platform.model.Album;

public interface AlbumRepository extends JpaRepository<Album, Long> {}
