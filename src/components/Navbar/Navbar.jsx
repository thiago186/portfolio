import React, { useState } from 'react';
import './Navbar.css'; // Assumindo que os estilos estarão em um arquivo separado
import Logo from '../../../logo.png'; // Replace with the path to your logo image

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-nav">
        {['Sobre mim', 'Projetos', 'Contato'].map((section, index) => (
          <li
            key={section}
            className={`nav-item ${activeSection === section.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveSection(section.toLowerCase())}
          >
            {section}
          </li>
        ))}
      </ul>
      <div className="slider">
        <div
          className="slider-indicator"
          style={{
            transform: `translateX(${['Sobre mim', 'Projetos', 'Contato'].indexOf(activeSection) * 100}%)`,
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
