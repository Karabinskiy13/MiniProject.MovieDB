import React, {useEffect}  from 'react';
import {useDispatch, useSelector} from "react-redux";

import  {getTopRatedMovies} from "../../store/slices/movies.slice"
import TopRatedMovie from "./TopRatedMovie";


    const TopRated = () => {
    const {topRatedMovies} = useSelector(state => state.moviesReducer);
    const moviesArray = topRatedMovies.results;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopRatedMovies())
    }, [dispatch])

    return (
        <div>
            {moviesArray && moviesArray.map(topMovie => <TopRatedMovie key={topMovie.id} topMovie={topMovie}/>)}

        </div>
    );
};
    export default TopRated