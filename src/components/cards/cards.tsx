import React, { Dispatch, SetStateAction } from "react";
import style from "./cards.module.scss";
import CardComponent from "./card/card";
import { IData } from "../../App";

export default function Cards({
  data,
  setData,
}: {
  data: IData[];
  setData: Dispatch<SetStateAction<IData[]>>;
}) {
  return (
    <div className={style.wrapper}>
      {data.map((el: IData) => (
        <CardComponent key={el.id} setData={setData} el={el} />
      ))}
    </div>
  );
}
