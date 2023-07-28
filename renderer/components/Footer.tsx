import { HomeIcon } from "@radix-ui/react-icons";
import TooltipCard from "./ui/TooltipCard";
import { useState } from "react";

export default function Footer() {
  return (
    <div className="h-full w-full bg-black flex items-center justify-between px-2">
      <div>
        <button className="footer-icon" onClick={() => location.href = '/' }>
          <HomeIcon />
        </button>
        <button className="footer-icon" onClick={() => location.href = '/stocks'}>
          <HomeIcon />
        </button>
        <TooltipCard />
      </div>
      <div className="text-white">
        <span className="animate-slideLeft">Italian oil major Eni buys Neptune Energy for $4.9bn</span>
      </div>
      <div></div>
    </div>
  );
}
