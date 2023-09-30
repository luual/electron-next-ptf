import DashboardChart from "components/Dashboard/DashboardChart";
import Layout from "components/Layout";

export default function Responsive() {
  return (
    <Layout>
      <div className="main-content flex flex-col">
          <div className="bg-green-200 h-[75px]">HEader</div>
          <div className=" grid grid-cols-4 h-full w-full">
            <div className="col-span-3">
            </div>
            <div className="bg-blue-700 grid gap-2 grid-flow-row">
                <div className="bg-blue-200"></div>
                <div className="bg-blue-300"></div>
                <div className="bg-blue-400"></div>
            </div>
          </div>
      </div>
    </Layout>
  );
}
