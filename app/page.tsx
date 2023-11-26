"use client";

import Link from "next/link";

export default function Home() {
  // const myFunction = functions.https.onRequest(async (req, res) => {
  //   await res.status(200).json(res);
  //   console.log(res);
  // });
  // const response = await fetch(
  //   "http://127.0.0.1:5001/host-portf/us-central1/helloWorld"
  // )
  //   .then((res: any) => res.json())
  //   .then((data: any) => console.log(data));
  // console.log("hhh");

  return (
    <div className="w-full h-full">
      {/* <h1>Github branch 관리</h1>
      <div>https://cosmosproject.tistory.com/271</div> */}
      <div>
        난제 : Firebase hosting할때 BackEnd를 위해서 app/api 경로 생성시 deploy
        안됨(firebase functions를 이용해야 하는걸로 추정됨) = functions로
        server통신
      </div>
      {/* {myFunction.map(()=> {

      })} */}
      <div className="flex flex-col justify-center items-center text-center text-[16px]">
        <Link
          href="/FullPageScroll"
          className="w-[20vw] h-[10vh] bg-[#ffffff3f] text-[white] py-10 hover:text-[#00000072] hover:bg-[#9a9a9a76] sm:text-[0.8em] md:text-[1em] lg:text-[1em] xl:text-[1em]"
        >
          Fullpage Web
        </Link>
        <Link
          href="/Parts"
          className="w-[20vw] bg-[#ffffff3f] text-[white] py-10 hover:text-[#00000072] hover:bg-[#9a9a9a76] sm:text-[0.8em] md:text-[1em] lg:text-[1em] xl:text-[1em]"
        >
          Parts
        </Link>
        <Link
          href="/Todo"
          className="w-[20vw] bg-[#ffffff3f] text-[white] py-10 hover:text-[#00000072] hover:bg-[#9a9a9a76] sm:text-[0.8em] md:text-[1em] lg:text-[1em] xl:text-[1em]"
        >
          Todo
        </Link>
        <Link
          href="/Presentation"
          className="w-[20vw] bg-[#ffffff3f] text-[white] py-10 hover:text-[#00000072] hover:bg-[#9a9a9a76] sm:text-[0.8em] md:text-[1em] lg:text-[1em] xl:text-[1em]"
        >
          Leading PT
        </Link>
        {/* <Link
          href="/Map"
          className="w-[20vw] bg-[#ffffff3f] text-[white] py-10 hover:text-[#00000072] hover:bg-[#9a9a9a76] sm:text-[0.8em] md:text-[1em] lg:text-[1em] xl:text-[1em]"
        >
          Map
        </Link>
        <Link
          href="/Test"
          className="w-[20vw] bg-[#ffffff3f] text-[white] py-10 hover:text-[#00000072] hover:bg-[#9a9a9a76] sm:text-[0.8em] md:text-[1em] lg:text-[1em] xl:text-[1em]"
        >
          Test
        </Link> */}
      </div>
    </div>
  );
}
