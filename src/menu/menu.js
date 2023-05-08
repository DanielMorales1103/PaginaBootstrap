import React, { useState } from "react";
import './menu.css';

export default function Menu(props) {
    const [showMenu, setShowMenu] = useState(false);
  
    const handleMenuClick = () => {
      setShowMenu(!showMenu);
    };
  
    const handleItemClick = () => {
      setShowMenu(false);
    };
  
    return (
      <div className="menu-container">
        <div className="button-container">
          <div className="FirstOption" onClick={handleMenuClick}>{props.inicio}</div>
        </div>
        {showMenu && (
          <div className="menu-list">
            {
                props.elements.map(element =>{
                    return <div className="options" onClick={handleItemClick}>{element.modo}</div>
                })
            } 
            </div>
         
        )}
      </div>
    );
  }