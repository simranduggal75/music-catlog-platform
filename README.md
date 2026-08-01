# 🎵 Music Catalog Platform

## Overview

Music Catalog Platform is a full-stack web application built with
Next.js, Spring Boot, PostgreSQL, Docker and the iTunes Search API.
Users can register, log in, search music, save albums to a personal
library and view analytics.

## Features

-   JWT Authentication
-   Music Search (Songs, Albums, Artists, Movies)
-   Personal Library (Add/View/Delete)
-   Analytics Dashboard (Bar, Pie, Line & Horizontal Bar Charts)
-   AI Recommendation based on favourite genre

## Tech Stack

### Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Axios
-   React Hook Form
-   Recharts

### Backend

-   Java
-   Spring Boot
-   Spring Security
-   Spring Data JPA
-   Hibernate
-   JWT

### Database & DevOps

-   PostgreSQL 16
-   Docker
-   Docker Compose
-   Maven
-   Git & GitHub
-   Postman

## Architecture

User -\> Next.js -\> Spring Boot -\> PostgreSQL -\> iTunes Search API

## API

POST /auth/register POST /auth/login GET /api/search GET /api/library
POST /api/library PUT /api/library/{id} DELETE /api/library/{id}

## Local Setup

1.  docker-compose up -d
2.  cd backend && ./mvnw spring-boot:run
3.  cd frontend && npm install && npm run dev

## AI Feature

A rule-based recommendation engine identifies the user's most frequent
music genre from the saved library and recommends exploring more albums
from that genre.

## Design Decisions

-   Layered Spring Boot architecture
-   JWT-based authentication
-   PostgreSQL persistence
-   Reusable React components
-   iTunes API integration

## Trade-offs

-   Rule-based recommendation instead of ML model
-   Frontend-generated analytics
-   Depends on iTunes API data

## Future Improvements

-   Edit ratings & notes
-   Playlists
-   Better AI recommendations
-   CI/CD

## Screenshots

Please refer to the screenhots folder for all outputs and images

## Author

Simran Duggal
