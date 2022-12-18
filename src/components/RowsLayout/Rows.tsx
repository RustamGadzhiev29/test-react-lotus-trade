import React, { FC } from "react";
import style from "./Rows.module.scss";

export const Rows: FC = () => {
  return (
    <>
      <tr>
        <td>
          Наличие комплекса мероприятий, повышающих стандарты качества
          изготовления
        </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Срок изготовления лота, дней</td>
        <td>80</td>
        <td>90</td>
        <td>75</td>
        <td>120</td>
      </tr>
      <tr>
        <td>Гарантийные обязательства, мес</td>
        <td>24</td>
        <td>24</td>
        <td>22</td>
        <td>36</td>
      </tr>
      <tr>
        <td>Условия оплаты</td>
        <td>30%</td>
        <td>100%</td>
        <td>60%</td>
        <td>50%</td>
      </tr>
      <tr>
        <td>Стоимость изготовления лота, руб. (без НДС)</td>
        <td className="text-center">
          <div style={{ color: "blue", fontWeight: "bold" }}>{350000} руб.</div>
          <div style={{ color: "red", fontWeight: "bold" }}>-{50000} руб.</div>
          <div style={{ color: "green", fontWeight: "bold" }}>
            {350000 - 50000} руб.
          </div>
        </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Действия</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </>
  );
};

export default Rows;
