export interface SearchResult {
  trackId: number;
  trackName?: string;
  collectionName?: string;
  artistName: string;
  artworkUrl100?: string;
  primaryGenreName?: string;
  releaseDate?: string;
}

export interface ITunesResponse {
  resultCount: number;
  results: SearchResult[];
}