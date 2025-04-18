import React from 'react';
import heroImage from "../assets/portfolio bg.png";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const HeroSection = () => {
    const [text] = useTypewriter({
        words: ["Junior Web Developer"],
        loop: 0
    });

    return (
        <div className='mt-24 mb-20 flex flex-col-reverse md:flex-row md:flex gap-x-8'>
            <div className='md:w-1/2 flex flex-col justify-center' data-aos="fade-right"
                data-aos-duration="2000">
                <h2 className='md:text-4xl lg:text-5xl font-bold'> Hello </h2>
                <h3 className='md:text-2xl lg:text-3xl mb-4 font-semibold'> This is <span className='text-[#0f4efc] dark:text-[#00BFFF]'> Md Shahrul Islam Sayem </span> </h3>

                <p className='md:text-xl lg:text-2xl font-bold'> I am a </p>
                <p className='md:text-xl lg:text-2xl font-bold'> {text} <Cursor /> </p>

                <p className='md:text-xl lg:text-lg mt-4'> I develop and design appealing and functional websites. I'm also passionate about modern web technologies and user friendly web design. </p>

                <div className='my-4 flex gap-x-2'>
                    <a href="https://github.com/muhammad-sayem" target='_blank' className="text-[#0f4efc] dark:text-[#00BFFF]"> <FaGithubSquare size={50}></FaGithubSquare> </a>

                    <a href="https://www.linkedin.com/in/md-shahrul-islam-sayem/" target='_blank' className="text-[#0f4efc] dark:text-[#00BFFF]"> <FaLinkedin size={50}></FaLinkedin> </a>

                    <a href="https://www.facebook.com/shahrulislam.sayem/" target='_blank' className="text-[#0f4efc] dark:text-[#00BFFF]"> <FaFacebookSquare size={50}></FaFacebookSquare> </a>
                </div>

                <div>
                    <a href="https://drive.google.com/file/d/1l4EzT3jGcvFnbqi5IYViwtQvhDy447nA/view?usp=sharing" target='_blank'> <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] dark:border-none dark:bg-[#00BFFF] dark:text-black text-2xl px-9 py-4'> Resume </button> </a>
                </div>

            </div>

            <div className='md:w-1/2 flex justify-center' data-aos="fade-left"
                data-aos-duration="2000">
                <img src={heroImage} className='w-36 h-1/2 md:h-2/3 lg:h-full md:w-72 lg:w-96' alt="" />
            </div>
        </div>
    );
};

export default HeroSection;