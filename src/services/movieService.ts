import axios from "axios";

export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
};

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export async function fetchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await axiosInstance.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query,
        },
      }
    );

    return response.data.results as Movie[];
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw new Error("Failed to fetch movies");
  }
}
