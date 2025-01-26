import React from 'react'
import "./skills.css";
import Img1 from "../../assets/html.png";
import Img2 from "../../assets/css.png";
import Img3 from "../../assets/js.png";
import Img4 from "../../assets/php.png";
import Img5 from "../../assets/bootstrap.png";
import Img6 from "../../assets/hostinger.png";
import Img7 from "../../assets/react.png";
import Img8 from "../../assets/mysql.png";
import Img9 from "../../assets/xampp.png";
import Img10 from "../../assets/vscode.png";

const data = [
    {
        id: 1,
        image: Img1,
        title: "HTML5",
    },
    {
        id: 2,
        image: Img2,
        title: "CSS3",
    },
    {
        id: 3,
        image: Img3,
        title: "JavaScript",
    },
    {
        id: 4,
        image: Img4,
        title: "PHP",
    },
    {
        id: 5,
        image: Img5,
        title: "Bootstrap",
    },
    {
        id: 6,
        image: Img6,
        title: "Hostinger",
    },
    {
        id: 7,
        image: Img7,
        title: "React",
    },
    {
        id: 8,
        image: Img8,
        title: "MySQL",
    },
    {
        id: 9,
        image: Img9,
        title: "XAMPP",
    },
    {
        id: 10,
        image: Img10,
        title: "VSCode",
    },
];

    

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">The Technologies I Use</span>

        <div className="skills_container container grid">
            {data.map(({id, image, title}) => {
                return (
                    <div className="skills_card" key={id}>
                        <img src={image} alt="" className="skills_img" />

                        <h3 className="skills_title">{title}</h3>
                    </div>
                );
            })}
        </div>
    </section>
  )
}

export default Skills
