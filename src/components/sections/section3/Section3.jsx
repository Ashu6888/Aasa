import React from "react";
import style from "./three.module.css";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuDatabaseBackup } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { IoIosGitBranch } from "react-icons/io";

const Section3 = () => {
  const data = [
    { text: "Gyms & Fitness Trainers", color: "#E25822", size: "19px" },
    { text: "Doctors & Clinics", color: "#DC143C", size: "13px" },
    { text: "Home-Based Businesses", color: "#32CD32", size: "14px" },
    { text: "Local Shops & Retail Stores", color: "#808080", size: "18px" },
    {
      text: "Startups & Small Tech Businesses",
      color: "#FF4500",
      size: "15px",
    },
    { text: "Bakeries", color: "#FFD700", size: "11px" },
    { text: "Freelancers & Solopreneurs", color: "#FF69B4", size: "14px" },
    { text: "Financial Advisors", color: "#00BFFF", size: "12px" },
    { text: "Artists", color: "#9932CC", size: "13px" },
    {
      text: "Event Planners & Wedding Services",
      color: "#8B4513",
      size: "15px",
    },
    { text: "Lawyers & Legal Services", color: "#2E8B57", size: "12px" },
    { text: "Hotels & Travel Agencies", color: "#D2691E", size: "14px" },
    { text: "Photographers & Videographers", color: "#008B8B", size: "13px" },
    { text: "Restaurants & Cafés", color: "#4169E1", size: "20px" },
    { text: "Accountants", color: "#4B0082", size: "11px" },
    { text: "Coaching Centers & Tutors", color: "#FF7F50", size: "14px" },
    { text: "Interior Designers & Architects", color: "#6A5ACD", size: "13px" },
    { text: "Bands", color: "#DC143C", size: "12px" },
    { text: "NGOs & Social Enterprises", color: "#FF6347", size: "15px" },
    { text: "Home Services", color: "#32CD32", size: "13px" },
  ];

  return (
    <div className={style.parent}>
      <div className={style.top}>
        <div className={style.left}>
          <h3>Is This Right for You?</h3>
          <p>Everybody is fond of Digital Art! You need it too.</p>
        </div>
        <div className={style.right}>
          {data.map((item, index) => (
            <div key={index}>
              <span
                key={index}
                style={{
                  color: item.color,
                  fontSize: item.size,
                  margin: "5px",
                  fontWeight: "bold",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={style.satisfied}>
        <h2>Not SatisFied Yet ?</h2>
        <p>We got you! Here are few extra features</p>
      </div>
      <div className={style.satisfiedcards}>
        <div className={style.cardss}>
          <IoIosGitBranch className={style.icons} />
          <p>
            Digital Painting – Master shading, blending & coloring techniques
          </p>
        </div>
        <div className={style.cardss}>
          <AiTwotoneDollarCircle className={style.icons} />
          <p>Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator</p>
        </div>
        <div className={style.cardss}>
          <IoLogoWhatsapp className={style.icons} />
          <p>Character & Concept Art – Create professionalgrade designs </p>
        </div>
        <div className={style.cardss}>
          <IoNewspaperOutline className={style.icons} />
          <p>
            Portfolio Building – Craft stunning pieces to showcase your skills
          </p>
        </div>
        <div className={style.cardss}>
          <FaComputer className={style.icons} />
          <p>Certificate of Completion – Boost your creative career</p>
        </div>
        <div className={style.cardss}>
          <LuDatabaseBackup className={style.icons} />
          <p>Project-Based Learning – Build a stunning portfolio</p>
        </div>
        <div className={style.cardss}>
          <IoPersonCircleOutline className={style.icons} />
          <p>Live Mentorship – Weekly Q&A sessions with industry pros</p>
        </div>
        <div className={style.center2}>
          <div className={style.booknow}>
            <p>Book Now for ₹79</p>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.bottom1}>
          <h2>Enroll Now for ₹7,999</h2>
        </div>
        <div className={style.bottom2}>
          <div className={style.borders}>
            <p>Secure Your Spot for Just ₹79</p>
          </div>
          <div className={style.borders}>
            <p>Bonus Offer: Apply a coupon code within 15 minutes to unlock:</p>
          </div>
          <div className={style.borders}>
            <p>Exclusive Brush & Texture Pack</p>
          </div>
          <div className={style.borders}>
            <p>Extra Live Q&A Session with Mentors</p>
          </div>
        </div>
        <div className={style.parentdiv}>
          <div className={style.div1}>
            <p>We Offer everything you need at ₹7,999 but wait… 👀</p>
          </div>
          <div className={style.div2}>
            <p>
              Use a Special Code & Unlock a Game-Changing Discount to avail same
              course in a discounted price!
            </p>
          </div>
          <div className={style.center2}>
            <div className={style.center3}>
              <p>Book Now for ₹79</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
