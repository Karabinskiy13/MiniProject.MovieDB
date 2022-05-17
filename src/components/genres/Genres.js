import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import GenresList from "./GenresList";
import {getGenres} from "../../store/slices";
import "./genres.css"

const Genres = () => {
    const {genres} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);
    console.log(genres)

    return (
        <div>
            <div className='genres'>
            <div className='allGenres'>
                <h1>Genres</h1>
                {genres && genres.map(genre => <GenresList key={genre.id} genre={genre}/>)}
            </div>
            </div>>
            <Outlet/>
        </div>
    );
};

export default Genres;