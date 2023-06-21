import {
  MiniTickerMetaData,
  portfolioManagerInfo,
} from "@features/portofolioManager";
import { LinkNone1Icon } from "@radix-ui/react-icons";
import { increment, selectCount } from "store/features/slices";
import { useAppDispatch, useAppSelector } from "store/hook";

type PortfolioItemProps = {
  name: string;
  value: number;
  quantity: number;
};

function PortfolioDetailsItem({
  item,
  loadTicker,
}: {
  item: MiniTickerMetaData;
  loadTicker: (ticker: string) => void;
}) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="w-full hover:cursor-pointer"
      onClick={() => {
        loadTicker(item.symbol);
        dispatch(increment());
      }}
    >
      <div
        className="
      flex
      justify-between
      text-mauve12 text-[13px] 
      leading-[18px] 
      mt-2.5 pt-2.5 
      border-t 
    border-t-mauve6
    hover:text-blue-700"
        key={item.symbol}
      >
        <div className="flex">
          <LinkNone1Icon />
        </div>
        <div>{item.symbol}</div>
        <span>{item.quantity}</span>
      </div>
    </button>
  );
}

type PortfolioDetailProps = {
  portfolioId: number;
  loadTicker: (ticker: string) => void;
};

export function PortfolioDetailsGenerator({
  portfolioId,
  loadTicker,
}: PortfolioDetailProps) {
  const portfolio = useAppSelector(portfolioManagerInfo);

  return (
    <div>
      {portfolio.selectedPortofolio?.tickers?.map(
        (tag: MiniTickerMetaData, i) => (
          <PortfolioDetailsItem key={i} item={tag} loadTicker={loadTicker} />
        )
      )}
    </div>
  );
}
