import { useEffect } from "react";
import Layout from "../components/Layout";
import Dashboard from "components/Dashboard/Dashboard";

const IndexPage = () => {
  useEffect(() => {}, []);

  const onSayHiClick = () => {};

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <Dashboard />
    </Layout>
  );
};

export default IndexPage;
