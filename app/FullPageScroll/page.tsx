"use client";

import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "@/node_modules/next/image";
import React from "react";
import { useEffect, useRef } from "react";
import MountainIMG from "@/public/images/Mountain.jpeg";
import CafeIMG from "@/public/images/Cafe.jpeg";
import FoodIMG from "@/public/images/Food.jpeg";
import OceanIMG from "@/public/images/Ocean.jpeg";
import SkyIMG from "@/public/images/Sky.jpeg";

// import ReactFullPage from "@fullpag";

export default function Page() {
  const DIVIDER_HEIGHT = 5;
  const outerRef = useRef<any>();

  return (
    <div ref={outerRef} className="w-full h-full">
      <Header />
      <Sidebar />
      <div className="h-[100vh] w-full flex justify-center items-center">
        <Image
          className="flex h-[100vh] w-[100vw]"
          src={MountainIMG}
          alt="Mountain"
          // layout="reponsive"
          width={1980}
          height={1080}
        />
        <div className="absolute h-[100vh] top-[13rem] z-50 flex flex-col justify-start items-center text-center gap-4">
          <p className="font-medium text-[2rem] text-center">무슨산</p>
          <p className="text-center text-[1rem]">
            낮은 산 아름다운 저수지 <br />
            sdafadsfdsafasdfdsafsadfdasasdfdsafdsaasdfdsafdsafsdafaads
            <br />
            dsfasfasdfjkl;asdjfkl;asdjlkfadslkfjlkasdfjklasdjfkldsajfklsajklfdsaklfjdsakl
          </p>
        </div>
      </div>
      <Image
        className="flex h-[100vh] w-[100vw]"
        src={OceanIMG}
        alt="Ocean"
        // layout="reponsive"
        width={1980}
        height={1080}
      />

      <Image
        className="flex h-[100vh] w-[100vw]"
        src={SkyIMG}
        alt="Sky"
        // layout="reponsive"
        width={1980}
        height={1080}
      />
      <Image
        className="flex h-[100vh] w-[100vw]"
        src={FoodIMG}
        alt="Food"
        // layout="reponsive"
        width={1980}
        height={1080}
      />
      <Image
        className="flex h-[100vh] w-[100vw]"
        src={CafeIMG}
        alt="Cafe"
        // layout="reponsive"
        width={1980}
        height={1080}
      />

      <FloatingButton />
    </div>
  );
}
