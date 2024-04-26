import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import style from "./modal.module.scss";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { IData } from "../../App";

const Modal = ({
  visible,
  setVisible,
  data,
  setData,
}: {
  visible: boolean;
  setVisible: (state: boolean) => void;
  data: IData[];
  setData: Dispatch<SetStateAction<IData[]>>;
}) => {
  const [formData, setFormData] = useState({
    date: "",
    importance: "",
    equipment: "",
    responsible: "",
    message: "",
  });

  const [dataEror, setDataError] = useState({
    date: false,
    importance: false,
    equipment: false,
    responsible: false,
    message: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setDataError((prev) => ({ ...prev, [name]: false }));
    setFormData({ ...formData, [name]: value });
  };

  const checkErrors = (
    e: React.MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (formData.date.trim() === "") {
      setDataError((prev) => ({ ...prev, date: true }));
    }
    if (formData.importance === "") {
      setDataError((prev) => ({ ...prev, importance: true }));
    }
    if (formData.equipment === "") {
      setDataError((prev) => ({ ...prev, equipment: true }));
    }
    if (formData.responsible === "") {
      setDataError((prev) => ({ ...prev, responsible: true }));
    }
    if (formData.message.trim() === "") {
      setDataError((prev) => ({ ...prev, message: true }));
    }
    if (
      formData.date !== "" &&
      formData.importance !== "" &&
      formData.equipment !== "" &&
      formData.responsible !== "" &&
      formData.message !== ""
    ) {
      handleSubmit(e);
    }
  };
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const newEvent = {
      id: data.length + 1,
      ...formData,
      isViewed: false,
    };

    setData([...data, newEvent]);
    setFormData({
      date: "",
      importance: "",
      equipment: "",
      responsible: "",
      message: "",
    });
    setVisible(false);
  };

  return (
    <div className={visible ? style.visible : style.invisible}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <Button onClick={() => setVisible(false)}>X</Button>
        </div>

        <form onSubmit={checkErrors} className={style.modalBody}>
          <label htmlFor="date">Дата:</label>
          {dataEror.date && (
            <label style={{ color: "red" }} htmlFor="date">
              Введите дату в формате YYYY-MM-DD
            </label>
          )}
          <InputText
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />

          <label htmlFor="importance">Важность:</label>
          {dataEror.importance && (
            <label style={{ color: "red" }} htmlFor="date">
              Это поле не может быть пустым:
            </label>
          )}
          <Dropdown
            id="importance"
            name="importance"
            value={formData.importance}
            options={["Высокая", "Средняя", "Низкая"]}
            onChange={handleInputChange}
          />

          <label htmlFor="equipment">Оборудование:</label>
          {dataEror.equipment && (
            <label style={{ color: "red" }} htmlFor="date">
              Это поле не может быть пустым:
            </label>
          )}
          <Dropdown
            id="equipment"
            name="equipment"
            options={[
              "Сервер",
              "Компьютерная мышь",
              "Телефон",
              "Сетевое оборудование",
              "Сканер",
              "Модем",
              "Монитор",
              "Компьютер",
              "Принтер",
              "Кофейный аппарат",
              "Электронное табло",
            ]}
            value={formData.equipment}
            onChange={handleInputChange}
          />

          <label htmlFor="responsible">Ответственный:</label>
          {dataEror.responsible && (
            <label style={{ color: "red" }} htmlFor="date">
              Это поле не может быть пустым:
            </label>
          )}
          <Dropdown
            id="responsible"
            name="responsible"
            value={formData.responsible}
            options={[
              "Иванов И.И.",
              "Белов Б.Б.",
              "Соколов С.С.",
              "Николаев Н.Н.",
              "Михайлов М.М.",
              "Федоров Ф.Ф.",
              "Кузнецов К.К.",
              "Сидоров С.С.",
              "Петров П.П.",
              "Васильев В.В.",
            ]}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Сообщение:</label>
          {dataEror.message && (
            <label style={{ color: "red" }} htmlFor="date">
              Это поле не может быть пустым:
            </label>
          )}
          <InputTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            cols={30}
          />

          <Button
            type="submit"
            label="Добавить"
            icon="pi pi-check"
            className="p-button-raised p-button-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
