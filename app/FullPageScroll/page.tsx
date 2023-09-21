"use client";

import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image, { ImageLoaderProps } from "@/node_modules/next/image";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import MountainIMG from "@/public/images/Mountain.jpeg";
import CafeIMG from "@/public/images/Cafe.jpeg";
import FoodIMG from "@/public/images/Food.jpeg";
import OceanIMG from "@/public/images/Ocean.jpeg";
import SkyIMG from "@/public/images/Sky.jpeg";
import { imgLoader } from "@/utils/imgLoader";
import Buttons from "@/components/Buttons";
import Section from "@/components/Section";

export interface IPageObj {
  pageNum: number;
}

const pageObjArray = [
  {
    pageNum: 1,
    src: MountainIMG,
    headerName: "",
    bgColor: "",
    alt: "",
    descTitle: "1",
    descContent1: "11",
    descContent2: "111",
    descContent3: "1111",
  },
  {
    pageNum: 2,
    src: OceanIMG,
    headerName: "",
    bgColor: "",
    alt: "",
    descTitle: "2",
    descContent1: "22",
    descContent2: "222",
    descContent3: "2222",
  },
  {
    pageNum: 3,
    src: SkyIMG,
    headerName: "",
    bgColor: "",
    alt: "",
    descTitle: "3",
    descContent1: "33",
    descContent2: "333",
    descContent3: "3333",
  },
  {
    pageNum: 4,
    src: FoodIMG,
    headerName: "",
    bgColor: "",
    alt: "",
    descTitle: "4",
    descContent1: "44",
    descContent2: "444",
    descContent3: "4444",
  },
  {
    pageNum: 5,
    src: CafeIMG,
    headerName: "",
    bgColor: "",
    alt: "",
    descTitle: "5",
    descContent1: "55",
    descContent2: "555",
    descContent3: "5555",
  },
];

export default function Page() {
  const DIVIDER_HEIGHT = 5;
  const outerRef = useRef<any>();
  const imgLoad = ({ src, width, quality }: ImageLoaderProps) =>
    imgLoader({ src, width, quality });

  const [windowObj, setWindowObj] = useState<Window>();
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const totalNum = pageObjArray.length;
  // 👇 console 찍어보면 length가 5이고 0번 인덱스는 undefined가 출력됨. (이 배열 핸들링할때 1번 인덱스부터 시작해야함)
  const pageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window !== undefined) {
      setWindowObj(window);
    }
  }, []);

  // 페이지 변경 함수
  const handlePageChange = (event: Event) => {
    let scroll = windowObj?.scrollY!;
    for (let i = 1; i <= totalNum; i++) {
      // 스크롤이 해당 섹션에 진입했는지 판단 && 해당 스크롤이 해당 섹션에 머물러 있는지
      if (
        scroll > pageRefs.current[i].offsetTop - windowObj!.outerHeight / 3 &&
        scroll <
          pageRefs.current[i].offsetTop -
            windowObj!.outerHeight / 3 +
            pageRefs.current[i].offsetHeight
      ) {
        setCurrentPageNum(i);
        break;
      }
    }
  };

  // 버튼 클릭
  const handlePointClick = (pageNum: number) => {
    windowObj?.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    windowObj?.addEventListener("scroll", handlePageChange);
    return () => {
      windowObj?.removeEventListener("scroll", handlePageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowObj]);

  return (
    <div ref={outerRef} className="w-full h-full">
      <Header
        pageObjArray={pageObjArray}
        currentPageNum={currentPageNum}
        handlePointClick={handlePointClick}
        headerName={"sss"}
      />
      <Sidebar />

      {/* <main className="relative"> */}
      {pageObjArray.map((item, index) => {
        return (
          <Section
            key={index}
            pageNum={item.pageNum}
            bgColor={item.bgColor}
            window={windowObj!}
            pageRefs={pageRefs}
            src={item.src}
            alt={item.alt}
            loader={imgLoad}
            imgClassName={""}
            imgWidth={1980}
            imgHeight={1080}
            descTitle={item.descTitle}
            descContent1={item.descContent1}
            descContent2={item.descContent2}
            descContent3={item.descContent3}
          />
        );
      })}

      <div className="flex flex-col space-y-4 fixed top-96 right-10 z-10">
        <Buttons
          pageObjArray={pageObjArray}
          currentPageNum={currentPageNum}
          handlePointClick={handlePointClick}
        />
      </div>
      {/* </main> */}

      <FloatingButton />
    </div>
  );
}

{
  /* <div className="absolute w-full top-[13rem] flex flex-col justify-start items-center text-center gap-4">
        <p className="font-medium text-[2rem] text-center">무슨산</p>
        <p className="text-center text-[1rem]">
          낮은 산 아름다운 저수지
          <br />
          sdafadsfdsafasdfdsafsadfdasasdfdsafdsaasdfdsafdsafsdafaads
          <br />
          dsfasfasdfjkl;asdjfkl;asdjlkfadslkfjlkasdfjklasdjfkldsajfklsajklfdsaklfjdsakl
        </p>
      </div> */
}
