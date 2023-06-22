import UserSettings from "./UserSettings";
import { SearchBar } from "./SearchBar";
import {
  portfolioManagerInfo,
  updateSelectedPortfolio,
} from "@features/portofolioManager";
import { useAppDispatch, useAppSelector } from "store/hook";
import PortfolioSelector from "./portfolio/PortfolioSelector";

export default function Header() {
  const portfolios = useAppSelector(portfolioManagerInfo);
  const dispatch = useAppDispatch();
  const onChange = (value: string) => {
    const portfolio = portfolios.portfolios.filter((p) => p.id === value);
    if (portfolio != null && portfolio.length === 1) {
      dispatch(updateSelectedPortfolio(portfolio[0]));
    }
  };
  return (
    <div className="flex items-center h-full w-full">
      <PortfolioSelector />
      <div className="ml-auto">
        <SearchBar />
        <UserSettings />
      </div>
    </div>
  );
}
