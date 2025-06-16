import Slider from "react-slick";
import htmlImage from "../assets/Logos/html.png";
import cssImage from "../assets/Logos/css.png";
import tailwindImage from "../assets/Logos/tailwindcss.png";
import javascriptImage from "../assets/Logos/javascript.png";
import reactImage from "../assets/Logos/react.png";
import nodejsImage from "../assets/Logos/nodejs.png";
import expressjsImage from "../assets/Logos/expressjs.png";
import mongodbImage from "../assets/Logos/mongodb.png";
import firebaseImage from "../assets/Logos/firebase.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const singleSkillStyle =
        'border border-[#8245EC]/60 rounded-lg flex flex-col items-center py-2 transform transition-transform duration-300 hover:scale-90';

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const skills = [
        { image: htmlImage, name: "HTML" },
        { image: cssImage, name: "CSS" },
        { image: tailwindImage, name: "Tailwind CSS" },
        { image: javascriptImage, name: "JavaScript" },
        { image: reactImage, name: "React" },
        { image: nodejsImage, name: "Node" },
        { image: expressjsImage, name: "Express" },
        { image: firebaseImage, name: "Firebase" },
        { image: mongodbImage, name: "MongoDB" },
    ];

    return (
        <div className='mb-16 px-4'>
            <div className='text-center' data-aos="fade-down" data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl font-bold text-white inline-block">Skills & Technologies</h2>
                <div className="h-1 w-64 bg-[#8245EC] mx-auto mt-4 mb-6"></div>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {skills.map((skill, index) => (
                        <div className='px-2' key={index}>
                            <div className={singleSkillStyle}>
                                <img src={skill.image} className='w-24 h-24 mb-2 object-contain' alt={skill.name} />
                                <p className='text-xl font-bold text-center'>{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Skills;
