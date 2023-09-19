export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <div>
          <span className="text-[white]">
            https://velog.io/@pjj186/NextJS%EC%97%90%EC%84%9C-Full-Page-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
          </span>
        </div>
        <a href="/FullPageScroll" className="">
          <button className="bg-[#ffffff3f] text-[white] p-10 hover:text-[#9a9a9a29] hover:bg-[#9a9a9a76]">
            Fullpage Web으로 이동
          </button>
        </a>
      </div>
    </div>
  );
}
