import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <h1>Github branch 관리</h1>
      <div>https://cosmosproject.tistory.com/271</div>
      <div className="flex flex-col justify-center items-center text-center">
        <Link
          href="/FullPageScroll"
          className="w-[20vw] bg-[#ffffff3f] text-[white] p-10  hover:text-[#9a9a9a29] hover:bg-[#9a9a9a76]"
        >
          Fullpage Web
        </Link>
        <Link
          href="/Parts"
          className="w-[20vw] bg-[#ffffff3f] text-[white] p-10 hover:text-[#9a9a9a29] hover:bg-[#9a9a9a76]"
        >
          Parts
        </Link>
      </div>
    </div>
  );
}
