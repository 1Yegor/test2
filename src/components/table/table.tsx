import React, { Dispatch, SetStateAction, useState } from "react";
import { DataTable, DataTableValue } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import style from "./table.module.scss";
import "./table.css";
import { IData } from "../../App";

export default function TableComponent({
  data,
  setData,
}: {
  data: IData[];
  setData: Dispatch<SetStateAction<IData[]>>;
}) {
  const [selectedRow, setSelectedRow] = useState<IData | null>(null);

  const columns = [
    { id: 1, field: "date", header: "Дата" },
    { id: 2, field: "importance", header: "Важность" },
    { id: 3, field: "equipment", header: "Оборудование" },
    { id: 4, field: "message", header: "Сообщение" },
    { id: 5, field: "responsible", header: "Ответственный" },
  ];

  const onRowClick = (data: DataTableValue) => {
    const rowData = data as IData;

    setSelectedRow(rowData);

    setData((prev: IData[]) =>
      prev.map((item: IData) => {
        if (item.id === rowData.id) {
          item.isViewed = !item.isViewed;
        }
        return item;
      })
    );
  };

  return (
    <div className={style.wrapper}>
      <DataTable
        value={data}
        stripedRows
        showGridlines
        rowClassName={(rowData: IData) => {
          if (rowData.isViewed) {
            return "selected_row_viewed";
          } else {
            return "";
          }
        }}
        onRowClick={(e) => onRowClick(e.data)}
      >
        {columns.map((el) => (
          <Column
            key={el.id}
            sortable
            style={{ width: "20%" }}
            field={el.field}
            header={el.header}
          ></Column>
        ))}
      </DataTable>
    </div>
  );
}
