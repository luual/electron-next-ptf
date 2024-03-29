import { PerformanceWidget } from "components/widgets/PerformanceWidget";
import PortfolioContainer from "components/portfolio/PortfolioContainer";
import { PortfolioDetailsGenerator } from "components/portfolio/PortfolioDetails";
import { useEffect, useState } from "react";
import {
  TickerData,
  TickerSubscription,
  WebsocketResponse,
} from "interfaces/Tickers";
import { ResponseTypeHelper } from "utils/responses";
import { PortfolioWidget } from "components/portfolio/PortfolioWidget";
import { OHLC, SerieData } from "components/charts/Chartdata";
import AreaChart from "components/charts/AreaChart";
import StockInfo from "components/Stocks/StockInfo";
import StockAction from "components/Stocks/StockAction";
import { useAppSelector } from "store/hook";
import { portfolioManagerInfo, selectedPortfolio } from "@features/portofolioManager";
import { stockInfo } from "@features/StockSlice";
import APIRequest from "utils/ApiRequest";

class Stats {
  High: number;
  Low: number;
  Mean: number;
  Performance: number;

  constructor(OHLC: OHLC[]) {
    const values = OHLC.map((x) => x.close);
    this.High = Math.max(...values);
    this.Low = Math.min(...values);
    this.Mean = values.reduce((prev, cur) => prev + cur, 0) / values.length;
    const perf = values.slice(-1)[0] / values[0];
    this.Performance = (perf - 1) * 100;
  }
}

export default function Dashboard() {
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);
  const [ticker, setTicker] = useState<string>("");
  const [stats, setStats] = useState<Stats | null>();
  const [OHLCserieData, setOHLCSerieData] = useState<OHLC[]>([]);
  const [price, setPrice] = useState<SerieData[]>([])
  const portfolioInfo = useAppSelector(portfolioManagerInfo);
  const portfolio = useAppSelector(selectedPortfolio)
  const selectedStock = useAppSelector(stockInfo);

  useEffect(() => {
    if (selectedStock.description != "") {
      APIRequest.GetLast(selectedStock.description)
      .then(res => {
        const ce = res.map(x => { return {
          value: x.last,
          time: x.date
        }})
        setPrice(ce);
      });
      // connectTicker(selectedStock.description);
    }
  }, [selectedStock]);

  const connectTicker = (ticker: string) => {
    const ws = new WebSocket("ws://127.0.0.1:6200/ticker/ohlc");
    setOHLCSerieData([]);
    setPrice([]);

    ws.onmessage = (event: MessageEvent<string>) => {
      if (websocket != null) {
        websocket.close();
      }

      const config = JSON.parse(event.data) as WebsocketResponse;

      const helper = new ResponseTypeHelper();
      helper.register(3002, (data: OHLC) => {
        setOHLCSerieData((old) => [...old, data]);
        setPrice((old) => [...old, { time: data.time, value: data.close }])
      });
      helper.register(2002, (data: TickerSubscription) =>
        setTicker(data.symbol)
      );
      helper.compute(config.messageId, config);
    };
    ws.onopen = (_) => {
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

  useEffect(() => {
    setStats(new Stats(OHLCserieData));
  }, [OHLCserieData]);

  return (
    <div className="main-content flex flex-col">
      <div className="grid gap-2 grid-cols-4 h-[5rem]">
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
          value={portfolio?.cash ?? 0}
        />
        <PerformanceWidget
          title="Portfolio"
          percentage={12.34}
          currency="$"
          name="Value"
          value={432.19}
        />
      </div>
      <div className="my-2 flex-auto w-full md:grid md:grid-cols-5">
        <div className="col-span-4 flex flex-col rounded-[2px]">
          <div className="h-[40px] flex justify-between text-white items-center">
            <div className="font-medium">{selectedStock?.description}</div>
            <div>
              Statistics: Max: {stats?.High.toFixed(2)} Min:{" "}
              {stats?.Low.toFixed(2)} Mean: {stats?.Mean.toFixed(2)} Perf:{" "}
              {stats?.Performance.toFixed(2)}%
            </div>
          </div>
          {/* <CandlestickChart className="z-0 flex-auto" data={OHLCserieData} /> */}
          <AreaChart className="z-0 flex-auto" data={price} />
          <div className="w-full bg-white rounded-[4px] my-2">
            <PortfolioWidget />
          </div>
        </div>
        <div className="grid grid-flow-row auto-rows-auto ml-2 gap-2">
          <PortfolioContainer
            title={portfolioInfo?.selectedPortofolio?.name ?? ""}
          >
            <PortfolioDetailsGenerator portfolioId={1} />
          </PortfolioContainer>
          <PortfolioContainer title="Buy/Sell">
            <StockAction data={OHLCserieData} />
          </PortfolioContainer>
          <PortfolioContainer title="Indicators">
            <StockInfo />
          </PortfolioContainer>
        </div>
      </div>
    </div>
  );
}
