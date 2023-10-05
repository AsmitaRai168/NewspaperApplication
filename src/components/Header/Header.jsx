import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchinputField from "../SeachinputField/SearchinputField";
const Header = () => {
  const [currentData, setCurrentDate] = useState();
  console.log(currentData);
  useEffect(() => {
    const date = new Date(Date.UTC(2023, 0, 4));
    // console.log(date);
    setCurrentDate(date.toUTCString());
  }, []);
  return (
    <div>
      <div className="Header-main-container">
        <div className="header-container">
          <div className="date-time-container">
            <h3 className="date-time-container">{currentData}</h3>
          </div>
          <div className="NewsPaper-logo">
            <h3 className="name-of-newspaper">Kathmandu Daily Post</h3>
          </div>
          <div className="Search-container">
            <SearchinputField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
