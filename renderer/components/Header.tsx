import Link from "next/link";
import UserSettings from "./UserSettings";
import { SearchBar } from "./SearchBar";

export default function Header() {
  return (
    <div className="flex items-center py-[12px] px-[20px] w-full">
      <div className="w-[190px] bg-slate-200 h-[35px] rounded-[4px]
        inline-flex
        items-center
        text-center
        justify-center">My Portfolio</div>
      <div className="ml-auto">
        <SearchBar />
        <UserSettings />
      </div>
    </div>
  );
}
