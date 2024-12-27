import { Movie } from "./snake/type";
import { Star } from "lucide-react";

export const MovieList = ({ movie }: { movie: Movie }) => {
  const imgPath = movie?.poster_path ?? movie?.backdrop_path;
  const src = imgPath
    ? `https://image.tmdb.org/t/p/w500/${imgPath}`
    : `https://via.placeholder.com/500x750?text=No+Image`;

  return (
    <div className="rounded-lg bg-gray-100">
      <img
        src={src}
        alt={movie.title || "Movie poster"}
        className="rounded-t-lg"
      />
      <div className="p-2">
        <div className="flex items-center gap-5">
          <Star size={16} className="stroke-yellow-300 fill-yellow-300" />
          <p>{movie.vote_average?.toFixed(1) || "N/A"}</p>
        </div>
        <p>{movie.title || "Untitled"}</p>
      </div>
    </div>
  );
};
