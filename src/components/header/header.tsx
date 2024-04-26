import React from "react";
import style from "./header.module.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import Table from "../table/table";
import Cards from "../cards/cards";
import { IData } from "../../App";
import { Dispatch, SetStateAction } from "react";

export default function Header({
  data,
  setSearchValue,
  setData,
  searchValue,
}: {
  data: IData[];
  setSearchValue: (state: string) => void;
  setData:  Dispatch<SetStateAction<IData[]>>;
  searchValue: string;
}) {
  const handleButtonClick = () => {
    setSearchValue("");
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={style.wrapper}>
      <div>
        <TabView>
          <TabPanel header="Таблица">
            <Table data={data} setData={setData} />
          </TabPanel>
          <TabPanel header="Карточки">
            <Cards data={data} setData={setData} />
          </TabPanel>
        </TabView>
      </div>
      <div className={style.input_wrapper}>
        <InputText
          value={searchValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Введите текст"
        />
        <Button label="очистить" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
