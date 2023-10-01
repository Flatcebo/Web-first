import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <h1>Github branch 관리</h1>
      <div>https://cosmosproject.tistory.com/271</div>
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
      </div>
    </div>
  );
}
