import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stock } from "interfaces/Tickers";
import { RootState } from "store/store";

const initialState: Stock = {
  _id: 0,
  currency: "",
  description: "",
  figi: "",
  mic: "",
  symbol: "",
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    updateStock: (state, action: PayloadAction<Stock | null>) => {
      if (action.payload == null) {
        state = { ...initialState };
      } else {
        state._id = action.payload._id;
        state.currency = action.payload.currency;
        state.description = action.payload.description;
        state.figi = action.payload.figi;
        state.mic = action.payload.mic;
        state.symbol = action.payload.symbol;
      }
    },
  },
});

export const { updateStock} = stockSlice.actions;

export const stockInfo = (state:RootState) => state.stock;

export default stockSlice.reducer;