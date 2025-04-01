import React from 'react';
import htmlImage from "../assets/Logos/html.png";
import cssImage from "../assets/Logos/css.png";
import tailwindImage from "../assets/Logos/tailwindcss.png";
import javascriptImage from "../assets/Logos/javascript.png";
import reactImage from "../assets/Logos/react.png";
import nodejsImage from "../assets/Logos/nodejs.png";
import expressjsImage from "../assets/Logos/expressjs.png";
import mongodbImage from "../assets/Logos/mongodb.png";
import firebaseImage from "../assets/Logos/firebase.png";
import cppImage from "../assets/Logos/cpp.png";

const Skills = () => {
    return (
        <div className='text-center shadow-[0px_4px_12px_rgba(0,0,0,0.4)] rounded-xl px-12 py-8 mb-16'>
            <div className='text-center' data-aos="fade-down"
                data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#0F4EFC] inline-block">Skills and Technologies</h2>
                <div className="h-1 w-28 bg-[#0F4EFC] mx-auto mt-1 mb-6"></div>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10' data-aos="fade-up" data-aos-duration="2000">
                <img src={htmlImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={cssImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={tailwindImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={javascriptImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={reactImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={nodejsImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={expressjsImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={mongodbImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={firebaseImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
                <img src={cppImage} className='w-28 transition-transform duration-300 hover:scale-150' alt="" />
            </div>
        </div>
    );
};

export default Skills;