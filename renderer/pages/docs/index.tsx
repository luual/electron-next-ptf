import Layout from "components/Layout";
import Documentation from "./documentation.mdx";

export default function Page({ children }) {
  return (
    <Layout title="Documentation">
      <div className="text-white">
        <Documentation />
      </div>
    </Layout>
  );
}
