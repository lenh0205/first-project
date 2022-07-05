import { configureStore } from '@reduxjs/toolkit'
import songReducer from '~/pages/Main/SongSlice'
import playlistReducer from '~/pages/Main/playlistSlice'
import layoutReducer from '~/pages/Main/layoutSlice'

const store = configureStore({
    reducer: {
        songs: songReducer,
        playlists: playlistReducer,
        layout: layoutReducer
    }
})

export default store;