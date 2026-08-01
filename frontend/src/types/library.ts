export interface Album {
  id?: number;

  appleCatalogId: number;
  title: string;
  artistName: string;
  genre: string;
  releaseDate: string;
  trackCount: number;
  artworkUrl: string;

  userRating: number;
  userNotes: string;

  createdAt?: string;
  updatedAt?: string;
}