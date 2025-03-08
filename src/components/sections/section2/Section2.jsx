import React from "react";
import style from "./section2.module.css";
import { BsGlobe } from "react-icons/bs";
import { IoReloadOutline } from "react-icons/io5";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaAt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";

const Section2 = () => {
  return (
    <>
      <div className={style.parent}>
        <h2>Without Proper Training You Might:</h2>
        <div className={style.cards}>
          <div className={style.card1}>
            <p>Struggle with complex software tools</p>
          </div>
          <div className={style.card2}>
            <p>Feel stuck without structured learning</p>
          </div>
          <div className={style.card3}>
            <p>❌</p>
            <p>Miss out on monetizing your skills</p>
          </div>
        </div>
      </div>
      <div className={style.course}>
        <div className={style.first}>
          <h2>With This Course, You Get:</h2>
        </div>
        <div className={style.coursecards}>
          <div className={style.cardss}>
            <BsGlobe className={style.icons} />
            <p>
              Hands-on Lessons – Learn digital painting, shading & composition
            </p>
          </div>
          <div className={style.cardss}>
            <IoReloadOutline className={style.icons} />
            <p>Tool Mastery – Master Procreate, Photoshop, & Illustrator </p>
          </div>
          <div className={style.cardss}>
            <AiTwotoneDollarCircle className={style.icons} />
            <p>Exclusive Resource Pack – Brushes, templates & textures </p>
          </div>
          <div className={style.cardss}>
            <IoNewspaperOutline className={style.icons} />
            <p>Live Mentorship – Weekly Q&A sessions with industry pros. </p>
          </div>
          <div className={style.cardss}>
            <CiLocationOn className={style.icons} />
            <p>Project-Based Learning – Build a stunning portfolio </p>
          </div>
          <div className={style.cardss}>
            <FaAt className={style.icons} />
            <p>Certificate of Completion – Boost your creative career</p>
          </div>
          <div className={style.cardss}>
            <FaBook className={style.Book} />
            <p>Community Access – Network with fellow artists.</p>
          </div>
        </div>
        <div className={style.center2}>
          <div className={style.Bookbtn}>
            <p>Book Now at ₹49</p>
          </div>
        </div>
        <div className={style.video}>
          <BsPlayCircle className={style.play} />
        </div>
        <div className={style.agecards}>
          <div className={style.aditi}>
            <h4>Aditi Verma</h4>
            <p>22</p>
            <p>
              I always wanted to learn digital art, but tutorials were
              confusing. This course made everything so simple! Now, I m taking
              commissions online!
            </p>
          </div>
          <div className={style.rajesh}>
            <h4>Rajesh Khanna</h4>
            <p>30</p>
            <p>
              Switching from traditional art to digital felt overwhelming, but
              this course changed everything! The structured lessons helped me
              master Procreate in weeks!
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Section2;
