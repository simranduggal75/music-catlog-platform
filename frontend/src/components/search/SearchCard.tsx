"use client";

import toast from "react-hot-toast";

import { SearchResult } from "@/types/search";
import { addAlbum } from "@/services/library";

type Props = {
  result: SearchResult;
};

export default function SearchCard({ result }: Props) {
  const handleAdd = async () => {
    try {
      await addAlbum({
        appleCatalogId:
          result.collectionId ??
          result.trackId ??
          result.artistId ??
          0,

        title:
          result.collectionName ??
          result.trackName ??
          "Unknown",

        artistName: result.artistName,

        genre: result.primaryGenreName ?? "Unknown",

        releaseDate: result.releaseDate?.split("T")[0] ?? "2000-01-01",

        trackCount: result.trackCount ?? 1,

        artworkUrl: result.artworkUrl100 ?? "",

        userRating: 5,

        userNotes: "",
      });

      toast.success("Album added to library");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add album");
    }
  };

  return (
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow">
      <img
        src={result.artworkUrl100}
        alt={result.trackName ?? result.collectionName}
        className="h-24 w-24 rounded-lg"
      />

      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold">
          {result.trackName ?? result.collectionName}
        </h3>

        <p className="text-gray-600">
          {result.artistName}
        </p>

        <p className="text-sm text-gray-500">
          {result.primaryGenreName}
        </p>

        <button
          onClick={handleAdd}
          className="mt-4 w-fit rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add to Library
        </button>
      </div>
    </div>
  );
}