import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import playlistApi from "~/api/playlistApi";

export const fetchAsyncPlaylists = createAsyncThunk(
    "playlists/fetchAsyncPlaylists",
    async () => {
        const response = await playlistApi.getAll();
        return response;
    }
);

export const updateLikedPlaylists = createAsyncThunk(
    "playlists/updateLikedPlaylists",
    async ({ id, liked }) => {
        const response = await playlistApi.updateLikedPlaylist(id, liked);
        return response;
    }
);

export const fetchSelectedPlaylist = createAsyncThunk(
    'playlists/fetchSelectedPlaylist',
    async (id) => {
        const response = await playlistApi.get(id);
        return response;
    }
)

const playlistSlice = createSlice({
    name: 'playlists',
    initialState: {
        playlists: [],
        selectedPlaylist: {}
    },
    reducers: {

    },
    extraReducers: {
        [fetchAsyncPlaylists.fulfilled]: (state, { payload }) => {
            return { ...state, playlists: payload }
        },
        [fetchAsyncPlaylists.rejected]: (state, { error }) => {
            console.log('rejected!', error.message)
        },
        [updateLikedPlaylists.fulfilled]: (state, { payload }) => {
            state.selectedPlaylist.liked = payload.liked
        },
        [updateLikedPlaylists.rejected]: (state, { error }) => {
            console.log('rejected!', error.message)
        },
        [fetchSelectedPlaylist.fulfilled]: (state, { payload }) => {
            return { ...state, selectedPlaylist: payload }
        },
        [fetchSelectedPlaylist.rejected]: (state, { error }) => {
            console.log('rejected!', error.message)
        }
    }
})
const { actions, reducer } = playlistSlice;
export default reducer;
export const { } = actions;