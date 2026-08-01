"use client";

import toast from "react-hot-toast";

import { Album } from "@/types/library";
import { deleteAlbum } from "@/services/library";

type Props = {
  album: Album;
  onDelete: (id: number) => void;
};

export default function LibraryCard({ album, onDelete }: Props) {
  const handleDelete = async () => {
    try {
      await deleteAlbum(album.id!);

      toast.success("Album deleted successfully");

      onDelete(album.id!);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete album");
    }
  };

  return (
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow">
      <img
        src={album.artworkUrl}
        alt={album.title}
        className="h-28 w-28 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col">
        <h2 className="text-xl font-semibold">
          {album.title}
        </h2>

        <p className="text-gray-600">
          {album.artistName}
        </p>

        <p className="text-sm text-gray-500">
          {album.genre}
        </p>

        <p className="mt-2">
          ⭐ {album.userRating}/5
        </p>

        {album.userNotes && (
          <p className="mt-2 text-gray-700">
            {album.userNotes}
          </p>
        )}

        <button
          onClick={handleDelete}
          className="mt-4 w-fit rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}