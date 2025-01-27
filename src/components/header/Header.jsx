import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  /*============ Change Background Header ============*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*============ Active Link on Scroll ============*/
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      rootMargin: '0px 0px -50% 0px', // Trigger when the section is at the center of the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveNav(id);
    showMenu(false); // Close the menu on link click
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Portfolio
        </a>

        <div className={toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => handleNavClick('#home')}
                className={activeNav === '#home' ? 'nav_link active-link' : 'nav_link'}
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => handleNavClick('#about')}
                className={activeNav === '#about' ? 'nav_link active-link' : 'nav_link'}
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => handleNavClick('#skills')}
                className={activeNav === '#skills' ? 'nav_link active-link' : 'nav_link'}
              >
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#projects"
                onClick={() => handleNavClick('#projects')}
                className={activeNav === '#projects' ? 'nav_link active-link' : 'nav_link'}
              >
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className={activeNav === '#contact' ? 'nav_link active-link' : 'nav_link'}
              >
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close" onClick={() => showMenu(!toggle)}></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
