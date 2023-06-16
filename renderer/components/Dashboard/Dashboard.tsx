import { PerformanceWidget } from "components/widgets/PerformanceWidget";
import DashboardChart from "./DashboardChart";
import PortfolioContainer from "components/portfolio/PortfolioContainer";
import { PortfolioDetailsGenerator } from "components/portfolio/PortfolioDetails";
import { useState } from "react";
import {
  TickerData,
  TickerSubscription,
  WebsocketResponse,
} from "interfaces/Tickers";
import { ResponseTypeHelper } from "utils/responses";
import { PortfolioWidget } from "components/portfolio/PortfolioWidget";

export default function Dashboard() {
  const [websocket, setWebsocket] = useState<WebSocket>(null);
  const [ticker, setTicker] = useState<string>("");
  const [dataset, setDataset] = useState<TickerData[]>([]);
  const connect = (ticker: string) => {
    const ws = new WebSocket("ws://localhost:5000/ticker");

    ws.onmessage = (event: MessageEvent<string>) => {
      if (websocket != null) {
        websocket.close();
      }

      const config = JSON.parse(event.data) as WebsocketResponse;

      const helper = new ResponseTypeHelper();
      helper.register(2001, (data: TickerData) =>
        setDataset((old) => [...old, data])
      );
      helper.register(2002, (data: TickerSubscription) =>
        setTicker(data.symbol)
      );
      helper.compute(config.messageId, config);
    };
    ws.onopen = (event) => {
      setDataset([]);
      const requestedTicker: TickerData = {
        symbol: ticker,
        price: 0,
        time: 213,
      };
      ws.send(JSON.stringify(requestedTicker));
    };
    ws.onclose = (event) => {
      console.log("close socket", event);
      setWebsocket(null);
    };

    setWebsocket(ws);
  };

  return (
    <div className="main-content flex flex-col">
      <div className="grid gap-2 grid-cols-4 h-[75px]">
        <PerformanceWidget
          title="Best Performance"
          percentage={12.34}
          currency="$"
          name="Netflix"
          value={432.19}
        />
        <PerformanceWidget
          title="Worst Performance"
          percentage={-12.34}
          currency="$"
          name="Meta"
          value={272.23}
        />
        <PerformanceWidget
          title="Title"
          percentage={12.34}
          currency="$"
          name="Apple"
          value={183.08}
        />
        <PerformanceWidget
          title="Portfolio"
          percentage={12.34}
          currency="$"
          name="Value"
          value={432.19}
        />
      </div>
      <div className="grid grid-cols-5 my-2 h-full w-full">
        <div className="col-span-4">
          <div className="flex flex-col h-full">
            <div className="w-full">
              <DashboardChart ticker={ticker} dataset={dataset} />
            </div>
            <div className="w-full flex-auto bg-red-200 rounded-[4px] my-2">
              <PortfolioWidget />
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row auto-rows-auto ml-2">
          <div className="h-[400px] overflow-y-auto">
            <PortfolioContainer title="Tags">
              <PortfolioDetailsGenerator portfolioId={1} loadTicker={connect} />
            </PortfolioContainer>
          </div>
          <div>
            <PortfolioContainer title="Indicators">
              <div className="text-[13px] leading-6">
                <div className="flex justify-between">
                  <span>Volatility</span>
                  <span>12.4%</span>
                </div>
                <div className="flex justify-between">
                  <span>Place</span>
                  <span>NASDAQ</span>
                </div>
                <div className="flex justify-between">
                  <span>Daily Var.</span>
                  <span>12,23$</span>
                </div>
                <div className="flex justify-between">
                  <span>Capitalization</span>
                  <span>113 Md$</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume</span>
                  <span>6,34Md</span>
                </div>
              </div>
            </PortfolioContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
