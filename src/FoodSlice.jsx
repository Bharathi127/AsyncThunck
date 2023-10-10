import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={
    foodData:[],
    loading:false,
    error:null
}

export const fetchingData=createAsyncThunk('food/fetchingData', async()=>{
    console.log("data")
    const data= await fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
   
    const json=await data.json()
    console.log(json.items)
    return {res:json.items}
})

const foodSlice=createSlice({
    name:"food",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchingData.pending, (state,action)=>{
             state.loading=true
        })
        builder.addCase(fetchingData.fulfilled, (state,action)=>{
            state.foodData=action.payload.res;
            state.loading=false;
        })
        builder.addCase(fetchingData.rejected, (state,action)=>{
            state.error="Pls try again, data not found";
            state.loading=false
        })
    }
})

export default foodSlice.reducer