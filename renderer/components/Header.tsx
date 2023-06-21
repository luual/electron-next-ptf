import UserSettings from "./UserSettings";
import { SearchBar } from "./SearchBar";
import {
  portfolioManagerInfo,
  updateSelectedPortfolio,
} from "@features/portofolioManager";
import { useAppDispatch, useAppSelector } from "store/hook";

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
      <select
        className="min-w-[150px] rounded-[2px] h-[25px]"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Portfolio</option>
        {portfolios?.portfolios?.map((ptf, i) => (
          <option key={i} value={ptf.id}>
            {ptf.id}
          </option>
        ))}
      </select>
      <div className="ml-auto">
        <SearchBar />
        <UserSettings />
      </div>
    </div>
  );
}
