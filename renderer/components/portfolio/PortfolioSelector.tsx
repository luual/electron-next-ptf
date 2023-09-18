import portofolioManager, {
  portfolioManagerInfo,
  selectedPortfolio,
  updateSelectedPortfolio,
} from "@features/portofolioManager";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "store/hook";

export default function PortfolioSelector() {
  const portfolios = useAppSelector(portfolioManagerInfo);
  const portfolio = useAppSelector(selectedPortfolio)
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    console.log(value);
    const portfolio = portfolios.portfolios.filter((p) => p._id === value);
    if (portfolio != null && portfolio.length === 1) {
      dispatch(updateSelectedPortfolio(portfolio[0]));
    } else {
      //@ts-ignore
      dispatch(updateSelectedPortfolio(null))
    }
  };
  return (
    <select
      className="w-[250px] rounded-[2px] h-[25px]"
      onChange={(event) => onChange(event.target.value)}
      value={portfolio?._id}
    >
      <option value="">-- Select Portfolio --</option>
      {portfolios?.portfolios?.map((ptf, i) => (
        <option key={i} value={ptf._id}>
          {ptf.name}
        </option>
      ))}
    </select>
  );
}
