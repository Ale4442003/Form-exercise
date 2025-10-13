import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
    name:'info',
    initialState:[],
    reducers:{
        salvaForm (state, action) {
            state.push(action.payload) //aggiunge i dati del form allo stato
            //state = []
            //state = [{ name: "...", surname: "...", email: "...", phone: "..." }]
        }
       
    }
})

export const{ salvaForm } = infoSlice.actions
export default infoSlice.reducer