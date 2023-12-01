import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

type CartItemProp = {
  gender: ReactNode;
  id: number;
  name: string;
  price: string;
  img: string[];
  quantity: number;
  itemQuantityPrice: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as CartItemProp[],
    totalprice: 0,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProp>) => {
   
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.itemQuantityPrice += parseFloat(action.payload.price);
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          itemQuantityPrice: parseFloat(action.payload.price),
        });
       
      }

      state.totalprice += parseFloat(action.payload.price);
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number,price:string }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;

        item.itemQuantityPrice -= parseFloat(action.payload.price);
        state.totalprice -= parseFloat(action.payload.price)
      }
    },

    increaseQuantity: (
      state,
      action: PayloadAction<{
        price: string;
        id: number;
        quantity: number;
      }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;

        item.itemQuantityPrice += parseFloat(action.payload.price);
        state.totalprice += parseFloat(action.payload.price)
      }
    },

    deleteCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const deletedItem = state.items[index];
        state.totalprice -=
          parseFloat(deletedItem.price) * deletedItem.quantity;
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToCart, decreaseQuantity, deleteCart, increaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
