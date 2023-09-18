"use client";

import { useState } from "react";

export default function Sidebar() {
  const [sideOn, setSideOff] = useState(false);
  return (
    <div className="">
      {sideOn ? (
        <div>
          <aside className="fixed h-screen top-16 z-50 bg-[#ffffff50]">
            <div className="flex flex-col p-5">
              <div className="flex top-0 mb-3 justify-end">
                <button
                  className="text-[12px] text-[black] hover:text-[#9a9a9a49]"
                  onClick={() => {
                    setSideOff(false);
                  }}
                >
                  닫기
                </button>
              </div>
              <nav className="">
                <div className="mb-1 hover:text-gray-900 hover:bg-[#9a9a9a49]">
                  <button className="py-3 px-[8vh]">items</button>
                </div>
                <div className="mb-1 hover:text-gray-900 hover:bg-[#9a9a9a49]">
                  <button className="py-3 px-[8vh]">items</button>
                </div>
                <div className="mb-1 hover:text-gray-900 hover:bg-[#9a9a9a49]">
                  <button className="py-3 px-[8vh]">items</button>
                </div>
                <div className="mb-1 hover:text-gray-900 hover:bg-[#9a9a9a49]">
                  <button className="py-3 px-[8vh]">items</button>
                </div>
                <div className="mb-1 hover:text-gray-900 hover:bg-[#9a9a9a49]">
                  <button className="py-3 px-[8vh]">items</button>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      ) : (
        <div>
          <aside className="fixed top-16 z-50 bg-[#ffffff50]">
            <div className="flex">
              <div className="">
                <button
                  className="text-[12px] text-[black] p-5 hover:text-[#9a9a9a49]"
                  onClick={() => {
                    setSideOff(true);
                  }}
                >
                  열기
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
