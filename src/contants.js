export const options = {
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzY4YWU4ODhmZmFiOTM1YmE2MzMyMmQxMmE1ODIzOSIsInN1YiI6IjY1MmNkYWVjMzU4ZGE3NWI2MGE0ZmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qsIkS9OvTGklKR6OWF3czuzdrbWBFLDYlNo_k3W-lo",
  },
};
export const genresOptions = {
  method: "GET",
  url: "https://api.themoviedb.org/3/genre/movie/list",
  params: { language: "en" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzY4YWU4ODhmZmFiOTM1YmE2MzMyMmQxMmE1ODIzOSIsInN1YiI6IjY1MmNkYWVjMzU4ZGE3NWI2MGE0ZmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qsIkS9OvTGklKR6OWF3czuzdrbWBFLDYlNo_k3W-lo",
  },
};

export const baseImgUrl = "https://image.tmdb.org/t/p/original";
