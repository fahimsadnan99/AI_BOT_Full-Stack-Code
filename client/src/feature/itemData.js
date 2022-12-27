import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";



export const itemSlice = createSlice({
    name : "item",
    initialState : {
        value : []
    },
    reducers :{
        addValue : (state, value) =>{
            console.log("Fahim",value.payload);
           if(value.payload.text !== ""){
                state.value.push(value.payload);
                
            }
        
        },
        updateValue : (state, value) =>{
           
                state.value.splice(state.value.length-1,1,value.payload)
              
                    }

    }

})

export const {addValue,updateValue} = itemSlice.actions; 
export default itemSlice.reducer