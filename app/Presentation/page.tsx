"use client";

import Password from "@/components/Password";
import {useState} from "react";

export default function Page() {
  const presentationContents = [
    {
      id: 1,
      title:
        "마인드의 힘은 엄청나게 강력하다. 그 힘을 결코 과소평과해서는 안 된다.",
      desc: "실제로 본인이 마인드 컨트롤을 해보니 불가능한게 없었고, 그 힘이 정말 강력한걸 느꼈다.",
    },
    {
      id: 2,
      title: "근심은 더 많은 부정적인 에너지와 좌절감을 끌어들일 뿐이다.",
      desc: "마인드 컨트롤과 같이 긍정적인 생각은 긍정적인 결과를 만든다고 생각한다.",
    },
    {
      id: 3,
      title: "그들은 가만히 앉아서 아무 일이나 일어나기를 기다린다",
      desc: "본인이 무언가 목표가 있는데도 아무것도 실행하지 않고 운좋게 무언가가 나타나길 바란다면 불가능이라고 생각한다. '부는 내 팔자에 없는 것' 이라고 생각하는 사람이 많은데, 그 사람들 마인드엔 부라는 팔자가 없을 것이다.",
    },
    {
      id: 4,
      title:
        "사람들은 자신이 좋아서 하는 일을 한낱 취미나 심심풀이로 치부할 때가 많다. 그러나 어떤 일에서도 부를 창출할 수 있다.",
      desc: "제 자신도 이런 생각을 가지고 살았던 것에 대해 반성하고 있습니다. 당장 앞에 보이는게 없으니 불안함이 있었지만 이 말 덕에 조금이나마 용기를 얻게 됐습니다.",
    },
    {
      id: 5,
      title: "나는 친구가 내 꿈을 망치게 놔두고 있었다. 이것은 나의 꿈의였다!",
      desc: "본인에게 떠오른 아이디어가 흥분되고 신이 나 심장이 뛴다면 다른 사람의 의견을 신경쓰지 않고 실행해보는게 좋다고 생각한다. ",
    },
    {
      id: 6,
      title:
        "마지막으로, 당신이 끝내주게 멋진 여정을 시작하고 있다는 사실을 잊지 말기를 당부한다.",
      desc: "산 정상에 오르는 것만이 다는 아니다. 등산을 즐기는 것도 중요하다. 부는 성장과 순환의 여정이다.",
    },
  ];

  //   {
  //     id: ,
  //     title: "",
  //     desc: "",
  //   },

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (categoryId: any) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Password
      inline={
        <div className="width-[100%]">
          <div className="justify-center items-center text-center text-[white]">
            <h1 className="text-[30px]">Presentation</h1>
            <h2 className="text-[24px]">부의 원리(밥 프록터)</h2>
            <div className="">
              {presentationContents.map((item: any) => (
                <h3 key={item.id}>
                  {selectedCategory === item.id ? (
                    <>
                      <button
                        className="p-[1%] text-[1.3em] "
                        key={item.id}
                        onClick={() => handleCategoryPress(!item.id)}
                      >
                        {item.id}.&ensp;{item.title}
                      </button>
                      <p className="text-[1.0em] text-[#9a9a9a]">{item.desc}</p>
                    </>
                  ) : (
                    <>
                      <button
                        className="p-[1%] text-[1.3em] border-b
                  "
                        key={item.id}
                        onClick={() => handleCategoryPress(item.id)}
                      >
                        {item.id}.&ensp;{item.title}
                      </button>
                    </>
                  )}
                </h3>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
