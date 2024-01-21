import { createSlice } from "@reduxjs/toolkit";

export interface MobileNavState {
    isOpen: boolean
}

const initialState: MobileNavState = {
    isOpen: false
}

export const mobileNavSlice = createSlice({
    name: 'mobileNav',
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const {toggleOpen} = mobileNavSlice.actions;
export default mobileNavSlice.reducer;