import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import songApi from "~/api/songApi";

export const fetchAsyncSongs = createAsyncThunk(
    "songs/fetchAsyncSongs",
    async () => {
        const response = await songApi.getAll();
        return response;
    }
);
export const updateLikedSongs = createAsyncThunk(
    "songs/updateLikedSongs",
    async ({id, liked}) => {
        const response = await songApi.updateLikedSong(id, liked);
        return response;
    }
);


const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: []
    },
    reducers: {
         
    },
    extraReducers: {
        [fetchAsyncSongs.fulfilled]: (state, {payload}) => {
            return {...state, songs: payload}
        },
        [fetchAsyncSongs.rejected]: (state, { error }) => {
            console.log('rejected!', error.message)
        },
        [updateLikedSongs.fulfilled]: (state, {payload}) => {
            state.songs.find(song => song.id === payload.id).liked = payload.liked
        },
    }
})
const { actions, reducer } = songSlice;
export const { setSongs, updateLikedSong } = actions;
export default reducer