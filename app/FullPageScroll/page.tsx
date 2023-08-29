"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const outerRef = useRef<any>();

  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;
      const pageHeight = window.innerHeight;
      console.log(deltaY, scrollTop, pageHeight);
    };
    const outerDivRefCurrent = outerRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  console.log("hihi");

  return (
    <div ref={outerRef}>
      <div className="h-[100vh] bg-[red]">1</div>
      <div className="h-[100vh] bg-[yellow]">2</div>
      <div className="h-[100vh] bg-[blue]">3</div>
    </div>
  );
}
