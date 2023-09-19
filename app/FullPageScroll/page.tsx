"use client";

import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image, { ImageLoaderProps } from "@/node_modules/next/image";
import React from "react";
import { useEffect, useRef } from "react";
import MountainIMG from "@/public/images/Mountain.jpeg";
import CafeIMG from "@/public/images/Cafe.jpeg";
import FoodIMG from "@/public/images/Food.jpeg";
import OceanIMG from "@/public/images/Ocean.jpeg";
import SkyIMG from "@/public/images/Sky.jpeg";
import { imgLoader } from "@/utills/imgLoader";

export default function Page() {
  const DIVIDER_HEIGHT = 5;
  const outerRef = useRef<any>();
  const imgLoad = ({ src, width, quality }: ImageLoaderProps) =>
    imgLoader({ src, width, quality });

  return (
    <div ref={outerRef} className="w-full h-full">
      <Header />
      <Sidebar />
      <div className="h-[100vh] w-full flex justify-center items-center">
        {/* 이미지를 화면 크기에 맞게 조절하는 작업해야함 */}
        <Image
          className="flex h-[100vh] w-[100vw]"
          loader={imgLoad}
          src={MountainIMG}
          alt="Mountain"
          width={1980}
          height={1080}
          priority
        />
        {/* 텍스트 길이 때문에 휴대폰으로 접속시 헤더가 길어지고 빈공간이 생기는거 같음 / 텍스트를 반응형으로 작업 하거나 텍스트 공간을 지정해줘야함  */}
        <div className="absolute  w-[50vw] top-[12rem] flex flex-col justify-start items-center text-center gap-4">
          <p className="font-medium text-[2rem] text-center">무슨산</p>
          <p className="text-center text-[1rem]">
            낮은 산 아름다운 저수지
            <br />
            sdafadsfdsafasdfdsafsadfdasasdfdsafdsaasdfdsafdsafsdafaads
            <br />
            dsfasfasdfjkl;asdjfkl;asdjlkfadslkfjlkasdfjklasdjfkldsajfklsajklfdsaklfjdsakl
          </p>
        </div>
      </div>
      <Image
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
      />

      <FloatingButton />
    </div>
  );
}
