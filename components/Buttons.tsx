import { IPageObj } from "@/app/FullPageScroll/page";
import { cls } from "@/utils/cls";

interface IButtonsProps {
  pageObjArray: IPageObj[];
  currentPageNum: number;
  handlePointClick: (pageNum: number) => void;
  buttonStyle: string;
  buttonName?: string[];
  bgColor?: boolean;
}

export function Buttons(props: IButtonsProps) {
  // const buttonNames= ["aa", "bb",'cc']
  return (
    <>
      {props.pageObjArray.map((item, index) => {
        return (
          <div key={item.pageNum}>
            <button
              className={cls(
                props.buttonStyle,
                props.bgColor
                  ? props.currentPageNum === item.pageNum
                    ? "bg-black"
                    : "bg-gray-400"
                  : props.currentPageNum === item.pageNum
                  ? "text-gray-500"
                  : ""
              )}
              onClick={() => {
                props.handlePointClick(item.pageNum);
              }}
            >
              {props.buttonName}
            </button>
          </div>
        );
      })}
    </>
  );
}
