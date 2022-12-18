import React from "react";
import Header from "../Header/Header";
import TableLayout from "../TableLayout/TableLayout";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="layout" />
      <TableLayout />
    </div>
  );
};

export default Layout;
