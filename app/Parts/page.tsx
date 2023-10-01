"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="">
        <div className="flex justify-center items-center text-center ">
          <Link
            href={"/"}
            className="text-[white] px-12 py-6 bg-[#ffffff50] hover:text-[#00000072] hover:bg-[#9a9a9a76]"
          >
            HOME
          </Link>
        </div>
        {/* <h1 className="text-[white]">Sidebar</h1> */}
      </div>
      <Sidebar openContentName="Sidebar" closedContentName="Closed" />
    </div>
  );
}
