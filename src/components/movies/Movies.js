import React from 'react';
import MoviesList from "./MoviesList";
import {useSelector} from "react-redux";

const Movies = () => {
    const {movies}=useSelector(state => state.moviesReducer)
    return (
        <div>
            {movies && movies.map(movie=><MoviesList key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Movies;