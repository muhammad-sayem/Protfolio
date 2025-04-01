import React from 'react';

const About = () => {
    return (
        <div className="shadow-[0px_4px_12px_rgba(0,0,0,0.4)] rounded-xl px-8 md:px-16 py-6 md:py-8 mb-16">
            <div className='text-center' data-aos="fade-down" data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#0F4EFC] inline-block ">About Me</h2>
                <div className="h-1 w-28 bg-[#0F4EFC] mx-auto mt-1 mb-4"></div>
            </div>

            <div className='' data-aos="fade-up" data-aos-duration="2000">
                <p className='text-left text-xl md:text-lg mb-4'> Hi! 👋 I'm Md Shahrul Islam Sayem, a <span className='font-bold text-[#0F4EFC]'>Junior Web Developer</span>. I'm passionate about becoming a <span className='font-bold text-[#0F4EFC]'>MERN Stack Developer</span> and fully dedicated to putting in the effort to achieve my goal. </p>

                <h3 className='text-left text-xl md:text-2xl font-bold mb-2'> My Journey to Programming and Web Development </h3>
                <p className='text-left text-xl md:text-lg mb-4'> I started my programming journey with dedication after entering university. Back then, I learned C and C++ and used them for competitive programming. After spending about a year in that field, I felt that I should start working on real-life projects. So, I shifted my focus to development. After that, I started exploring web development and MERN stack development and gradually developed a strong interest in them. Then, I began learning and truly enjoying the process. </p>

                <h3 className='text-left text-xl md:text-2xl font-bold mb-2'> The type of work I enjoy </h3>
                <p className='text-left text-xl md:text-lg mb-4'> I enjoy exploring various aspects of web development. Additionally, I love designing websites beautifully and adding useful features. I appreciate both the creative and technical challenges of web development, always striving to enhance user experience through visually appealing designs and also focus on building functional, interactive elements that improve the usability of the websites I create. </p>

                <h3 className='text-left text-xl md:text-2xl font-bold mb-2'> My work approach </h3>
                <p className='text-left text-xl md:text-lg'> I believe in writing clean, efficient code and continuously improving my skills to stay updated with industry trends. And strive to follow best practices in every project, ensuring scalability and maintainability. I also prioritize learning new tools and technologies to keep up with the ever-evolving world of web development. </p>

            </div>
        </div>
    );
};

export default About;