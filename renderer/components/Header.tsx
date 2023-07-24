import UserSettings from "./UserSettings";
import { SearchBar } from "./SearchBar";
import PortfolioSelector from "./portfolio/PortfolioSelector";
import { useEffect, useState } from "react";
import axios from "axios";
import { Stock } from "interfaces/Tickers";
import Image from "next/image";
import pnf from "/public/images/PFN.png";
import APIRequest from "utils/ApiRequest";

export default function Header() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  useEffect(() => {
    APIRequest.GetStocks().then((result) => {
      setStocks(result);
    });
  }, []);
  return (
    <div className="flex items-center h-full w-full">
      <Image className="mx-2" alt="l" src={pnf} width={32} height={32} />
      <PortfolioSelector />
      <div className="ml-auto">
        <SearchBar stocks={stocks} />
        <UserSettings />
      </div>
    </div>
  );
}
