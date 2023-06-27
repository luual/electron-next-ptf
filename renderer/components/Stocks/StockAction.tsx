import * as Tabs from "@radix-ui/react-tabs";
import "@/styles/inputs.css";
import { useEffect, useState } from "react";
import { OHLC } from "components/charts/Chartdata";

type StockActionProps = {
  data: OHLC[];
};

type BuySellProps = {
  lastPrice: number;
};

const SellBuyComponent = ({ lastPrice }: BuySellProps) => {
  const [total, setTotal] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setTotal(lastPrice * value);
  }, [lastPrice, value]);
  return (
    <div>
      <span>Price: {lastPrice}</span>
      <input
        className="input-std"
        type="number"
        defaultValue={0}
        onChange={(e) => setValue(+e.target.value)}
      />
      <button>Buy</button>
      <div>Total: {total}</div>
    </div>
  );
};

export default function StockAction({ data }: StockActionProps) {
  const [lastPrice, setLastPrice] = useState<number>(0);
  useEffect(() => {
    if (data != null && data.length > 0) {
      setLastPrice(data.slice(-1)[0].close);
    }
  }, [data]);
  return (
    <Tabs.Root defaultValue="buy">
      <Tabs.List className="flex justify-between">
        <Tabs.Trigger
          className="bg-red-400 w-full text-center
        data-[state=active]:bg-red-700"
          value="buy"
        >
          Buy
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-green-400 w-full text-center
        data-[state=active]:bg-green-700"
          value="sell"
        >
          Sell
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="buy">
        <SellBuyComponent lastPrice={lastPrice} />
      </Tabs.Content>
      <Tabs.Content value="sell">asdasd</Tabs.Content>
    </Tabs.Root>
  );
}
