export interface SearchResult {
  trackId?: number;
  collectionId?: number;
  artistId?: number;

  trackName?: string;
  collectionName?: string;
  artistName: string;

  artworkUrl100?: string;
  primaryGenreName?: string;
  releaseDate?: string;
}