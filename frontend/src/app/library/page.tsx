"use client";

import { useEffect, useState } from "react";

import EmptyState from "@/components/common/EmptyState";
import LibraryGrid from "@/components/library/LibraryGrid";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

import { getLibrary } from "@/services/library";
import { Album } from "@/types/library";

export default function LibraryPage() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const data = await getLibrary();
        setAlbums(data);
      } finally {
        setLoading(false);
      }
    };

    fetchLibrary();
  }, []);

  const handleDelete = (id: number) => {
    setAlbums((prev) =>
      prev.filter((album) => album.id !== id)
    );
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <main className="p-10">
          Loading...
        </main>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50 p-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-4xl font-bold">
            📚 My Library
          </h1>

          {albums.length === 0 ? (
            <EmptyState />
          ) : (
            <LibraryGrid
              albums={albums}
              onDelete={handleDelete}
            />
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}