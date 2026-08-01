"use client";

import { useEffect, useMemo, useState } from "react";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { Album } from "@/types/library";
import { getLibrary } from "@/services/library";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ca8a04",
  "#9333ea",
];

export default function DashboardPage() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    getLibrary().then(setAlbums);
  }, []);

  const totalAlbums = albums.length;

  const averageRating =
    albums.length === 0
      ? 0
      : (
          albums.reduce((sum, album) => sum + album.userRating, 0) /
          albums.length
        ).toFixed(1);

  const genreData = useMemo(() => {
    const map: Record<string, number> = {};

    albums.forEach((album) => {
      map[album.genre] = (map[album.genre] || 0) + 1;
    });

    return Object.entries(map).map(([genre, count]) => ({
      genre,
      count,
    }));
  }, [albums]);

  const yearData = useMemo(() => {
    const map: Record<string, number> = {};

    albums.forEach((album) => {
      const year = new Date(album.releaseDate).getFullYear().toString();

      map[year] = (map[year] || 0) + 1;
    });

    return Object.entries(map).map(([year, count]) => ({
      year,
      count,
    }));
  }, [albums]);

  const ratingData = useMemo(() => {
    return [1, 2, 3, 4, 5].map((rating) => ({
      rating: `${rating}⭐`,
      count: albums.filter((a) => a.userRating === rating).length,
    }));
  }, [albums]);

  const favouriteGenre =
    genreData.sort((a, b) => b.count - a.count)[0]?.genre ?? "N/A";

  return (
  <ProtectedRoute>
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">
          📊 Analytics Dashboard
        </h1>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2>Total Albums</h2>
            <p className="mt-3 text-4xl font-bold">{totalAlbums}</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2>Average Rating</h2>
            <p className="mt-3 text-4xl font-bold">
              ⭐ {averageRating}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2>AI Recommendation</h2>
            <p className="mt-3">You mostly enjoy</p>

            <p className="text-2xl font-bold text-blue-600">
              {favouriteGenre}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 font-semibold">
              Albums by Genre
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={genreData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="genre" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 font-semibold">
              Genre Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genreData}
                  dataKey="count"
                  nameKey="genre"
                  outerRadius={100}
                  label
                >
                  {genreData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 font-semibold">
              Releases by Year
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 font-semibold">
              Ratings Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ratingData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="rating" type="category" />
                <Tooltip />
                <Bar dataKey="count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  </ProtectedRoute>
);
}