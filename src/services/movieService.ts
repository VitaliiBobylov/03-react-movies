import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
};

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      language: "en-US",
    },
  });

  return response.data.results;
}
