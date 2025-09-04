import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import { fetchMovies, type Movie } from "../../services/movieService";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const results = await fetchMovies(query);

      if (results.length === 0) {
        toast.error("No movies found for your request.");
        setMovies([]);
        return;
      }

      setMovies(results);
    } catch (error) {
      toast.error("Something went wrong. Try again later.");
      console.error(error);
    }
  };

  const handleSelect = (movie: Movie) => {
    toast.success(`Вибрано фільм: ${movie.title}`);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={handleSelect} />
      <Toaster position="top-right" />
    </div>
  );
}
