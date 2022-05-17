import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movies.service";
import {genreService} from "../../services/genres.service";


export const getPopularMovies = createAsyncThunk('moviesSlice/getPopularMovies',
    async (_, {rejectedWithValue}) => {
        try {
            return await moviesService.getPopularMovies()
        } catch (e) {
            rejectedWithValue(e.message)
        }
    })

export const getMoviesNowPlaying = createAsyncThunk('moviesSlice/getMoviesNowPlaying',
    async (_, {rejectedWithValue}) => {
        try {
            return await moviesService.getMoviesPlayingNow()
        } catch (e) {
            rejectedWithValue(e.message)
        }

    })

export const getTopRatedMovies = createAsyncThunk('moviesSlice/getTopRatedMovies',
    async (_, {rejectedWithValue}) => {
        try {
            return await moviesService.getTopRatedMovies()
        } catch (e) {
            rejectedWithValue(e.message)
        }
    })

export const getMovie = createAsyncThunk(
    'moviesSlice/getMovie',
    async (id, {rejectWithValue}) => {
        try {
            console.log(id)
            return await moviesService.getMovie(id)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const searchMovie = createAsyncThunk('moviesSlice/searchMovie',
    async ({keyword, page}, {rejectedWithValue}) => {
        try {
            return await moviesService.searchMovie(keyword, page)
        } catch (e) {
            rejectedWithValue(e.message)
        }
    })

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        popularMovies: [],
        nowPlayingMovies: [],
        topRatedMovies: [],
        singleMovie: {},
        searchMovies: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getPopularMovies.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getPopularMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.popularMovies = action.payload;
        },
        [getPopularMovies.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [getMoviesNowPlaying.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getMoviesNowPlaying.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.nowPlayingMovies = action.payload;
        },
        [getMoviesNowPlaying.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [getTopRatedMovies.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getTopRatedMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.topRatedMovies = action.payload;
        },
        [getTopRatedMovies.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [getMovie.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getMovie.fulfilled]: (state, action) => {
            console.log(action)
            state.status = 'fulfilled';
            state.singleMovie = action.payload;

        },
        [getMovie.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [searchMovie.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [searchMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.searchMovies = action.payload;
        },
        [searchMovie.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        }
    }
})

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;