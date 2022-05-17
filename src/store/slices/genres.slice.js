import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services/genres.service";

export const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await genreService.allGenres()
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const getGenreList = createAsyncThunk(
    'genreSlice/getGenreList',
    async ({id,page}, {rejectWithValue}) => {
        try {
            console.log(id)
            return await genreService.genreList(id, page)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres: [],
        genreList: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getGenres.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload.genres;
        },
        [getGenres.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [getGenreList.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getGenreList.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.genreList = action.payload.data;
        },
        [getGenreList.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        }
    }
})

const genresReducer = genresSlice.reducer;

export default genresReducer;