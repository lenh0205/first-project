import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'songs',
    initialState: [],
    reducers: {
        setSongs(state, action) {
            return action.payload
        },
        updateLikedSong(state, action) {
            state.find(song => song.id === action.payload.id).liked = action.payload.liked
        },
    }
})
const { actions, reducer } = songSlice;
export const { setSongs, updateLikedSong } = actions;
export default reducer