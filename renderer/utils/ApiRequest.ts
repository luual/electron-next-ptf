import { Wallet } from "interfaces/Wallets";
import axios from "axios";
import { LastPrice, Stock, Transaction } from "interfaces/Tickers";
import { User } from "interfaces/users";

const API_SERVER = "127.0.0.1:6200"

export default class APIRequest {
  public static async GetUserWallets(userId: string): Promise<Wallet[] | null> {
    const result = await axios.get(
      `http://${API_SERVER}/api/wallets/users/${userId}`
    );
    return result.data;
  }

  public static async GetStocks(): Promise<Stock[]> {
    const stocks = await axios.get(`http://${API_SERVER}/api/stocks`);
    return stocks.data;
  }

  public static async GetUser(): Promise<User> {
    const result = await axios.get(`http://${API_SERVER}/api/users`);
    return result.data;
  }

  public static async GetTransaction(walletId: string): Promise<Transaction[]> {
    const result = await axios.get(
      `http://${API_SERVER}/api/transactions/${walletId}`
    );
    return result.data
  }

  public static async GetLast(symbol: string, depth: number | null = null): Promise<LastPrice[]> {
    if (depth == null) {
      const result = await axios.get(
        `http://${API_SERVER}/api/lasts/${symbol}`
      )
      return result.data
    }
    const result = await axios.get(
      `http://${API_SERVER}/api/lasts/${depth}/${symbol}`
    )
    return result.data
  }

}
