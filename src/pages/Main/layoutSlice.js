import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        open: true,
        drawerWidth: 240
    },
    reducers: {
        toggleDrawer(state, { payload }) {
            state.open = !state.open
        }
    }
})
const { actions, reducer } = layoutSlice;
export default reducer;
export const { toggleDrawer } = actions;