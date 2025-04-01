import React from 'react';
import project1Image from "../assets/Project Images/project1 image.png";
import project2Image from "../assets/Project Images/project2 image.png";
import project3Image from "../assets/Project Images/project3 image.png";

const MyProjects = () => {
    return (
        <div className='mb-16'>
            <div className='text-center' data-aos="fade-up"
                data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F4EFC] inline-block mb-1">My Projects</h2>
                <div className="h-1 w-28 bg-[#0F4EFC] mx-auto mt-1 mb-6"></div>
            </div>

            <div>
                {/* Project 1 */}
                <div className='lg:flex gap-4 shadow-[0px_4px_12px_rgba(0,0,0,0.4)] rounded-xl mb-12'>

                    <div className='w-full lg:w-1/2' data-aos="fade-right"
                        data-aos-duration="2000">
                        <img src={project1Image} className='w-full h-full p-10' alt="" />
                    </div>

                    <div className='w-full lg:w-1/2 p-10' data-aos="fade-left"
                        data-aos-duration="2000">
                        <h3 className='text-[#0F4EFC] text-3xl font-bold mb-2'> Web Horizon </h3>

                        <p className='text-lg mb-6'> Web Horizon is a platform where users can discover and share websites. It allows users to submit new websites, like existing ones, and post reviews. The platform includes user authentication, roles for normal users, moderators, and admins, along with a website moderation system to ensure quality content. Additionally, a payment system is integrated for subscriptions.The platform fosters a community-driven approach, helping users find and promote high-quality websites efficiently.</p>

                        <h4 className='text-[#0F4EFC] text-2xl font-bold mb-2'> Technologies Used </h4>
                        <p className='text-xl font-bold mb-6'> React JS | Node JS | Express JS | MongoDB | Firebase | Tailwind CSS | DaisyUI </p>

                        <div className=''>
                            <div className='flex gap-x-2'>
                                <a href="https://web-horizon-final.netlify.app/" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Live Site </button>
                                </a>
                                <a href="https://github.com/muhammad-sayem/Web-Horizon-Client" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Client Side Github </button>
                                </a>
                                <a href="https://github.com/muhammad-sayem/Web-Horizon-Server" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Server Side Github </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---------------------------- */}

                {/* Project 2 */}
                <div className='lg:flex gap-8 shadow-[0px_4px_12px_rgba(0,0,0,0.4)] rounded-xl mb-8'>

                    <div className='w-full lg:w-1/2' data-aos="fade-right"
                        data-aos-duration="2000">
                        <img src={project2Image} className='w-full h-full p-10' alt="" />
                    </div>

                    <div className='w-full lg:w-1/2 p-10' data-aos="fade-left"
                        data-aos-duration="2000">
                        <h3 className='text-[#0F4EFC] text-3xl font-bold mb-2'> Artifacts Atlas </h3>

                        <p className='text-lg mb-6'> Artifacts Atlas involves creating a web application for tracking historical artifacts. The application will allow users to browse artifacts, view details, and add their own entries. The system also allows users to like artifacts and keep track of their own contributions. The application provides a user-friendly interface for managing and displaying information about various historical items.
                        </p>

                        <h4 className='text-[#0F4EFC] text-2xl font-bold mb-2'> Technologies Used </h4>
                        <p className='text-xl font-bold mb-6'> React JS | Node JS | Express JS | MongoDB | Firebase | Tailwind CSS | DaisyUI </p>

                        <div className=''>
                            <div className='flex gap-x-2'>
                                <a href="https://artifacts-atlas-phero.netlify.app/" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Live Site </button>
                                </a>
                                <a href="https://github.com/muhammad-sayem/Artifacts-Atlas-Client-Side" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Client Side Github </button>
                                </a>
                                <a href="https://github.com/muhammad-sayem/Artifacts-Atlas-Server-Side" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Server Side Github </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                {/* ------------------- */}

                {/* Project 3 */}
                <div className='lg:flex gap-8 shadow-[0px_4px_12px_rgba(0,0,0,0.4)] rounded-xl mb-8'>

                    <div className='w-full lg:w-1/2' data-aos="fade-right"
                        data-aos-duration="2000">
                        <img src={project3Image} className='w-full h-full p-10' alt="" />
                    </div>

                    <div className='w-full lg:w-1/2 p-10' data-aos="fade-left"
                        data-aos-duration="2000">
                        <h3 className='text-[#0F4EFC] text-3xl font-bold mb-2'> Visa Navigator Portal </h3>

                        <p className='text-lg mb-6'> Visa Navigator Portal is a web application to simplify the process of checking visa requirements, applying for visas online, and tracking applications. This project includes a dynamic user interface, robust functionality, and seamless user experience.
                        </p>

                        <h4 className='text-[#0F4EFC] text-2xl font-bold mb-2'> Technologies Used </h4>
                        <p className='text-xl font-bold mb-6'> React JS | Node JS | Express JS | MongoDB | Firebase | Tailwind CSS | DaisyUI </p>

                        <div className=''>
                            <div className='flex gap-x-2'>
                                <a href="https://visa-navigator-portal-162ef.web.app/" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Live Site </button>
                                </a>
                                <a href="https://github.com/muhammad-sayem/Visa-Navigator-Portal-Website-Client-Side" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Client Side Github </button>
                                </a>
                                <a href="https://github.com/muhammad-sayem/Visa-Navigator-Portal-Website-Server-Side" target='_blank'>
                                    <button className='btn bg-[#A6C8FF] text-[#0f4efc] border-2 border-[#0f4efc] text-2xl px-2 py-1'> Server Side Github </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProjects;