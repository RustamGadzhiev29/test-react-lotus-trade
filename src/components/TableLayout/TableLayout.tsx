import React, { FC } from "react";
import Rows from "../RowsLayout/Rows";
import Timer from "../Timer/Timer";
import style from "./TableLayout.module.scss";

const TableLayout: FC = () => {
  return (
    <div>
      <div className={style.banner}>
        <div>
          Уважаемые участники, во время вашего хода вы можете изменить параметры
          торгов, указанных в таблице
        </div>
      </div>
      <div className={style.tableConteainer}>
        <table className={style.table}>
          <thead>
            <Timer />
            <tr>
              <th>Параметры и требования</th>
              <th>Участник №1</th>
              <th>Участник №2</th>
              <th>Участник №3</th>
              <th>Участник №4</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            <Rows />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableLayout;
