import React, { useState } from 'react';
import "./projects.css";
import Img1 from "../../assets/ordering.jpg";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section_title">Projects</h2>
            <span className="section_subtitle">What I Develop</span>

            <div className="projects_container container grid">
                {/* Project 1 */}
                <div className="projects_content">
                    <div className="projects_details">
                        <img src={Img1} alt="" className="project_img" />
                        <h3 className="projects_title">
                            Online Ordering Web Application for Romanteaco Milk Tea Shop
                        </h3>
                    </div>
                    <div className="project-demo">
                        <span
                            className="projects_button"
                            onClick={() => toggleTab(1)}
                        >
                            View More
                            <i className="uil uil-arrow-right projects_button-icon"></i>
                        </span>

                        <span
                            className="projects_button-github"
                            onClick={() => toggleTab(1)}
                        >
                            Github
                            <i className="uil uil-github projects_button-icon"></i>
                        </span>
                    </div>
                    
                    <div
                        className={
                            toggleState === 1
                                ? "projects_modal active-modal"
                                : "projects_modal"
                        }
                    >
                        <div className="projects_modal-content">
                            <i
                                onClick={() => toggleTab(0)}
                                className="uil uil-times projects_modal-close"
                            ></i>
                            <h3 className="projects_modal-title">
                                Online Ordering Web Application for Romanteaco Milk Tea Shop
                            </h3>
                            <p className="projects_modal-description">
                                Developed as our capstone system project that simplifies the
                                ordering process for milk tea shops by managing transactions,
                                automating inventory, and tracking overall sales. It enhances
                                efficiency by reducing manual tasks and ensuring accurate data
                                management.
                            </p>
                            <ul className="projects_modal-projects grid">
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">HTML5</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">CSS</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">JavaScript</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">Bootstrap</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">PHP</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">MySQL</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">Hostinger</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="projects_content">
                    <div className="projects_details">
                        <img src={Img1} alt="" className="project_img" />
                        <h3 className="projects_title">
                            Web-Based Sales Monitoring and Inventory System for Jack Sizzling Avenue
                        </h3>
                    </div>

                    <div className="project-demo">
                        <span
                            className="projects_button"
                            onClick={() => toggleTab(2)}
                        >
                            View More
                            <i className="uil uil-arrow-right projects_button-icon"></i>
                        </span>

                        <span
                            className="projects_button-github"
                            onClick={() => toggleTab(1)}
                        >
                            Github
                            <i className="uil uil-github projects_button-icon"></i>
                        </span>
                    </div>
                    
                    <div
                        className={
                            toggleState === 2
                                ? "projects_modal active-modal"
                                : "projects_modal"
                        }
                    >
                        <div className="projects_modal-content">
                            <i
                                onClick={() => toggleTab(0)}
                                className="uil uil-times projects_modal-close"
                            ></i>
                            <h3 className="projects_modal-title">
                                Web-Based Sales Monitoring and Inventory System for Jack Sizzling Avenue
                            </h3>
                            <p className="projects_modal-description">
                                A Web-Based Sales Monitoring and Inventory System was developed
                                as a freelance developer that integrated digital sales transactions
                                to ensure smooth and error-free processing. All transactions were
                                systematically logged and recorded within the system for accurate
                                and reliable tracking.
                            </p>
                            <ul className="projects_modal-projects grid">
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">HTML5</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">CSS</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">JavaScript</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">Bootstrap</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">PHP</p>
                                </li>
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">MySQL</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
