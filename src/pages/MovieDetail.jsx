import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "./../contants";
import Badges from "../components/Badges";
const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      )
      .then((res) => setMovie(res.data));
  }, [movieId]);

  console.log(movie);
  return (
    <div className="movie-detail row p-4">
      {!movie ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="col-md-4 position-relative">
            <div className="" style={{ maxWidth: "400px" }}>
              <img
                className="rounded w-100 shadow"
                src={baseImgUrl.concat(movie.poster_path)}
                alt=""
              />
              <p
                style={{ right: "50px" }}
                className="position-absolute bg-warning p-1 rounded shadow bottom-0"
              >
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

            <div className="row">
              <div>
                <Badges
                  title="Categories"
                  list={movie.genres}
                  color="bg-primary"
                />

                <Badges
                  title="Language"
                  list={movie.spoken_languages}
                  color="bg-danger"
                />

                <Badges
                  title="Producer Companies"
                  list={movie.production_companies}
                  color="bg-success"
                />
              </div>
              <div>
                <p>Budged: {movie.budget}</p>
                <p>Revenue: {movie.revenue}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
