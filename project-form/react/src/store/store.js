import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './features/infoSlice'

export default configureStore({
    reducer:{
        info: infoReducer
    }
})

