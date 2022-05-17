import React from 'react';
import {useSelector} from "react-redux";
import {urls} from "../../constants/urls"
import {Link} from "react-router-dom";
import "./Movies.css"

const MoviesList = ({movie}) => {

    const {poster_path, id, genre_ids, overview} = movie;
    const {genres} = useSelector(state => state.genresReducer);
    const filteredGenre = genres.filter(genre => genre.id === genre_ids[0])[0];
    const background = `url(${urls.img185.concat(poster_path)})`;
    return (
        <div className='movie'>
            <Link to={`/movie/${id}`} style={{textDecoration: 'none'}}>
                <div style={{backgroundImage: background}} className="movieInfo">
                    <div className="info">
                        <div className="overview">
                            {overview}
                        </div>
                        <div className="genreBadge">
                            <p>{filteredGenre && filteredGenre.name}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MoviesList;