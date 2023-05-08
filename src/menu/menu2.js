import React, { useState } from "react";
import './menu.css';

export default function Menu2() {
    const [showMenu, setShowMenu] = useState(false);
  
    const handleMenuClick = () => {
      setShowMenu(!showMenu);
    };
  
    const handleItemClick = () => {
      setShowMenu(false);
    };
    return (
        <div className="menu-container2">
          <div className="button-container">
            <div className="FirstOption" onClick={handleMenuClick}>v5.3 ⏷</div>
          </div>
          {showMenu && (
            <div className="menu-list">      
                <div className="blockList">
                    <div className="title" onClick={handleItemClick}>v5 relases</div>
                    <div className="option1" onClick={handleItemClick}>Latest (5.3.x) ✔</div>
                    <div className="options" onClick={handleItemClick}>v5.2.3</div>
                    <div className="options" onClick={handleItemClick}>v5.1.3</div>
                    <div className="options" onClick={handleItemClick}>v5.0.3</div>
                </div>
                <div className="blockList">
                    <div className="title" onClick={handleItemClick}>Previous releases</div>
                    <div className="options" onClick={handleItemClick}>v4.6.x</div>
                    <div className="options" onClick={handleItemClick}>v3.4.1</div>
                    <div className="options" onClick={handleItemClick}>v2.3.2</div>
                </div>
                    <div className="options" onClick={handleItemClick}>All versions</div>
            </div>
           
          )}
        </div>
      );
}