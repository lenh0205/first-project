import { configureStore } from '@reduxjs/toolkit'
import songReducer from '~/pages/Main/SongSlice'

const store = configureStore({
    reducer: {
        songs: songReducer
    }
})

export default store;