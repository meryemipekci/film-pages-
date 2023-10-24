import { actionTypes } from "../actionTypes";

const initialState = {
  popularMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      console.log("redux.log", action.payload);
      return {
        ...state,
        popularMovies: action.payload.results,
        isLoading: false,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};
