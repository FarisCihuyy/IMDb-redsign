import { tvGenres } from "../data/tvGenre";
import { movieGenres } from "../data/movieGenre";

export const getGenres = (genreIds = [], type) => {
  let genres = [];
  if (type === "movie") {
    genreIds.forEach((id) => {
      const genre = movieGenres.find((g) => g.id === id);
      if (genre) genres.push(genre.name);
    });
  } else if (type === "tv") {
    genreIds.forEach((id) => {
      const genre = tvGenres.find((g) => g.id === id);
      if (genre) genres.push(genre.name);
    });
  }
  return genres;
};
