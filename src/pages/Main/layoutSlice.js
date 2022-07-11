import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        mode: 'dark',
        open: true,
        drawerWidth: 240
    },
    reducers: {
        switchMode(state, {payload}) {
            payload === 'dark' ? state.mode = "light" : state.mode = 'dark'
        },
        toggleDrawer(state, { payload }) {
            state.open = !state.open
        }
    }
})
const { actions, reducer } = layoutSlice;
export default reducer;
export const { toggleDrawer, switchMode } = actions;