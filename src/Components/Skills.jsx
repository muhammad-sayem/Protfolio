import React from 'react';
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

const Skills = () => {
    const singleSkillStyle = 'border border-[#8245EC]/60 rounded-lg flex flex-col items-center py-2 transform transition-transform duration-300 hover:scale-90';

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    return (
        <div className='mb-16'>
            <div className='text-center' data-aos="fade-down"
                data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white inline-block"> Skills & Technologies </h2>
                <div className="h-1 w-64 bg-[#8245EC] mx-auto mt-4 mb-6"></div>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                            <img src={htmlImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> HTML </p>
                        </div>
                    </div>

                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                            <img src={cssImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> CSS </p>
                        </div>
                    </div>

                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                           <img src={tailwindImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> Tailwind CSS </p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                           <img src={javascriptImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> JavaScript </p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                            <img src={reactImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> React </p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                           <img src={nodejsImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> Node </p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                           <img src={expressjsImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> Express </p>
                        </div>
                    </div>

                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                           <img src={firebaseImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> Firebase </p>
                        </div>
                    </div>

                    <div className='px-2'>
                        <div className={singleSkillStyle}>
                           <img src={mongodbImage} className='w-28 h-28 mb-2' alt="" />
                            <p className='text-xl font-bold'> MongoDB </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Skills;