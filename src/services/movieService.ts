export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string | null;
};

export async function fetchMovies(query: string): Promise<Movie[]> {

  const response = await fetch(

    `https://api.themoviedb.org/3/search/movie?api_key=${

      import.meta.env.VITE_TMDB_API_KEY

    }&query=${encodeURIComponent(query)}&language=en-US`
  );

  if (!response.ok) {

    throw new Error("Failed to fetch movies");
    
  }

  const data = await response.json();
  return data.results as Movie[];
}
