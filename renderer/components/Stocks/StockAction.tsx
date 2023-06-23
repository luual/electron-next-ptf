import * as Tabs from "@radix-ui/react-tabs";
import "@/styles/inputs.css";
import { useEffect, useState } from "react";

const SellBuyComponent = () => {
  const [price, setPrice] = useState<number>(1234);
  const [total, setTotal] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setTotal(price * value);
  }, [price, value])
  return (
    <div>
      <span>Price: {price}</span>
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

export default function StockAction() {
  return (
    <Tabs.Root defaultValue="buy">
      <Tabs.List className="flex justify-between">
        <Tabs.Trigger className="bg-red-500 w-full text-center" value="buy">
          Buy
        </Tabs.Trigger>
        <Tabs.Trigger className="bg-green-500 w-full text-center" value="sell">
          Sell
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="buy">
        <SellBuyComponent />
      </Tabs.Content>
      <Tabs.Content value="sell">asdasd</Tabs.Content>
    </Tabs.Root>
  );
}
