import axios from "axios";
import { actionTypes } from "../actionTypes";
import { options, genresOptions } from "../../contants";

export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload: payload,
});

//hem verileri hemde reduceri ceker
export const getMovies = () => {
  return async function (dispatch) {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: res.data,
    });
  };
};

export const getGenres = () => (dispatch) => {
  axios
    .request(genresOptions)
    .then(function (response) {
      dispatch({
        type: actionTypes.SET_CATEGORIES,
        payload: response.data.genres,
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};
