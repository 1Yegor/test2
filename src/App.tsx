import React, { useState } from "react";
import style from "./App.module.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Modal from "./components/modal/modal";
import { Button } from "primereact/button";

export interface IData {
  id: number;
  isViewed: boolean;
  date: string;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
}

function App() {
  const [data, setData] = useState<IData[]>([
    {
      id: 1,
      date: "2024-04-23",
      importance: "Высокая",
      equipment: "Сервер",
      responsible: "Иванов И.И.",
      message: "Проверить работоспособность сервера",
      isViewed: true,
    },
    {
      id: 2,
      date: "2024-04-24",
      importance: "Средняя",
      equipment: "Принтер",
      responsible: "Петров П.П.",
      message: "Заменить чернила в принтере",
      isViewed: false,
    },
    {
      id: 3,
      date: "2024-04-25",
      importance: "Низкая",
      equipment: "Компьютер",
      responsible: "Сидоров С.С.",
      message: "Проверить работу клавиатуры",
      isViewed: false,
    },
    {
      id: 4,
      date: "2024-04-26",
      importance: "Высокая",
      equipment: "Монитор",
      responsible: "Кузнецов К.К.",
      message: "Проверить подключение монитора",
      isViewed: false,
    },
    {
      id: 5,
      date: "2024-04-27",
      importance: "Средняя",
      equipment: "Модем",
      responsible: "Федоров Ф.Ф.",
      message: "Проверить скорость интернет-соединения",
      isViewed: false,
    },
    {
      id: 6,
      date: "2024-04-28",
      importance: "Низкая",
      equipment: "Сканер",
      responsible: "Михайлов М.М.",
      message: "Проверить работоспособность сканера",
      isViewed: false,
    },
    {
      id: 7,
      date: "2024-04-29",
      importance: "Высокая",
      equipment: "Сетевое оборудование",
      responsible: "Николаев Н.Н.",
      message: "Проверить работоспособность  оборудования",
      isViewed: false,
    },
    {
      id: 8,
      date: "2024-04-30",
      importance: "Средняя",
      equipment: "Телефон",
      responsible: "Соколов С.С.",
      message: "Проверить работоспособность телефона",
      isViewed: false,
    },
    {
      id: 9,
      date: "2024-05-01",
      importance: "Низкая",
      equipment: "Компьютерная мышь",
      responsible: "Белов Б.Б.",
      message: "Проверить работоспособность мыши",
      isViewed: false,
    },
    {
      id: 10,
      date: "2024-05-02",
      importance: "Высокая",
      equipment: "Сервер",
      responsible: "Иванов И.И.",
      message: "Проверить работоспособность сервера",
      isViewed: false,
    },
    {
      id: 11,
      date: "2024-05-02",
      importance: "Высокая",
      equipment: "Сервер",
      responsible: "Иванов И.И.",
      message: "Проверить работоспособность сервера",
      isViewed: false,
    },
    {
      id: 12,
      date: "2024-04-23",
      importance: "Высокая",
      equipment: "Сервер",
      responsible: "Иванов И.И.",
      message: "Проверить работоспособность сервера",
      isViewed: false,
    },
    {
      id: 13,
      date: "2024-04-24",
      importance: "Средняя",
      equipment: "Принтер",
      responsible: "Петров П.П.",
      message: "Заменить чернила в принтере",
      isViewed: false,
    },
    {
      id: 14,
      date: "2024-04-25",
      importance: "Низкая",
      equipment: "Компьютер",
      responsible: "Сидоров С.С.",
      message: "Проверить работу клавиатуры",
      isViewed: false,
    },
    {
      id: 15,
      date: "2024-04-26",
      importance: "Высокая",
      equipment: "Монитор",
      responsible: "Кузнецов К.К.",
      message: "Проверить подключение монитора",
      isViewed: false,
    },
    {
      id: 16,
      date: "2024-04-27",
      importance: "Средняя",
      equipment: "Модем",
      responsible: "Федоров Ф.Ф.",
      message: "Проверить скорость интернет-соединения",
      isViewed: false,
    },
    {
      id: 17,
      date: "2024-04-28",
      importance: "Низкая",
      equipment: "Сканер",
      responsible: "Михайлов М.М.",
      message: "Проверить работоспособность сканера",
      isViewed: false,
    },
    {
      id: 18,
      date: "2024-04-29",
      importance: "Высокая",
      equipment: "Сетевое оборудование",
      responsible: "Николаев Н.Н.",
      message: "Проверить работоспособность  оборудования",
      isViewed: false,
    },
    {
      id: 19,
      date: "2024-04-30",
      importance: "Средняя",
      equipment: "Телефон",
      responsible: "Соколов С.С.",
      message: "Проверить работоспособность телефона",
      isViewed: false,
    },
    {
      id: 20,
      date: "2024-05-01",
      importance: "Низкая",
      equipment: "Компьютерная мышь",
      responsible: "Белов Б.Б.",
      message: "Проверить работоспособность мыши",
      isViewed: false,
    },
    {
      id: 21,
      date: "2024-05-02",
      importance: "Высокая",
      equipment: "Сервер",
      responsible: "Иванов И.И.",
      message: "Проверить работоспособность сервера",
      isViewed: false,
    },
    {
      id: 22,
      date: "2024-05-02",
      importance: "Высокая",
      equipment: "Сервер",
      responsible: "Иванов И.И.",
      message: "Проверить работоспособность сервера",
      isViewed: false,
    },
  ]);
  const dataPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = currentPage * dataPerPage;

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalVisible(true);
  };

  const [searchValue, setSearchValue] = useState("");
  const filterdData = data.filter((el: IData) =>
    el.message.toLowerCase().includes(searchValue.toLowerCase())
  );
  const currentPageData = filterdData.slice(startIndex, endIndex);

  return (
    <div className={style.wrapper}>
      <Header
        data={currentPageData}
        setData={setData}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className={style.container}>
        {!modalVisible && (
          <Button label="Добавить событие" onClick={handleAddEvent} />
        )}

        <Modal
          visible={modalVisible}
          setVisible={setModalVisible}
          data={data}
          setData={setData}
        />
      </div>
      <Footer countItems={filterdData.length} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
