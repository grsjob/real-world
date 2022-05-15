import {createSlice} from '@reduxjs/toolkit'

interface AppState {
    isAutorised: boolean
}

const initialState: AppState = {
    isAutorised: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleStatusAutorisation: (state) =>{
            state.isAutorised = !state.isAutorised;
        }

    }
})

export const {toggleStatusAutorisation} = appSlice.actions

export default appSlice.reducer