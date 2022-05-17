import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenreList} from "../../store/slices";
import {NavLink, useParams} from "react-router-dom";
import MoviePoster from "./MoviePoster";

const MoviesByGenre = () => {

    const {id}= useParams();
    const dispatch = useDispatch();
    const [page, setPage]= useState(1)
   useEffect(() => {
        dispatch(getGenreList({id, page}))
    }, [dispatch, id, page]);
    const {genreList} = useSelector(state => state.genresReducer);
    console.log(genreList)
    return (
        <div>
            {genreList.results && genreList.results.map(movie=><MoviePoster key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesByGenre;