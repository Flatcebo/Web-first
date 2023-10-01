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
        <div className="w-full h-full items-center justify-center flex">
          <div className="fixed top-[15%] w-[80vw] h-[70vh] bg-[#ffffff50] outline">
            <form></form>
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
