import { useEffect } from "react";
import Layout from "../components/Layout";
import Dashboard from "components/Dashboard/Dashboard";

const IndexPage = () => {
  return (
    <Layout title="PFN Index">
      <Dashboard />
    </Layout>
  );
};

export default IndexPage;
