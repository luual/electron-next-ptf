import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ToastDemo from "./ui/ToastMessage";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [toastOpen ,setToastOpen] = useState(false);
  
  return (
    <div className="bg-default-bg h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="header">
        <Header />
      </header>
      <ToastDemo trigger={toastOpen}/>
      <div className="main-content mx-[20px]">{children}</div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
