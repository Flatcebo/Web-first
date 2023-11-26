import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="flex">
        <Link
          href={"/"}
          className="text-[white] px-12 py-6 bg-[#ffffff50] hover:text-[#00000072] hover:bg-[#9a9a9a76]"
        >
          HOME
        </Link>
      </div>
      <div>
        <p className="text-[white]">
          10 24 화 / Flatlist 작업 완료하지 못하고 넘어감
        </p>
        <p className="text-[white]">
          10 25 수 / HOME TopBarHeight 수정하면서 좀 더 있어보이게 디자인하기
        </p>
      </div>
    </div>
  );
};

export default Page;
