import React, { useState } from "react";
import './menu.css';

export default function Menu3(props) {
    const [showMenu, setShowMenu] = useState(false);
  
    const handleMenuClick = () => {
      setShowMenu(!showMenu);
    };
  
    const handleItemClick = () => {
      setShowMenu(false);
    };
  
    return (
      <div className="menu-container3">
        <div className="button-container3">
          <div className="FirstOption" onClick={handleMenuClick}>{props.inicio}</div>
        </div>
        {showMenu && (
          <div className="menu-list3">
            {
                props.elements.map(element =>{
                    return <div className="options3" onClick={handleItemClick}>{element.modo}</div>
                })
            } 
            </div>
         
        )}
      </div>
    );
  }