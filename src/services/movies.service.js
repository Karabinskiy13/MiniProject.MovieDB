import {urls} from "../constants";
import {axiosService} from "./axios.service";

export const moviesService = {
    getMovie: (id) => axiosService.get(`${urls.movie}/${id}${urls.key}`).then(value => value.data),
    getPopularMovies: () => axiosService.get(urls.movie.concat(urls.popular, urls.key)).then(value => value.data),
    getMoviesPlayingNow: () => axiosService.get(urls.movie.concat(urls.nowPlaying, urls.key)).then(value => value.data),
    getTopRatedMovies: () => axiosService.get(urls.movie.concat(urls.topRated, urls.key)).then(value => value.data),
    getGenres: () => axiosService.get(urls.genre.concat(urls.movie, urls.list, urls.key)).then(value => value.data),
    searchMovie: (keyWord, page) => axiosService.get(urls.search.concat(urls.movie, urls.key, urls.query, keyWord, urls.page, urls.withoutAdultContent)).then(value => value.data)
}