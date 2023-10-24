import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import MovieList from "../components/MovieList";

const MainPage = () => {
  // console.log(options);

  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    dispatch(setLoading(true));
    // console.log(setLoading(true));
    dispatch(getMovies());
    dispatch(getGenres());
  }, []);
  console.log(state.genres);
  return (
    <div>
      <Hero />
      {state?.genres?.map((genre, i) => (
        <MovieList key={i} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
