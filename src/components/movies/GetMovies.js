import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../store/slices/movies.slice";
import {urls} from "../../constants";
import StarRatings from "react-star-ratings";
import GenresList from "../genres/GenresList";
import "./Movies.css"

const GetMovies = () => {
    const {singleMovie} = useSelector(state => state.moviesReducer)

    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovie(id))
    }, [dispatch, id]);
    const {
        poster_path,
        title,
        release_date,
        overview,

        vote_average,
        budget,
        revenue,
        vote_count,
        tagline,
        status,
        genres,
        backdrop_path,
    } = singleMovie;


    console.log(singleMovie)
    return (
        <div style={{backgroundImage: `url(${urls.img1280.concat(backdrop_path)})`}} className='movieInformation'>
            <div className="aboutMovie">
                <div className="poster">
                    <img src={urls.img342.concat(poster_path)} alt="Poster"/>
                    <div className="posterGenres">
                        {genres && genres.map(genre => <GenresList key={genre.id} genre={genre}/>)}
                    </div>
                </div>
                <div className="details">
                    <div className="titleBadge">
                        <h1>{title}</h1>

                    </div>
                    <h1 className={'releaseDate'}>({release_date && release_date.substring(0, 4)})</h1>
                    <h3 className={'tagline'}>{tagline}</h3>
                    <div className="stars">
                        <StarRatings
                            rating={vote_average}
                            starDimension='20px'
                            starSpacing='5px'
                            starRatedColor="gold"
                            numberOfStars={10}
                            name='rating'
                        />
                        <p>({vote_count})</p>
                    </div>
                    <h3>{overview}</h3>
                    {budget > 1 && <div className="money">
                        <h4>Status: {status}</h4>
                        <h4>Budget: {budget} $</h4>
                        <h4>Revenue: {revenue} $</h4>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default GetMovies;