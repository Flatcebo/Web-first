"use client";

import { useState } from "react";

interface IModalProps {
  onButtonStyle?: string;
  offButtonStyle?: string;
}

export default function Modal(props: IModalProps) {
  const [onModal, setOnModal] = useState<boolean>(false);
  return (
    <div>
      {onModal ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="fixed top-[15%] w-[80vw] h-[70vh] bg-[#767676] text-[20px]">
            <form className="m-[2%]">
              <div className="text-center text-[26px] ">
                <span>Sign Up</span>
              </div>
              {/* Form 1행 */}
              <div className="w-[350px] flex">
                <div className="mr-[5%]">
                  <div className="flex flex-col text-center items-end">
                    <span className="my-5">이름 : </span>
                    <span className="my-5">이메일 : </span>
                    <span className="my-5">전화번호 : </span>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <input type="text" className="my-2 px-1 py-3 rounded-lg" />
                  <input type="email" className="my-2 px-1 py-3 rounded-lg" />
                  <input type="phone" className="my-2 px-1 py-3 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col space-y-[3%]">
                <div>
                  <button
                    type="submit"
                    className="absolute right-[2%] bottom-[2%] text-[white] hover:text-[#00000072]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-end items-end">
              <button
                className={props.offButtonStyle}
                onClick={() => {
                  setOnModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button
            className={props.onButtonStyle}
            onClick={() => {
              setOnModal(true);
            }}
          >
            Modal
          </button>
        </div>
      )}
    </div>
  );
}
