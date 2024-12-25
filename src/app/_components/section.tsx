import { Movie } from "./snake/type";
import { Options } from "./snake/type";
import { MovieList } from "./MovieList";

type Props = {
  endpoint: string;
  title: string;
};

export const Section = async ({ title, endpoint }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    Options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson.results?.slice(0, 10);
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <h1 className="font-semibold"> {title}</h1>
      </div>
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies?.map((movie) => (
          <MovieList movie={movie} />
        ))}
      </div>
    </div>
  );
};
