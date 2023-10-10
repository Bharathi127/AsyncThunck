import {configureStore} from '@reduxjs/toolkit'
import foodReducer from './FoodSlice'
const store=configureStore({
    reducer:{
       food:foodReducer
    }
})

export default store