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
  ImgClassName: string;
  ImgWidth: number;
  ImgHeight: number;
}

const Section = (props: ISectionProps) => {
  return (
    <div
      ref={(element) => {
        props.pageRefs.current[props.pageNum] = element!;
      }}
      className={`w-full h-full ${props.bgColor}`}
    >
      {/* 여기에 이미지 테크 리팩토링으로 넣으면 됨 */}
      <Image
        src={props.src}
        alt={props.alt}
        loader={props.loader}
        className={`flex h-[100vh] w-[100vw] ${props.ImgClassName}`}
        width={props.ImgWidth}
        height={props.ImgHeight}
      />
      {/* <span>Page {props.pageNum}</span> */}
    </div>
  );
};

export default Section;
