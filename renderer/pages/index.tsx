import { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import PopoverDemo from "@/ui/Popover";

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // add a listener to 'message' channel
    // ipc.addListener('message', handleMessage)

    return () => {
      // ipc.removeListener('message', handleMessage)
    };
  }, []);

  const onSayHiClick = () => {
    // ipc.send('message', 'hi from next')
  };

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <p>
        <Link href="/about">About</Link>
      </p>
      <div>
        <PopoverDemo />
      </div>
    </Layout>
  );
};

export default IndexPage;
