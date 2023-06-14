import { PerformanceWidget } from "components/widgets/PerformanceWidget";
import DashboardChart from "./DashboardChart";
import PortfolioContainer from "components/portfolio/PortfolioContainer";
import { PortfolioDetailsGenerator } from "components/portfolio/PortfolioDetails";

export default function Dashboard() {
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
          <DashboardChart />
          {/* <div className="bg-red-400 w-full h-full"></div> */}
        </div>
        <div className="grid grid-flow-row auto-rows-auto ml-2">
          <div className="h-[400px] overflow-y-auto">
            <PortfolioContainer title="Tags">
              <PortfolioDetailsGenerator />
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
