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

export const createNewPlaylist = createAsyncThunk(
    'playlists/createNewPlaylist',
    async (data) => {
        const response = await playlistApi.add(data);
        return response;
    }
)

export const deletePlaylist = createAsyncThunk(
    'playlists/deletePlaylist',
    async (id) => {
        const response = await playlistApi.delete(id);
        return id;
    }
)

const playlistSlice = createSlice({
    name: 'playlists',
    initialState: {
        playlists: [],
        selectedPlaylist: {},
        likedSongPlaylistInfo: {
            name: "Liked Songs",
            sub: "",
            img: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        },
        newPlaylistNumberOrder: 1
    },
    reducers: {
        increasePlaylistNumberOrder (state, {payload}) {
            state.newPlaylistNumberOrder = payload
        }
    },
    extraReducers: {
        [fetchAsyncPlaylists.fulfilled]: (state, { payload }) => {
            return { ...state, playlists: payload }
        },
        [fetchAsyncPlaylists.rejected]: (state, { error }) => {
            console.log('rejected!', error)
        },
        [updateLikedPlaylists.fulfilled]: (state, { payload }) => {
            state.selectedPlaylist.liked = payload.liked
        },
        [updateLikedPlaylists.rejected]: (state, { error }) => {
            console.log('rejected!', error)
        },
        [fetchSelectedPlaylist.fulfilled]: (state, { payload }) => {
            return { ...state, selectedPlaylist: payload }
        },
        [fetchSelectedPlaylist.rejected]: (state, { error }) => {
            console.log('rejected!', error)
        },
        [createNewPlaylist.fulfilled]: (state, { payload }) => {
            state.playlists.push(payload)
        },
        [createNewPlaylist.rejected]: (state, { error }) => {
            console.log('rejected!', error)
        },
        [deletePlaylist.fulfilled]: (state, { payload }) => {
            state.playlists = state.playlists.filter(playlist => playlist.id !== payload)
        },
        [deletePlaylist.rejected]: (state, { error }) => {
            console.log('rejected!', error)
        }
    }
})
const { actions, reducer } = playlistSlice;
export default reducer;
export const { increasePlaylistNumberOrder } = actions;