import React, { useState } from 'react';
import './menuHorizontal.css';

export default function MenuHorizontal2(){
    const [selectedOption, setSelectedOption] = useState('Home');
  
    const handleClick = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="menu-horizontal2">
        <div
          className={`menu-item2 ${selectedOption === 'Home' ? 'selected2' : ''}`}
          onClick={() => handleClick('Home')}>Home</div>
        <div
          className={`menu-item2 ${selectedOption === 'Perfil' ? 'selected2' : ''}`}
          onClick={() => handleClick('Perfil')}>Perfil</div>
        <div
          className={`menu-item2 ${selectedOption === 'Contact' ? 'selected2' : ''}`}
          onClick={() => handleClick('Contact')}>Contact</div>
      </div>
    );
};