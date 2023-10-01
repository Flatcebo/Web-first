"use client";

import { useState } from "react";

interface ISidebarProps {
  openContentName: string;
  closedContentName: string;
  onButtonTextStyle?: string;
  offButtonTextStyle?: string;
  onButtonStyle?: string;
  offButtonStyle?: string;
}

// map 함수를 사용해서 헤더 버튼처럼 배열하나 만들어서 이름 및 성능에 관한 세팅하고 useState의 사용을 최소화 함.
export default function Sidebar(props: ISidebarProps) {
  const [sideOn, setSideOff] = useState<boolean>(false);

  return (
    <div className="">
      {sideOn ? (
        <div>
          <aside className={`${props.offButtonStyle}`}>
            <div className="flex flex-col p-7">
              <div className="flex top-0 mb-3 justify-end">
                <button
                  className={`${props.offButtonTextStyle}`}
                  onClick={() => {
                    setSideOff(false);
                  }}
                >
                  {props.closedContentName}
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
          <aside className={`${props.onButtonStyle}`}>
            <div className="flex">
              <div className="">
                <button
                  className={`${props.onButtonTextStyle}`}
                  onClick={() => {
                    setSideOff(true);
                  }}
                >
                  {props.openContentName}
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
