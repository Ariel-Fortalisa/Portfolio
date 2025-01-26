import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i class="uil uil-brackets-curly about_icon"></i>

            <h3 className="about_title">Development</h3>
            <span className="about_subtitle">Front-end and Back-end</span>
        </div>

        <div className="about_box">
        <i class="uil uil-award-alt about_icon"></i>

            <h3 className="about_title">Education</h3>
            <span className="about_subtitle">Bachelor Degree in Information Technology</span>
        </div>

        <div className="about_box">
        <i class="uil uil-headphones-alt about_icon"></i>
        
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info
