import { SearchResult } from "@/types/search";

type Props = {
  result: SearchResult;
};

export default function SearchCard({ result }: Props) {
  return (
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow">
      <img
        src={result.artworkUrl100}
        alt={result.trackName}
        className="h-24 w-24 rounded-lg"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold">
          {result.trackName ?? result.collectionName}
        </h3>

        <p className="text-gray-600">
          {result.artistName}
        </p>

        <p className="text-sm text-gray-500">
          {result.primaryGenreName}
        </p>
      </div>
    </div>
  );
}