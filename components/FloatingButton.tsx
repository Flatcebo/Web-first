"use client";

import { useState } from "react";

export default function FloatingButton() {
  const [more, setMore] = useState(false);
  return (
    <div>
      {more ? (
        <div className="fixed z-50 bottom-5 right-5">
          <div className="flex flex-col rounded-full bg-[#ffffff50]">
            <nav className="flex flex-col">
              <button className="p-7 rounded-t-full mb-1 hover:bg-[#9a9a9a49]">
                1
              </button>
              <button className="p-7 mb-1 hover:bg-[#9a9a9a49]">2</button>
              <button className="p-7 mb-1 hover:bg-[#9a9a9a49]">3</button>
              <button className="p-7 mb-1 hover:bg-[#9a9a9a49]">4</button>
            </nav>
            <button
              className="p-9 rounded-b-full hover:bg-[#9a9a9a49]"
              onClick={() => {
                setMore(false);
              }}
            >
              F
            </button>
          </div>
        </div>
      ) : (
        <div className="fixed z-50 bottom-5 right-5">
          <div className="">
            <button
              className="p-7 px-9 rounded-full bg-[#ffffff50]"
              onClick={() => {
                setMore(true);
              }}
            >
              F
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
