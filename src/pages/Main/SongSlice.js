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
    async ({ id, liked }) => {
        const response = await songApi.updateLikedSong(id, liked);
        return response;
    }
);


const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: [],
        selectedSong: {
            song: {},
            currentIndex: 0
        },
        isOpenPlayBack: false,
        isPlaying: false,
        isRepeat: false,
        isRandom: false,
        oldRandomSongs: []
    },
    reducers: {
        getSelectedSong(state, { payload }) {
            state.selectedSong.song = payload.song
            state.selectedSong.currentIndex = payload.index
        },
        toggleIsPlaying(state) {
            state.isPlaying = !state.isPlaying
        },
        openPlayBack(state) {
            state.isOpenPlayBack = true
        },
        nextSong(state, { payload }) {
            state.selectedSong.song = state.songs.find((song, index) => index === payload + 1)
            state.selectedSong.currentIndex = payload + 1
            state.isPlaying = true
        },
        prevSong(state, { payload }) {
            state.selectedSong.song = state.songs.find((song, index) => index === payload - 1)
            state.selectedSong.currentIndex = payload - 1
            state.isPlaying = true
        },
        toggleIsRepeat(state) {
            state.isRepeat = !state.isRepeat
        },
        toggleIsRamdom(state) {
            state.isRandom = !state.isRandom
        },
        getOldRandomSongs (state, {payload}) {
            state.oldRandomSongs.push(payload)
        },
        nextRamdomSong(state, { payload }) {
            const newSong = state.songs.filter(song => song.playlistId === payload)
            let randomIndex
            do {
                randomIndex = Math.floor(Math.random() * (newSong.length - 1))
            } while (state.oldRandomSongs.includes(randomIndex))
            const nextSong = {...newSong.find((song, index) => index === randomIndex)}
            state.selectedSong.song = nextSong
            state.selectedSong.currentIndex = randomIndex
            state.isPlaying = true
        }
    },
    extraReducers: {
        [fetchAsyncSongs.fulfilled]: (state, { payload }) => {
            return { ...state, songs: payload }
        },
        [fetchAsyncSongs.rejected]: (state, { error }) => {
            console.log('rejected!', error.message)
        },
        [updateLikedSongs.fulfilled]: (state, { payload }) => {
            state.songs.find(song => song.id === payload.id).liked = payload.liked
        },
    }
})
const { actions, reducer } = songSlice;
export default reducer;
export const {
    getSelectedSong, openPlayBack,
    toggleIsPlaying,
    nextSong, prevSong,
    toggleIsRepeat,
    toggleIsRamdom, getOldRandomSongs, nextRamdomSong
} = actions;