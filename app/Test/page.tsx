import { useEffect, useState } from "react";

// Firebase Functions 클라이언트 SDK 초기화 (이미 초기화한 경우 생략)
// import firebase from "firebase/app";
// import "firebase/functions";

// import * as functions from "firebase-functions";

// Firebase 앱 초기화 (이미 초기화한 경우 생략)
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };
// firebase.initializeApp(firebaseConfig);

// Firebase Functions 클라이언트 라이브러리 초기화
// const functions = firebase.functions();

export default function Home() {
  // const [apiResponse, setApiResponse] = useState("");

  // useEffect(() => {
  //   // Firebase Function 호출
  //   const myApi = functions.httpsCallable("myApi");

  //   // 함수 호출
  //   myApi()
  //     .then((result: any) => {
  //       // 외부 API에서 반환한 데이터 사용
  //       const apiData = result.data.message;
  //       setApiResponse(apiData);
  //     })
  //     .catch((error: any) => {
  //       // 오류 처리
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <div>
      <h1>API Response:</h1>
      {/* <p>{apiResponse}</p> */}
    </div>
  );
}
