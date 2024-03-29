import Layout from "components/Layout";
import Documentation from "./documentation.mdx";
import { useAppSelector } from "store/hook";
import { userInfo } from "@features/userSlice";

export default function Page({ children }) {
  const data = useAppSelector(userInfo);
  return (
    <Layout title="Documentation">
      <div className="text-white">
        <Documentation />
      </div>
    </Layout>
  );
}
