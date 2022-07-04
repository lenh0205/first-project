import { configureStore } from '@reduxjs/toolkit'
import songReducer from '~/pages/Main/SongSlice'
import layoutReducer from '~/pages/Main/layoutSlice'

const store = configureStore({
    reducer: {
        songs: songReducer,
        layout: layoutReducer
    }
})

export default store;