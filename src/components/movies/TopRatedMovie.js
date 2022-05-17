import React from 'react';
import {NavLink} from "react-router-dom";
import {urls} from "../../constants";
import "./Movies.css"

const TopRatedMovie = ({topMovie}) => {
    const {backdrop_path, genres, title, poster_path, release_date, id} = topMovie
    return (
        <div>
            <NavLink to={`/movie/${id}`} style={{textDecoration:'none'}}>
                <div style={{backgroundImage: `url(${urls.img1280.concat(topMovie.backdrop_path)})`}}
                     className='movieInformation'>
                    <div className='aboutMovie'>
                        <div className="poster">
                            <img src={urls.img342.concat(topMovie.poster_path)} alt="Poster"/>
                        </div>
                        <div className="details">

                            <div>{topMovie.overview}</div>
                            <h1 className={'releaseDate'}>({topMovie.release_date && topMovie.release_date.substring(0, 4)})</h1>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default TopRatedMovie;