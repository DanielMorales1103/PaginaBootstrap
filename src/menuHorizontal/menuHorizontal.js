import React, { useState } from 'react';
import './menuHorizontal.css';

export default function MenuHorizontal(){
    const [selectedOption, setSelectedOption] = useState('Home');
  
    const handleClick = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="menu-horizontal">
        <div
          className={`menu-item ${selectedOption === 'Home' ? 'selected' : ''}`}
          onClick={() => handleClick('Home')}>Home</div>
        <div
          className={`menu-item ${selectedOption === 'Perfil' ? 'selected' : ''}`}
          onClick={() => handleClick('Perfil')}>Perfil</div>
        <div
          className={`menu-item ${selectedOption === 'Contact' ? 'selected' : ''}`}
          onClick={() => handleClick('Contact')}>Contact</div>
      </div>
    );
};