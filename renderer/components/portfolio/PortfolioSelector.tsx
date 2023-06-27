import {
  portfolioManagerInfo,
  updateSelectedPortfolio,
} from "@features/portofolioManager";
import { useAppDispatch, useAppSelector } from "store/hook";

export default function PortfolioSelector() {
  const portfolios = useAppSelector(portfolioManagerInfo);
  const dispatch = useAppDispatch();
  const onChange = (value: string) => {
    const portfolio = portfolios.portfolios.filter((p) => p.id === value);
    if (portfolio != null && portfolio.length === 1) {
      dispatch(updateSelectedPortfolio(portfolio[0]));
    } else {
      dispatch(updateSelectedPortfolio(null))
    }
  };
  return (
    <select
      className="w-[250px] rounded-[2px] h-[25px]"
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">-- Select Portfolio --</option>
      {portfolios?.portfolios?.map((ptf, i) => (
        <option key={i} value={ptf.id}>
          {ptf.name}
        </option>
      ))}
    </select>
  );
}
