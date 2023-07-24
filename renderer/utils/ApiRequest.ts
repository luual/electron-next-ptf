import { Wallet } from "interfaces/Wallets";
import axios from "axios";
import { Stock } from "interfaces/Tickers";
import { User } from "interfaces/users";

export default class APIRequest {
  public static async GetUserWallets(userId:string): Promise<Wallet[] | null> {    
    const result = await axios.get(
      `http://192.168.0.14:5000/api/wallets/users/${userId}`
    );
    console.log(result);
    return result.data;
  }

  public static async GetStocks(): Promise<Stock[]> {
    const stocks = await axios.get("http://192.168.0.14:5000/api/stocks");
    return stocks.data;
  }

  public static async GetUser(): Promise<User> {
    const result = await axios.get("http://192.168.0.14:5000/api/users");
    return result.data;
  }
}
