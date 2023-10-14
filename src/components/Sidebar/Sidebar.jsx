import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleCrossClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={handleClick} className="sidebar_btn">Open</button>
      <div
        className={`sidebar ${isOpen? 'sidebar_open': 'sidebar_close'}`}
      >
        <button onClick={handleCrossClick} className="sidebar_btn">
            close
        </button>
      </div>
    </>
  );
};

export default Sidebar;
