const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+import.meta.env.VITE_TMDB_KEY
  }
};
export const img_url = "https://image.tmdb.org/t/p/w500/";
export default options