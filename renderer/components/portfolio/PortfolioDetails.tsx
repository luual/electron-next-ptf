import { updateStock } from "@features/StockSlice";
import { portfolioManagerInfo } from "@features/portofolioManager";
import { LinkNone1Icon } from "@radix-ui/react-icons";
import { StockQuantity } from "interfaces/Tickers";
import { useAppDispatch, useAppSelector } from "store/hook";

type PortfolioItemProps = {
  name: string;
  value: number;
  quantity: number;
};

function PortfolioDetailsItem({ item }: { item: StockQuantity }) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="w-full hover:cursor-pointer"
      onClick={() => {
        console.log("dispatch");
        dispatch(
          updateStock({
            _id: item.stock._id,
            currency: item.stock.currency,
            figi: item.stock.figi,
            mic: item.stock.mic,
            symbol: item.stock.symbol,
            description: item.stock.description,
          })
        );
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
        key={item.stock.description}
      >
        <div className="flex">
          <LinkNone1Icon />
        </div>
        <div>{item.stock.description}</div>
        <span>{item.quantity}</span>
      </div>
    </button>
  );
}

type PortfolioDetailProps = {
  portfolioId: number;
};

export function PortfolioDetailsGenerator({
  portfolioId,
}: PortfolioDetailProps) {
  const portfolio = useAppSelector(portfolioManagerInfo);

  return (
    <div className="overflow-y-auto">
      {portfolio.selectedPortofolio?.stocks?.map((tag: StockQuantity, i) => (
        <PortfolioDetailsItem key={i} item={tag} />
      ))}
    </div>
  );
}
