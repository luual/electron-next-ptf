import { useEffect } from "react";
import Layout from "../components/Layout";
import Dashboard from "components/Dashboard/Dashboard";

const IndexPage = () => {
  useEffect(() => {}, []);

  const onSayHiClick = () => {};

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <Dashboard />
      {/* <h1>Hello Next.js 👋</h1>
      <div className="grid grid-cols-5">
        <div className="col-span-4">1</div>
        <div className="">
          <PortfolioSynthesis />
          <PortfolioSynthesis />
        </div>
      </div>
      <p>
        <Link href="/about">About</Link>
      </p> */}
    </Layout>
  );
};

export default IndexPage;
