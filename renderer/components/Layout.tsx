import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { Avatars } from "@/ui/Avatar";
import { PopoverButton } from "./ui/Popover";
import Link from "next/link";
import DropdownMenuDemo, { DropdownImageButton } from "./ui/DropdownButton";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="bg-default-bg h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Header />
    </header>
    <div className="mx-[20px]">{children}</div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
