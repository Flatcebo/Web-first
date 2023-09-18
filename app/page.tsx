export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center">
        {/* <div>
          <span className="text-[white]">근수형 하이요</span>
        </div> */}
        <a href="/FullPageScroll" className="">
          <button className="bg-[#ffffff3f] text-[white] p-10 hover:text-[#9a9a9a29] hover:bg-[#9a9a9a76]">
            Fullpage Web으로 이동
          </button>
        </a>
      </div>
    </div>
  );
}
