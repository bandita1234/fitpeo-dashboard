import React, { useState } from "react";
import "./sidebar.css";

//Icons
import { RxDashboard } from "react-icons/rx";
import { HiOutlineCube } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiHandCoinsFill } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { GiNestedHexagons } from "react-icons/gi";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import my_img from "../../assets/bandita_img.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleCrossClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="wrapper">
      <button onClick={handleClick} className="sidebar_btn">
        <GiHamburgerMenu size={24}/>
      </button>
      <div className={`sidebar ${isOpen ? "sidebar_open" : "sidebar_close"}`}>
        <div className="sidebar_heading">
          <GiNestedHexagons size={24} />
          <h2>Dashboard</h2>
        </div>

        <div className="sidebarItems_container">
          <div className="sidebar_items first_item">
            <div>
              <RxDashboard /> <p className="">Dashboard</p>
            </div>
            {/* <BiRightArrow /> */}
          </div>
          <div className="sidebar_items">
            <div>
              <HiOutlineCube /> <p>Product</p>
            </div>
            <BiRightArrow />
          </div>
          <div className="sidebar_items">
            <div>
              <AiOutlineUsergroupAdd /> <p>Customers</p>
            </div>
            <BiRightArrow />
          </div>
          <div className="sidebar_items">
            <div>
              <PiHandCoinsFill /> <p>Income</p>
            </div>
            <BiRightArrow />
          </div>
          <div className="sidebar_items">
            <div>
              <BiSolidOffer /> <p>Promote</p>
            </div>
            <BiRightArrow />
          </div>
          <div className="sidebar_items">
            <div>
              <BiHelpCircle /> <p> Help</p>
            </div>
            <BiRightArrow />
          </div>
        </div>

        <div className="sidebar_footer_main">
          <div className="sidebar_footer">
            <div className="sidebar_footer_img">
              <img src={my_img} alt="" />
            </div>
            <div>
              <p>Bandita</p>
              <p className="paragraph">Web Developer</p>
            </div>
          </div>
          <div>
            <MdOutlineKeyboardArrowDown/>
          </div>
        </div>

        <button onClick={handleCrossClick} className="sidebar_closebtn">
          <RxCross2 size={24}/>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
