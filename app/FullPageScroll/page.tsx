"use client";

import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image, {ImageLoaderProps} from "@/node_modules/next/image";
import React, {useState} from "react";
import {useEffect, useRef} from "react";
import MountainIMG from "@/public/images/Mountain.jpeg";
import CafeIMG from "@/public/images/Cafe.jpeg";
import FoodIMG from "@/public/images/Food.jpeg";
import OceanIMG from "@/public/images/Ocean.jpeg";
import SkyIMG from "@/public/images/Sky.jpeg";
import {imgLoader} from "@/utils/imgLoader";
// import Buttons from "@/components/Buttons";
import Section from "@/components/Section";
import {Buttons} from "@/components/Buttons";

export interface IPageObj {
  pageNum: number;
  headerName: string;
}

const pageObjArray = [
  {
    pageNum: 1,
    src: MountainIMG,
    headerName: "산",
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
    headerName: "바다",
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
    headerName: "하늘",
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
    headerName: "음식",
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
    headerName: "카페",
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
  const imgLoad = ({src, width, quality}: ImageLoaderProps) =>
    imgLoader({src, width, quality});

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

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      // 마우스 휠을 아래로 스크롤할 때 다음 페이지로 이동
      if (currentPageNum < totalNum) {
        handlePointClick(currentPageNum + 1);
      }
    } else if (event.deltaY < 0) {
      // 마우스 휠을 위로 스크롤할 때 이전 페이지로 이동
      if (currentPageNum > 1) {
        handlePointClick(currentPageNum - 1);
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
    // 마우스 휠 이벤트 리스너 등록
    windowObj?.addEventListener("wheel", handleWheel);

    return () => {
      windowObj?.removeEventListener("scroll", handlePageChange);
      // 마우스 휠 이벤트 리스너 제거
      windowObj?.removeEventListener("wheel", handleWheel);
    };
  }, [windowObj, currentPageNum]);

  return (
    <div ref={outerRef} className="w-full h-full">
      <Header
        pageObjArray={pageObjArray}
        currentPageNum={currentPageNum}
        handlePointClick={handlePointClick}
      />

      <Sidebar
        openContentName="Sidebar"
        closedContentName="Closed"
        onButtonStyle="fixed top-16 z-50 bg-[#ffffff50]"
        offButtonStyle="fixed h-screen top-16 z-50 bg-[#ffffff50]"
        onButtonTextStyle="text-[12px] text-[white] p-5 hover:text-[#00000072] hover:bg-[#9a9a9a76]"
        offButtonTextStyle="text-[12px] text-[white] hover:text-[#00000072]"
      />

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

      <div className="flex flex-col space-y-2 fixed h-[100vh] top-[0%] right-[2%] justify-center items-center  z-10">
        <Buttons
          pageObjArray={pageObjArray}
          currentPageNum={currentPageNum}
          handlePointClick={handlePointClick}
          buttonStyle="w-4 h-4 rounded-full cursor-pointer transition-all"
          bgColor
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
