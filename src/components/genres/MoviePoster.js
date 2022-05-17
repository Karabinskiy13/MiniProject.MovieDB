import React from 'react';
import {urls} from "../../constants";
import {NavLink} from "react-router-dom";

const MoviePoster = ({movie}) => {
    console.log(movie)
    return (
        <div>
            <NavLink to={`/movie/${movie.id}`} >
            <div style={{backgroundImage: `url(${urls.img1280.concat(movie.backdrop_path)})`}} className='movieInformation'>
                <div className='aboutMovie'>
                    <div className="poster">
                        <img src={urls.img342.concat(movie.poster_path)} alt="Poster"/>
                    </div>
                    <div className="details">
                        <div className="title">
                            <h1>{movie.title}</h1>
                        </div>
                        <h1 className={'releaseDate'}>({movie.release_date && movie.release_date.substring(0, 4)})</h1>
                        <h3>{movie.overview}</h3>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    );
};

export default MoviePoster;