import Image, { ImageLoaderProps } from "@/node_modules/next/image";

export default function Header() {
  return (
    <div>
      <header className="fixed w-full top-0 z-50 left-0 bg-[#ffffff50]">
        <div className="flex flex-wrap p-5 items-center justify-center">
          <nav className="w-full flex flex-wrap items-center justify-around">
            <div className="flex ">
              {/* <Image src={""} alt="LOGO" /> */}
              LOGO
            </div>
            <div className=" hover:text-gray-900">
              <button>산</button>
            </div>
            <div className=" hover:text-gray-900">
              <button>바다</button>
            </div>
            <div className=" hover:text-gray-900">
              <button>하늘</button>
            </div>
            <div className=" hover:text-gray-900">
              <button>음식</button>
            </div>
            <div className=" hover:text-gray-900">
              <button>카페</button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
