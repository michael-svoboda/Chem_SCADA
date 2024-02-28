import React, { useState } from 'react';
import { Cpu } from 'feather-icons-react/build/IconComponents';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const links = [
    { text: 'Home', route: '/' },
    { text: 'Overview', route: '/overview' },
    { text: 'RW. Proc', route: '/rwproc' },
    { text: 'Electrolyzer', route: '/electrolyzer' },
    { text: 'Oxycombustion Proc', route: '/oxycombustionproc' },
    { text: 'Methanol Synthesis', route: '/methanolsynthesis' },
    { text: 'Controls', route: '/controls' },
  ];

  const isLinkActive = (route) => {
    // Check if the current route matches the link's route
    return window.location.pathname === route;
  };

  return (
    <div style={{ backgroundColor: '#333', color: 'white', height: '60px', width: '100%', display: 'flex', alignItems: 'center', padding: '0 20px', boxShadow: '30 15px 55px rgba(0, 0.5, .5, 0.6)', position: 'fixed', top: '0', left: '0', zIndex: '1', justifyContent: 'space-evenly' }}>
      {/* Generate links dynamically */}
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.route}
          style={{ textDecoration: 'none', color: clickedIndex === index + 1 ? 'orange' : 'white', fontWeight: isLinkActive(link.route) ? 'bold' : 'normal' }}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        >
          <span style={{ cursor: 'pointer', transition: 'font-size 0.2s', fontSize: hoveredIndex === index + 1 ? '1.5rem' : '1rem', fontWeight: hoveredIndex === index + 1 ? 'bold' : 'normal' }}>{link.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default Topbar;
