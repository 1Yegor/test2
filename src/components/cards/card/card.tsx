
import React, { Dispatch, SetStateAction, useState } from "react";
import style from "./card.module.scss";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { IData } from "../../../App";

export default function CardComponent({ el,setData }: { el: IData ,setData: Dispatch<SetStateAction<IData[]>>;}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleClick = () => setData((prev: IData[]) => {
    const updatedData = prev.map((item: IData) => {
      if (item.id === el.id) { 
        item.isViewed = !item.isViewed;
      }
  
      return item;
    });
  
    return updatedData;
  });
  return (
    <div className={style.wrapper}>
      <button onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur}>
        <Card
          className={focused ? style.focused : style.card}
          style={
            el.isViewed ? { background: "lightblue" } : { background: "#fff" }
          }
        >
          <div className={style.container}>
            <div className={style.infoWrapper}>
              <div className={style.infoHeaders}>
                <p className="m-0">Дата</p>
                <p className="m-0">Важность</p>
                <p className="m-0">Оборудование</p>
                <p className="m-0">Сообщение</p>
              </div>

              <div className={style.infoData}>
                <p className="m-0">{el.date}</p>
                <p className="m-0">{el.importance}</p>
                <p className="m-0">{el.equipment}</p>
                <p className="m-0">{el.message}</p>
              </div>
            </div>

            <div className={style.photo}>
              <Avatar  image={`/images/${el.responsible}.jpg`} size="xlarge" shape="circle" />
              <div>{el.responsible}</div>
            </div>
          </div>
        </Card>
      </button>
    </div>
  );
}
