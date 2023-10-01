import { IPageObj } from "@/app/FullPageScroll/page";
import { Buttons } from "@/components/Buttons";
import Image, { ImageLoaderProps } from "@/node_modules/next/image";
import { cls } from "@/utils/cls";
import Link from "next/link";

// 헤더 버튼이름 바꾸게 하기
interface IButtonsProps {
  pageObjArray: IPageObj[];
  currentPageNum: number;
  handlePointClick: (pageNum: number) => void;
}

export default function Header(props: IButtonsProps) {
  return (
    <>
      <header className="fixed w-full top-0 z-50 left-0 bg-[#ffffff50]">
        <div className="flex flex-wrap p-5 items-center justify-center">
          <nav className="w-full flex flex-wrap items-center justify-around">
            <div className="flex">
              <Link href={"/"}>
                {/* <Image src={""} alt="LOGO" /> */}
                HOME
              </Link>
            </div>
            <Buttons
              pageObjArray={props.pageObjArray}
              currentPageNum={props.currentPageNum}
              handlePointClick={props.handlePointClick}
              buttonStyle="hover:text-gray-400"
              pushName
            />
          </nav>
        </div>
      </header>
    </>
    // <div>
    //   <header className="fixed w-full top-0 z-50 left-0 bg-[#ffffff50]">
    //     <div className="flex flex-wrap p-5 items-center justify-center">
    //       <nav className="w-full flex flex-wrap items-center justify-around">
    //         <div className="flex ">
    //           {/* <Image src={""} alt="LOGO" /> */}
    //           LOGO
    //         </div>
    //         <div className=" hover:text-gray-900">
    //           <button
    //             onClick={() => {
    //               props.firstButton();
    //             }}
    //           >
    //             산
    //           </button>
    //         </div>
    //         <div className=" hover:text-gray-900">
    //           <button
    //             onClick={() => {
    //               props.secondButton();
    //             }}
    //           >
    //             바다
    //           </button>
    //         </div>
    //         <div className=" hover:text-gray-900">
    //           <button
    //             onClick={() => {
    //               props.thirdButton();
    //             }}
    //           >
    //             하늘
    //           </button>
    //         </div>
    //         <div className=" hover:text-gray-900">
    //           <button
    //             onClick={() => {
    //               props.fourthButton();
    //             }}
    //           >
    //             음식
    //           </button>
    //         </div>
    //         <div className=" hover:text-gray-900">
    //           <button
    //             onClick={() => {
    //               props.fifthButton();
    //             }}
    //           >
    //             카페
    //           </button>
    //         </div>
    //       </nav>
    //     </div>
    //   </header>
    // </div>
  );
}
