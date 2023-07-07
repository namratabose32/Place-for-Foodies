import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[],
        price:0,
    },
    reducers:{
        addItem:(state,action) =>{
            const item=action.payload;
            state.items.push(item);
            state.price+=item.price/100;
        },
        removeItem:(state,action)=>{
            // state.items.pop();
            const removeItem = action.payload;
            const index = state.items.findIndex(item => item.id === removeItem.id);
            const removedItem = state.items.splice(index, 1)[0];
            state.price -= removedItem.price/100;
        },
        addExistingItem: (state, action) => {
            const existingItem = action.payload;
            const index = state.items.findIndex(item => item.id === existingItem.id);
            if (index !== -1) {
              state.items[index] = existingItem;
              state.price += existingItem.price/100;
            }
        },
        removeExistingItem: (state, action) => {
            const existingItem = action.payload;
            const index = state.items.findIndex(item => item.id === existingItem.id);
            if (index !== -1) {
              state.items[index] = existingItem;
              state.price -= existingItem.price/100;
            }
        },

        clearItem:(state)=>{
            state.items=[];
        },
    }
});
export const {addItem,removeItem,clearItem,addExistingItem,removeExistingItem}=cartSlice.actions;

export default cartSlice.reducer;