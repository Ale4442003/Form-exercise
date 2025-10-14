import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
    name:'info',
    initialState:{ //sempre un oggetto
        name: "",
        surname: "",
        email: "",
        phone: "",
    },
    reducers:{
        salvaForm (state, action) {
           state.name = action.payload.name
           state.surname = action.payload.surname
           state.email = action.payload.email
           state.phone = action.payload.phone
        }
    }
})

export const { salvaForm } = infoSlice.actions
export default infoSlice.reducer