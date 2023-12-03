"use client";
import {useState} from "react";

export default function Page() {
  // 총 금액(requird) / 술값(requird or default 0W) / 인원수(requird) / 술안마신 인원수 / 결과값
  // 10만원인데 술값은 3만원 인원은 4명 안마신사람은 1명
  const [total, setTotal] = useState<string>("");
  const [liquorPrice, setLiquorPrice] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [notDrink, setNotDrink] = useState<string>("");
  const [result, setResult] = useState(0);
  const [notDrinkResult, setNotDrinkResult] = useState(0);

  const onChangeTotal = (e: any) => {
    setTotal(e.target.value);
  };
  const onChangeLiquorPrice = (e: any) => {
    setLiquorPrice(e.target.value);
  };
  const onChangePeople = (e: any) => {
    setPeople(e.target.value);
  };
  const onChangeNotDrink = (e: any) => {
    setNotDrink(e.target.value);
  };

  //   console.log(total);

  const numbericTotal = parseFloat(total);
  const numbericLiquorPrice = parseFloat(liquorPrice);
  const numbericPeople = parseFloat(people);
  const numbericNotDrink = parseFloat(notDrink);
  const drinkNotAllResult =
    (numbericTotal - numbericLiquorPrice) / numbericPeople;
  const drinkAllResult =
    drinkNotAllResult +
    numbericLiquorPrice / (numbericPeople - numbericNotDrink);

  // 총금액에서 술값뺀 금액 나누기 인원 | 술값 나누기 인원
  // (total - liquor / people) = 술 안마신 인원 금액
  // ((total - liquor / people) + (liquor / (people - notDrink)))
  //   total = 100,000W / liquor = 40,000W / people = 3 / notDrink = 1

  // console.log((100000 - 40000) / 3 + 40000 / (3 - 1));
  //   console.log((100000 - 40000) / 3);

  //   console.log(afterResult);
  const results = () => {
    if (notDrink === "0") {
      setNotDrinkResult(0);
      //   console.log(drinkNotAllResult);
      //   setNotDrinkResult(drinkNotAllResult);
    } else {
      //   setResult(drinkAllResult);
      setResult(drinkAllResult);
      setNotDrinkResult(drinkNotAllResult);
    }
  };
  //   const notDrinkResults = () => {
  //     if () {

  //     }
  //   }
  console.log(notDrinkResult);

  return (
    <div>
      <div>
        <p>총 금액</p>
        <input
          value={total}
          onChange={onChangeTotal}
          type="text"
          className="text-[white]"
        />
        <p>술값</p>
        <input value={liquorPrice} onChange={onChangeLiquorPrice} />
        <p>총 인원</p>
        <input value={people} onChange={onChangePeople} />
        <p>술 안마신 인원</p>
        <input value={notDrink} onChange={onChangeNotDrink} />

        <button type="submit" onSubmit={results}>
          계산하기
        </button>
        <p>술 마신 인원 : {result}</p>
        <p>술 안마신 인원 : {notDrinkResult}</p>
      </div>
    </div>
  );
}
