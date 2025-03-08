import React from "react";
import Showroom from "../../../assets//Showroom.png";
import style from "./one.module.css";

const Section1 = () => {
  return (
    <div className={style.parent}>
      <div className={style.left}>
        <h1>Master the Art of Digital IllusTration</h1>
        <h3>A 4-Week Course Designed for Beginners & Enthuastics </h3>
      </div>
      <div className={style.right}>
        <img src={Showroom} alt="Showroom" />
      </div>
      <div className={style.bottom}>
        <div className={`${style.center} ${style.learn}`}>
          <p>
            Learn to create stunnig digital artwork with step-by-step guidance
            from industry experts No prior Experience required just your
            creativity Enroll now for ₹7,999
          </p>
        </div>
        <div className={style.center2}>
          <div className={style.spot}>
            <p>Secure Your Spot for Just ₹7,999</p>
          </div>
          <div className={style.center1}>
            <p>
              Use a Coupon Code Within 15 minutes to unlock a special bonu pack!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
