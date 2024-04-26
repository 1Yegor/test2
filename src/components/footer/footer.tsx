import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import style from "./footer.module.scss";
export default function Footer({
  countItems,
  setCurrentPage,
}: {
  countItems: number;
  setCurrentPage: (state: number) => void;
}) {
  const [rows, setRows] = useState(10);
  const [first, setFirst] = useState(0);
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
  };

  return (
    <div className={style.wrapper}>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={countItems}
        onPageChange={onPageChange}
      />
    </div>
  );
}
