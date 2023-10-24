import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import { baseImgUrl } from "../contants";

const Hero = () => {
  // abone olma işlemi(store'da tutulan verilere erişme)
  const state = useSelector((store) => store.movieReducer);
  console.log("state e bakalım", state);
  //dizinın uzunlugun gore rastgele sayı bulma
  const i = Math.floor(Math.random() * state.popularMovies.length);
  // rastgele bir filmme erişme
  const randomMovie = state.popularMovies[i];

  return (
    <div className="row p-4">
      {/* yukleme suruyorsa ekrana loading bas */}
      {!randomMovie && <p>Loading...</p>}

      {/* yukleme bittiyse */}
      {randomMovie && (
        <>
          <div className="col-md-6 mt-3 d-flex flex-column align-items-center gap-3">
            <h1 className="text-center">{randomMovie?.title}</h1>
            <p>{randomMovie?.overview}</p>
            <p className="text-warning">IMDB: {randomMovie?.vote_average}</p>

            <div className="d-flex gap-3">
              <button className="btn btn-danger">Watch Movie</button>
              <button className="btn btn-info">Add to</button>
            </div>
          </div>
          <div className="col-md-6 mt-3 d-flex align-items-center justify-content-center ">
            <img
              className="img-fluid rounded"
              src={`${baseImgUrl}${randomMovie?.backdrop_path}`}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
