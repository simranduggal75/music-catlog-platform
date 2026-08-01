"use client";

import SearchBar from "@/components/search/SearchBar";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

export default function SearchPage() {
  return (
    <ProtectedRoute>
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            🎵 Discover Music
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Search songs, albums, artists and movies from iTunes.
          </p>
        </div>

        <SearchBar />
      </div>
    </main>
    </ProtectedRoute>
  );
}