import React from "react";
import style from "./header.module.css";
import Logo from "../../assets/Aasa.png";

const Header = () => {
  return (
    <div className={style.parent}>
      <div className={style.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={style.started}>
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Header;
