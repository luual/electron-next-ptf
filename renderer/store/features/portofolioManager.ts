import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wallet } from "interfaces/Wallets";
import { RootState } from "store/store";

export type Wallets = {
  userId: string;
  portfolios: Wallet[];
  selectedPortofolio: Wallet | null;
};

export type MiniTickerMetaData = {
  symbol: string;
  quantity: number;
};

const initialState: Wallets = {
  userId: "",
  portfolios: [],
  selectedPortofolio: null,
};

const portfolioManagerSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    updatePortfolio: (state, action: PayloadAction<Wallet>) => {
      if (state.portfolios === null || state.portfolios.length === 0) {
        state.portfolios = [action.payload];
      } else {
        const portfolio = state.portfolios.filter(
          (x) => x._id === action.payload._id
        );
        if (portfolio.length === 1) {
          portfolio[0].name = action.payload.name;
          portfolio[0]._id = action.payload._id;
          portfolio[0].userId = action.payload.userId;
        } else {
          state.portfolios.push(action.payload);
        }
      }
    },
    clearPortfolio: (state, action: PayloadAction) => {
        state.userId = "",
        state.selectedPortofolio = null;
        state.portfolios = [];
    },
    updateUserIdPortfolio: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    updateSelectedPortfolio: (state, action: PayloadAction<Wallet>) => {
        state.selectedPortofolio = action.payload;
    }
  },
});

export const { updatePortfolio, updateUserIdPortfolio, updateSelectedPortfolio, clearPortfolio } =
  portfolioManagerSlice.actions;

export const portfolioManagerInfo = (state: RootState) =>
  state.portfolioManager;

export default portfolioManagerSlice.reducer;
