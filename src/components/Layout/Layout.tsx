import React from "react";
import Header from "../Header/Header";
import TableLayout from "../TableLayout/TableLayout";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.content}>
      <Header />
      <div />
      <TableLayout />
    </div>
  );
};

export default Layout;
