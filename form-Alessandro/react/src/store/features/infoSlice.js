import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name: 'info',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    },
    reducers: {
        setInfo: (state, { payload }) => {
            return { ...state, ...payload }
        },
        clearInfo: () => {
            return {
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }
        },

    }
})

export const {setInfo, clearInfo} = infoSlice.actions
export default infoSlice.reducer