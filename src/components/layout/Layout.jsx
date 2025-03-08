import React from "react";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ flexDirection: "column" }}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
