import { Music } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white py-20 text-center">
      <Music className="mx-auto mb-4 text-gray-400" size={60} />

      <h3 className="text-xl font-semibold">
        No results yet
      </h3>

      <p className="mt-2 text-gray-500">
        Search for your favourite songs, albums or artists.
      </p>
    </div>
  );
}