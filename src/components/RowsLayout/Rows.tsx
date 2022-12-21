import React, { FC } from "react";
import { userType } from "../State/State";
// import style from "./Rows.module.scss";
type PropsType = {
  data: Array<userType>;
};
export const Rows: FC<PropsType> = ({ data }) => {
  return (
    <>
      <tr>
        <td>
          Наличие комплекса мероприятий, повышающих стандарты качества
          изготовления
        </td>
        {data.map((d) => (
          <td key={d.id}>{d.parameters.activity}</td>
        ))}
      </tr>
      <tr>
        <td>Срок изготовления лота, дней</td>
        {data.map((d) => (
          <td key={d.id}>{d.parameters.term}</td>
        ))}
      </tr>
      <tr>
        <td>Гарантийные обязательства, мес</td>
        {data.map((d) => (
          <td key={d.id}>{d.parameters.guarantee}</td>
        ))}
      </tr>
      <tr>
        <td>Условия оплаты</td>
        {data.map((d) => (
          <td key={d.id}>{d.parameters.payment}</td>
        ))}
      </tr>
      <tr>
        <td>Стоимость изготовления лота, руб. (без НДС)</td>
        {data.map((d) => (
          <td key={d.id}>
            <div style={{ color: "blue", fontWeight: "bold" }}>
              {d.parameters.price[0]} руб.
            </div>
            <div style={{ color: "red", fontWeight: "bold" }}>
              {d.parameters.price[1]} руб.
            </div>
            <div style={{ color: "green", fontWeight: "bold" }}>
              {d.parameters.price[2]} руб.
            </div>
          </td>
        ))}
      </tr>
      <tr>
        <td>Действия</td>
        {data.map((d) => (
          <td> {d.parameters.action}</td>
        ))}
      </tr>
    </>
  );
};

export default Rows;
