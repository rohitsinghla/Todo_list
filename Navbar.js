import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownButtonRef.current &&
      !dropdownButtonRef.current.contains(event.target) &&
      dropdownMenuRef.current &&
      !dropdownMenuRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="panel">
        <div 
          className="panel-all " 
          id="dropdown-button" 
          ref={dropdownButtonRef} 
          onClick={toggleDropdown}
        >
          <i className="fa-solid fa-bars">All</i>
          
        </div>
        <div className="panel-option " >
          <a href='/' >
          <i class="fa-solid fa-user fa-xl" style={{color:'#ffffff'}}/>
            
</a>
          <a href='/'>
          <i class="fa-solid fa-envelope fa-xl" style={{color:'#ffffff'}}></i>
          </a>
          <a href='/'>
          <i class="fa-solid fa-gear fa-xl"  style={{color:'#ffffff'}}></i>
          </a>
        </div>
      </div>

      <div 
        className={`dropdown-menu ${dropdownVisible ? 'show-dropdown' : ''}`} 
        id="dropdown-menu" 
        ref={dropdownMenuRef}
      >
       <a href="/">Dashborad</a>
        <a href="/">My Todo list</a>
     <a href="/">Messages</a>
     <a href="/">Report Us </a>
     <a href="/">Contact Us </a>
     <a href="/">Serives </a>
        </div>
    </>
  );
}
