"use client";

import React from "react";
import Image, {
  ImageLoaderProps,
  StaticImageData,
} from "@/node_modules/next/image";
import { imgLoader } from "@/utils/imgLoader";

interface ISectionProps {
  pageNum: number;
  bgColor: string;
  window: Window;
  pageRefs: React.MutableRefObject<HTMLDivElement[]>;
  src: StaticImageData | any;
  alt: string;
  loader: ({ src, width, quality }: ImageLoaderProps) => string;
  imgClassName: string;
  imgWidth: number;
  imgHeight: number;
  descTitle: string;
  descContent1: string;
  descContent2: string;
  descContent3: string;
}

const Section = (props: ISectionProps) => {
  return (
    <div
      ref={(element) => {
        props.pageRefs.current[props.pageNum] = element!;
      }}
      className={`flex w-full h-full ${props.bgColor}`}
    >
      {/* 여기에 이미지 테크 리팩토링으로 넣으면 됨 */}
      <Image
        src={props.src}
        alt={props.alt}
        loader={props.loader}
        className={`flex h-[100vh] w-[100vw] ${props.imgClassName}`}
        width={props.imgWidth}
        height={props.imgHeight}
      />
      <div className="absolute flex flex-col w-full mt-[13rem] justify-start items-center text-center gap-4">
        <p className="font-medium text-[2rem] text-center">{props.descTitle}</p>
        <p className="text-center text-[1rem]">
          {props.descContent1}
          <br />
          {props.descContent2}
          <br />
          {props.descContent3}
        </p>
      </div>
    </div>
  );
};

export default Section;
