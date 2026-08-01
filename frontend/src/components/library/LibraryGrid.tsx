import { Album } from "@/types/library";
import LibraryCard from "./LibraryCard";

type Props = {
  albums: Album[];
  onDelete: (id: number) => void;
};

export default function LibraryGrid({
  albums,
  onDelete,
}: Props) {
  return (
    <div className="grid gap-6">
      {albums.map((album) => (
        <LibraryCard
          key={album.id}
          album={album}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}