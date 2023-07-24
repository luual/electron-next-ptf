import { StockQuantity } from "./Tickers";

export type Wallet = {
    _id: string;
    userId: string;
    name: string;
    stocks: StockQuantity[]
}