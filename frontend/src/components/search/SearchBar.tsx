"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import Button from "../common/Button";
import SearchCard from "./SearchCard";
import EmptyState from "../common/EmptyState";

import { searchMusic } from "@/services/search";
import { SearchResult } from "@/types/search";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("song");

  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const data = await searchMusic(query, type);

      setResults(data.results);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="rounded-xl bg-white p-6 shadow-md">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search songs, artists, albums..."
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-3"
          >
            <option value="song">Song</option>
            <option value="album">Album</option>
            <option value="artist">Artist</option>
            <option value="movie">Movie</option>
          </select>

          <Button onClick={handleSearch} className="md:w-40">
            Search
          </Button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-semibold">Results</h2>

        {loading ? (
          <p>Searching...</p>
        ) : results.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6">
              {results.map((result, index) => (
            <SearchCard
              key={`${result.trackId ?? result.collectionName ?? result.artistName}-${index}`}
              result={result}
            />

            ))}
          </div>
        )}
      </div>
    </>
  );
}