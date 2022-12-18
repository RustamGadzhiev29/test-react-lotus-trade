import React, { FC } from "react";
import style from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerIconContainer}>
        Ход торгов{" "}
        <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</b>
      </div>
    </header>
  );
};

export default Header;
