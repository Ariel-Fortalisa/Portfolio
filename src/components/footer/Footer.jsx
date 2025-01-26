import React from 'react'
import "./footer.css";

const Footer = () => {
  return (   
    <footer className="footer">
        <div className="footer_container container">
        <h1 className="footer_title">Portfolio</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>

                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.facebook.com/fortalisaariel/" className="footer_social-link" target="_blank">
                    <i class="uil uil-facebook-f"></i>
                </a>

                <a href="https://github.com/Ariel-Fortalisa" className="footer_social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>

                <a href="https://www.linkedin.com/in/ariel-fortalisa-4a8b79318/" className="footer_social-link" target="_blank">
                    <i class="uil uil-linkedin-alt"></i>
                </a> 
            </div>

            <span className="footer_copy">
                &#169; 2025 Ariel Fortalisa. All rights reserved
            </span> 
        </div>
    </footer>
  )
}

export default Footer
