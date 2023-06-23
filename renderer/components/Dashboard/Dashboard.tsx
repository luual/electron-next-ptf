import { PerformanceWidget } from "components/widgets/PerformanceWidget";
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
import AreaChart from "components/charts/AreaChart";
import { OHLC, SerieData } from "components/charts/Chartdata";
import CandlestickChart from "components/charts/CandleStickCharts";
import StockInfo from "components/Stocks/StockInfo";
import StockAction from "components/Stocks/StockAction";

export default function Dashboard() {
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);
  const [ticker, setTicker] = useState<string>("");
  const [serieData, setSerieData] = useState<SerieData[]>([]);
  const [OHLCserieData, setOHLCSerieData] = useState<OHLC[]>([]);
  const connectTicker = (ticker: string) => {
    const ws = new WebSocket("ws://localhost:5000/ticker/ohlc");

    ws.onmessage = (event: MessageEvent<string>) => {
      if (websocket != null) {
        websocket.close();
      }

      const config = JSON.parse(event.data) as WebsocketResponse;

      const helper = new ResponseTypeHelper();
      helper.register(3001, (data: TickerData) => {
        setSerieData((old) => [...old, { time: data.time, value: data.price }]);
      });
      helper.register(3002, (data: OHLC) => {
        setOHLCSerieData((old) => [...old, data]);
      });
      helper.register(2002, (data: TickerSubscription) =>
        setTicker(data.symbol)
      );
      helper.compute(config.messageId, config);
    };
    ws.onopen = (_) => {
      setSerieData([]);
      setOHLCSerieData([]);
      const requestedTicker: TickerData = {
        symbol: ticker,
        price: 0,
        time: 213,
      };
      ws.send(JSON.stringify(requestedTicker));
    };
    ws.onclose = () => {
      ws.close();
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
          title="Wallet"
          percentage={0}
          currency="$"
          name=""
          value={100000.08}
        />
        <PerformanceWidget
          title="Portfolio"
          percentage={12.34}
          currency="$"
          name="Value"
          value={432.19}
        />
      </div>
      <div className="grid grid-cols-5 my-2 flex-auto w-full">
        <div className="col-span-4 flex flex-col rounded-[2px]">
          <div className="h-[40px] flex justify-between text-white items-center">
            <div className="font-medium">{ticker}</div>
            <div>Stats:</div>
          </div>
          <CandlestickChart className="flex-auto" data={OHLCserieData} />
          <div className="w-full bg-red-200 rounded-[4px] my-2">
            <PortfolioWidget />
          </div>
        </div>
        <div className="grid grid-flow-row auto-rows-auto ml-2 gap-2">
          <div>
            <PortfolioContainer title="Tags">
              <PortfolioDetailsGenerator
                portfolioId={1}
                loadTicker={connectTicker}
              />
            </PortfolioContainer>
          </div>
          <PortfolioContainer title="Indicators">
            <StockAction />
          </PortfolioContainer>
          <PortfolioContainer title="Indicators">
            <StockInfo />
          </PortfolioContainer>
        </div>
      </div>
    </div>
  );
}
