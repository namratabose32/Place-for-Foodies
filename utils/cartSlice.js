import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
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
            toast.success(`Item added to cart`);
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
            toast.success(`Item quantity increased`);
        },
        removeExistingItem: (state, action) => {
            const existingItem = action.payload;
            const index = state.items.findIndex(item => item.id === existingItem.id);
            if (index !== -1) {
              state.items[index] = existingItem;
              state.price -= existingItem.price/100;
              toast.success(`Item quantity decreased`);
            }
        },

        clearItem:(state)=>{
            state.items=[];
            state.price=0;
            toast.success(`Cart cleared`);
        },
    }
});
export const {addItem,removeItem,clearItem,addExistingItem,removeExistingItem}=cartSlice.actions;

export default cartSlice.reducer;