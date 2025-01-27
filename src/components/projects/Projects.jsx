import React, { useState } from "react";
import "./projects.css";
import Img1 from "../../assets/ordering.jpg";
import Img2 from "../../assets/ordering(2).jpg";
import Img3 from "../../assets/ordering(3).jpg";
import Img4 from "../../assets/ordering(4).jpg";
import Img5 from "../../assets/ordering(5).jpg";
import Img6 from "../../assets/pos.jpg";
import Img7 from "../../assets/pos(2).jpg";
import Img8 from "../../assets/pos(3).jpg";
import Img9 from "../../assets/pos(4).jpg";
import Img10 from "../../assets/pos(5).jpg";

const Projects = () => {
    const projects = [
        {
            title: "Online Ordering Web Application for Romanteaco Milk Tea Shop",
            description:
                "Developed as our capstone system project that simplifies the ordering process for milk tea shops by managing transactions, automating inventory, and tracking overall sales.",
            images: [Img1, Img2, Img3, Img4, Img5],
            technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Hostinger"], 
        },
        {
            title: "Web-Based Sales Monitoring and Inventory System for Jack Sizzling Avenue",
            description:
                "A Web-Based Sales Monitoring and Inventory System was developed as a freelance developer that integrated digital sales transactions to ensure smooth and error-free processing.",
            images: [Img6, Img7, Img8, Img9, Img10],
            technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"], 
        },
    ];
    

    const [currentSlides, setCurrentSlides] = useState(
        projects.map(() => 0) // Initialize each project's slide index to 0
    );
    const [toggleState, setToggleState] = useState(0);

    const handleNextSlide = (projectIndex, slides) => {
        setCurrentSlides((prevSlides) =>
            prevSlides.map((slide, index) =>
                index === projectIndex ? (slide + 1) % slides.length : slide
            )
        );
    };

    const handlePrevSlide = (projectIndex, slides) => {
        setCurrentSlides((prevSlides) =>
            prevSlides.map((slide, index) =>
                index === projectIndex ? (slide - 1 + slides.length) % slides.length : slide
            )
        );
    };

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section_title">Projects</h2>
            <span className="section_subtitle">What I Develop</span>

            <div className="projects_container container grid">
                {projects.map((project, index) => (
                    <div className="projects_content" key={index}>
                        {/* Slideshow */}
                        <div className="projects_details">
                            <div className="slideshow">
                                <div
                                    className="slideshow_inner"
                                    style={{
                                        transform: `translateX(-${currentSlides[index] * 100}%)`,
                                        width: `${project.images.length * 100}%`, // Adjust width dynamically
                                    }}
                                >
                                    {project.images.map((img, imgIndex) => (
                                        <img
                                            src={img}
                                            alt={`Slide ${imgIndex}`}
                                            className="project_img"
                                            key={imgIndex}
                                        />
                                    ))}
                                </div>
                                <button
                                    className="slideshow_button prev"
                                    onClick={() => handlePrevSlide(index, project.images)}
                                >
                                    &#10094;
                                </button>
                                <button
                                    className="slideshow_button next"
                                    onClick={() => handleNextSlide(index, project.images)}
                                >
                                    &#10095;
                                </button>
                            </div>
                            <h3 className="projects_title">{project.title}</h3>
                        </div>

                        {/* Buttons */}
                        <div className="project-demo">
                            <span
                                className="projects_button"
                                onClick={() => toggleTab(index + 1)}
                            >
                                View More
                                <i className="uil uil-arrow-right projects_button-icon"></i>
                            </span>

                            <span
                                className="projects_button-github"
                                onClick={() => window.open("https://github.com", "_blank")}
                            >
                                GitHub
                                <i className="uil uil-github projects_button-icon"></i>
                            </span>
                        </div>

                        {/* Modal */}
                        <div
                            className={
                                toggleState === index + 1
                                    ? "projects_modal active-modal"
                                    : "projects_modal"
                            }
                        >
                            <div className="projects_modal-content">
                                <i
                                    onClick={() => toggleTab(0)}
                                    className="uil uil-times projects_modal-close"
                                ></i>
                                <h3 className="projects_modal-title">{project.title}</h3>
                                <p className="projects_modal-description">{project.description}</p>
                                <ul className="projects_modal-projects grid">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li className="projects_modal-project" key={techIndex}>
                                            <i className="uil uil-check-circle projects_modal-icon"></i>
                                            <p className="projects_modal-info">{tech}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
