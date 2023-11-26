"use client";

import Link from "next/link";
import React, {useState} from "react";

const Password = (props: any) => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleUnlock = () => {
    // 패스워드를 여기에서 확인하고 일치하면 페이지를 잠금 해제합니다.
    const correctPassword = "980803";

    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("잘못된 패스워드입니다.");
    }
  };

  return (
    // <div className="w-full h-full">
    <>
      {isUnlocked ? (
        // 페이지가 잠금 해제되었을 때 보이는 내용
        <>{props.inline}</>
      ) : (
        // 페이지가 잠겨있을 때 보이는 내용
        <div className="w-full h-full outline flex justify-center items-center">
          <div className="flex flex-col ">
            <div className="space-y-4">
              <h1 className="text-[20px] text-center">패스워드를 입력하세요</h1>
              <input
                autoFocus
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="p-4 text-[20px]"
              />
            </div>
            <button
              onClick={handleUnlock}
              className="text-[20px] text-center bg-[#9a9a9a1f] p-2 hover:bg-[#9a9a9a29]"
            >
              확인
            </button>
            <Link
              href={"/"}
              className="text-[20px] text-center bg-[#9a9a9a1f] p-2 hover:bg-[#9a9a9a29]"
            >
              <button>취소</button>
            </Link>
          </div>
        </div>
      )}
    </>
    // </div>
  );
};

export default Password;
