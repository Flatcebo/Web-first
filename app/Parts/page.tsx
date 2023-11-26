"use client";

import Modal from "@/components/Modal";
import Password from "@/components/Password";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Page() {
  return (
    <Password
      inline={
        <div className="w-[100vw] h-[100vh]">
          <div className="">
            <div className="flex justify-center items-center text-center">
              <Link
                href={"/"}
                className="text-[white] px-12 py-6 bg-[#ffffff50] hover:text-[#00000072] hover:bg-[#9a9a9a76]"
              >
                HOME
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Sidebar
                openContentName="Sidebar"
                closedContentName="Close"
                onButtonStyle="z-50"
                offButtonStyle="fixed h-[80vh] left-[30%] z-50 bg-[#767676]"
                onButtonTextStyle="text-[12px] text-[white] px-10 py-5 hover:text-[#00000072] hover:bg-[#9a9a9a76]"
                offButtonTextStyle="text-[12px] text-[white] hover:text-[#00000072]"
              />
              <Modal
                onButtonStyle="text-[12px] text-[white] px-10 py-5 hover:text-[#00000072] hover:bg-[#9a9a9a76]"
                offButtonStyle="absolute text-[20px] text-[white] hover:text-[#00000072] right-[2%] top-[2%]"
              />
            </div>
          </div>
        </div>
      }
    />
  );
}

// Sidebar buttonStyle = bg-[#ffffff50]
