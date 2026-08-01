"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Button from "../common/Button";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("song");

  const handleSearch = () => {
    console.log(query, type);
  };

  return (
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
  );
}