import {configureStore, combineReducers} from '@reduxjs/toolkit';
import genresReducer from "./slices/genres.slice";
import moviesReducer from "./slices/movies.slice";

const rootReducer = combineReducers({genresReducer, moviesReducer})

const store = configureStore({
    reducer: rootReducer


});


export default store;
