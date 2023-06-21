import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export type PortfolioManager = {
  userId: string;
  portfolios: Portfolio[];
  selectedPortofolio: Portfolio | null;
};

export type Portfolio = {
  id: string;
  userId: string;
  tickers: MiniTickerMetaData[];
};

export type MiniTickerMetaData = {
  symbol: string;
  quantity: number;
};

const initialState: PortfolioManager = {
  userId: "",
  portfolios: [],
  selectedPortofolio: null,
};

const portfolioManagerSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    updatePortfolio: (state, action: PayloadAction<Portfolio>) => {
      if (state.portfolios === null || state.portfolios.length === 0) {
        state.portfolios = [action.payload];
      } else {
        const portfolio = state.portfolios.filter(
          (x) => x.id === action.payload.id
        );
        if (portfolio.length === 1) {
          portfolio[0].tickers = action.payload.tickers;
          portfolio[0].id = action.payload.id;
          portfolio[0].userId = action.payload.userId;
        } else {
          state.portfolios.push(action.payload);
        }
      }
    },
    updateUserIdPortfolio: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    updateSelectedPortfolio: (state, action: PayloadAction<Portfolio>) => {
        state.selectedPortofolio = action.payload;
    }
  },
});

export const { updatePortfolio, updateUserIdPortfolio, updateSelectedPortfolio } =
  portfolioManagerSlice.actions;
export const portfolioManagerInfo = (state: RootState) =>
  state.portfolioManager;

export default portfolioManagerSlice.reducer;
