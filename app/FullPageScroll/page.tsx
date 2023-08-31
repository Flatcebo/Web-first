"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const DIVIDER_HEIGHT = 5;
  const outerRef = useRef<any>();

  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent) => {
      // e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
      console.log(pageHeight);
      // if (deltaY > 0) {
      //   console.log("up");
      // } else {
      //   console.log("down");
      // }

      // console.log(pageHeight, scrollTop);
      // // 현재 페이지 계산
      // const currentPage = Math.floor(scrollTop / pageHeight) + 1;

      // let targetPage;
      // if (deltaY > 0) {
      //   // 스크롤 내릴 때
      //   targetPage = Math.min(currentPage + 1, 3);
      // } else {
      //   // 스크롤 올릴 때
      //   targetPage = Math.max(currentPage - 1, 1);
      // }

      // console.log(`현재 ${currentPage}페이지, ${deltaY > 0 ? "down" : "up"}`);

      // outerRef.current.scrollTo({
      //   top: (targetPage - 1) * pageHeight,
      //   left: 0,
      //   behavior: "smooth",
      // });
    };
    const outerDivRefCurrent = outerRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler, {
      passive: false,
    });
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={outerRef}>
      <div className="flex h-[100vh] justify-center items-center text-[100px] bg-[red]">
        1
      </div>
      <div className="flex h-[100vh] justify-center items-center text-[100px] bg-[yellow]">
        2
      </div>
      <div className="flex h-[100vh] justify-center items-center text-[100px] bg-[blue]">
        3
      </div>
    </div>
  );
}
