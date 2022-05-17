import {urls} from "../constants";
import {axiosService} from "./axios.service";

export const genreService = {
    allGenres: () => axiosService.get(urls.genre.concat(urls.movie, urls.list, urls.key)).then(value => value.data),
    genreList: (id, page) => axiosService.get(urls.discover.concat(urls.movie, urls.key, urls.sortPopularityDesc, urls.page, page, urls.certainGenre, id))
}
