import React, { FC, useContext, useState } from "react";
import Rows from "../RowsLayout/Rows";
import { StateContext } from "../State/State";
import Timer from "../Timer/Timer";
import style from "./TableLayout.module.scss";

const TableLayout: FC = () => {
  const data = useContext(StateContext);

  // const [blocks, setBlocks] = useState({
  //   block1: false,
  //   block2: false,
  //   block3: false,
  //   block4: false,
  // });
  // setInterval(() => {
  //   setBlocks((prev) => ({ ...prev, block1: true }));
  // }, 9000);

  return (
    <div>
      <div className={style.bannerContainer}>
        <span className={style.banner}>
          Уважаемые участники, во время вашего хода вы можете изменить параметры
          торгов, указанных в таблице:
        </span>
      </div>
      <div className={style.tableConteainer}>
        <table className={style.table}>
          <thead>
            <tr className={style.tablebla}>
              <th>ХОД</th>
              <Timer data={data} />
            </tr>
            <tr>
              <th>Параметры и требования</th>
              {data.map((d) => (
                <th key={d.id}>
                  {`Участник № ${d.id}`} <br /> {`${d.userName}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={style.tbody}>
            <Rows data={data} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableLayout;
