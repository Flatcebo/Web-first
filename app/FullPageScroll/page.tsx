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
  // bgColor: string;
  // src?: any;
}

const pageObjArray = [
  { pageNum: 1, src: MountainIMG, bgColor: "", alt: "" },
  { pageNum: 2, src: OceanIMG, bgColor: "", alt: "" },
  { pageNum: 3, src: SkyIMG, bgColor: "", alt: "" },
  { pageNum: 4, src: FoodIMG, bgColor: "", alt: "" },
  { pageNum: 5, src: CafeIMG, bgColor: "", alt: "" },
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
      <Header />
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
            ImgClassName={""}
            ImgWidth={1980}
            ImgHeight={1080}
          />
        );
      })}
      <div className="absolute w-full top-[13rem] flex flex-col justify-start items-center text-center gap-4">
        <p className="font-medium text-[2rem] text-center">무슨산</p>
        <p className="text-center text-[1rem]">
          낮은 산 아름다운 저수지
          <br />
          sdafadsfdsafasdfdsafsadfdasasdfdsafdsaasdfdsafdsafsdafaads
          <br />
          dsfasfasdfjkl;asdjfkl;asdjlkfadslkfjlkasdfjklasdjfkldsajfklsajklfdsaklfjdsakl
        </p>
      </div>

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
  /* <div className="h-[100vh] w-full flex justify-center items-center"> */
}
{
  /* 이미지를 화면 크기에 맞게 조절하는 작업해야함 */
}
{
  /* <Image
          className="flex h-[100vh] w-[100vw]"
          loader={imgLoad}
          src={MountainIMG}
          alt="Mountain"
          width={1980}
          height={1080}
          priority
        /> */
}
{
  /* 텍스트 길이 때문에 휴대폰으로 접속시 헤더가 길어지고 빈공간이 생기는거 같음 / 텍스트를 반응형으로 작업 하거나 텍스트 공간을 지정해줘야함  */
}
{
  /* <div className="absolute  w-[50vw] top-[13rem] flex flex-col justify-start items-center text-center gap-4">
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
{
  /* </div> */
}
{
  /* <Image
        className="flex h-[100vh] w-[100vw]"
        loader={imgLoad}
        src={OceanIMG}
        alt="Ocean"
        // layout="fixed"
        width={1980}
        height={1080}
        priority
      />

      <Image
        className="flex h-[100vh] w-[100vw]"
        loader={imgLoad}
        src={SkyIMG}
        alt="Sky"
        // layout="reponsive"
        width={1980}
        height={1080}
        priority
      />
      <Image
        className="flex h-[100vh] w-[100vw]"
        loader={imgLoad}
        src={FoodIMG}
        alt="Food"
        // layout="reponsive"
        width={1980}
        height={1080}
        priority
      />
      <Image
        className="flex h-[100vh] w-[100vw]"
        loader={imgLoad}
        src={CafeIMG}
        alt="Cafe"
        // layout="reponsive"
        width={1980}
        height={1080}
        priority
      /> */
}
