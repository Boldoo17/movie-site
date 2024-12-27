import { Movie } from "./snake/type";
import { Options } from "./snake/type";
import { MovieList } from "./MovieList";

type Props = {
  endpoint: string;
  title: string;
};

export const Section = async ({ title, endpoint }: Props) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
      Options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const resJson = await response.json();
    const movies: Movie[] = resJson.results?.slice(0, 20) || [];

    return (
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">{title}</h1>
        </div>
        <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading movies. Please try again later.</div>;
  }
};
