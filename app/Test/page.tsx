"use client";

import React, {useState} from "react";

const PasswordProtectedPage = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleUnlock = () => {
    // 패스워드를 여기에서 확인하고 일치하면 페이지를 잠금 해제합니다.
    const correctPassword = "1234";

    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("잘못된 패스워드입니다.");
    }
  };

  return (
    <div>
      {isUnlocked ? (
        // 페이지가 잠금 해제되었을 때 보이는 내용
        <div>
          <h1>잠금 해제됨</h1>
          {/* 내용 추가 */}
        </div>
      ) : (
        // 페이지가 잠겨있을 때 보이는 내용
        <div>
          <h1>패스워드를 입력하세요</h1>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleUnlock}>잠금 해제</button>
        </div>
      )}
    </div>
  );
};

export default PasswordProtectedPage;
