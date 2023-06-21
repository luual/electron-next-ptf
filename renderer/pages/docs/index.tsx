import Layout from "components/Layout";
import Documentation from "./documentation.mdx";
import { useAppSelector } from "store/hook";
import { userInfo } from "@features/users";

export default function Page({ children }) {
  const data = useAppSelector(userInfo);
  return (
    <Layout title="Documentation">
      <div className="text-white">
        <h1>{data?.id ?? "testd"}</h1>
        <Documentation />
      </div>
    </Layout>
  );
}
