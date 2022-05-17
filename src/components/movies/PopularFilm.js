import React from 'react';
import {NavLink} from "react-router-dom";
import {urls} from "../../constants";

const PopularFilm = ({popularFilm}) => {
    const {backdrop_path, genres, title, poster_path, release_date, id} = popularFilm
    return (
        <div>
            <div>
                <NavLink to={`/movie/${id}`} style={{textDecoration: 'none'}}>
                    <div style={{backgroundImage: `url(${urls.img1280.concat(popularFilm.backdrop_path)})`}}
                         className='movieInformation'>
                        <div className='aboutMovie'>
                            <div className="poster">
                                <img src={urls.img342.concat(popularFilm.poster_path)} alt="Poster"/>
                            </div>
                            <div className="details">
                                <div className="title">
                                    <h1>{popularFilm.title}</h1>
                                </div>
                                <h1 className={'releaseDate'}>({popularFilm.release_date && popularFilm.release_date.substring(0, 4)})</h1>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default PopularFilm;