import React from 'react';
import project1Image from "../assets/Project Images/project1 image.webp";
import project2Image from "../assets/Project Images/project2 image.webp";
import project3Image from "../assets/Project Images/project3 image.webp";

const MyProjects = () => {
  const technologiesUsedDesign = 'inline-block text-xs bg-[#251F38] text-[#A855F7] font-bold px-3 py-1 rounded-full';

  const projectButtonDesign = 'btn bg-gradient-to-r from-[#8245EC] to-[#A654F6] border-2 border-[#8245EC] rounded-full text-white transform transition-transform hover:scale-90 shadow-[0_0_10px_3px_rgba(165,84,246,0.8)]';

  return (
    <div className='mb-16'>
      <div className='text-center' data-aos="fade-down"
        data-aos-duration="2000">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white inline-block"> My Projects </h2>
        <div className="h-1 w-36 bg-[#8245EC] mx-auto mt-4 mb-6"></div>
      </div>

      <div className='grid grid-cols-3 gap-x-6'>

        {/* Project 1 */}
        <div className='border border-[#8245EC]/60 rounded-xl p-3 hover:shadow-[0_0_10px_3px_rgba(165,84,246,0.3)] transform transition-all duration-700 hover:scale-[1.02]'>
          <img src={project1Image} className='rounded-xl w-full h-[480px]' alt="" />
          <h3 className='text-2xl font-bold my-4'>Web Horizon - A community to Discover and Share Websites</h3>
          <p className='text-gray-500 text-md my-4'> Web Horizon is a community-driven platform to discover, share, and review websites. It features user roles, moderation, and subscriptions to ensure quality and support. </p>

          <div className='space-x-4 space-y-2'>
            <p className={technologiesUsedDesign}> ReactJS </p>
            <p className={technologiesUsedDesign}> NodeJS </p>
            <p className={technologiesUsedDesign}> ExpressJS </p>
            <p className={technologiesUsedDesign}> MongoDB </p>
            <p className={technologiesUsedDesign}> Firebase </p>
            <p className={technologiesUsedDesign}> Tailwind CSS </p>
            <p className={technologiesUsedDesign}> DaisyUI </p>
            <p className={technologiesUsedDesign}> HTML </p>
            <p className={technologiesUsedDesign}> CSS </p>
          </div>

          <div className='flex justify-between my-4'>
            <a href='https://web-horizon-final.netlify.app/' target='_blank' className={projectButtonDesign}> Live Link </a>
            <a href='https://github.com/muhammad-sayem/Web-Horizon-Client' target='_blank' className={projectButtonDesign}> Code (Client) </a>
            <a href='https://github.com/muhammad-sayem/Web-Horizon-Server' target='_blank' className={projectButtonDesign}> Code (Server) </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className='border border-[#8245EC]/60 rounded-xl p-3 hover:shadow-[0_0_10px_3px_rgba(165,84,246,0.3)] transform transition-all duration-700 hover:scale-[1.02]'>
          <img src={project2Image} className='rounded-xl w-full h-[480px]' alt="" />
          <h3 className='text-2xl font-bold my-4'> Artifacts Atlas - A Digital Atlas for the World's Artifacts. </h3>
          <p className='text-gray-500 text-md my-4'> Artifacts Atlas is a web app for tracking and showcasing historical artifacts. Users can browse, add, like artifacts, and manage their own contributions through the website. </p>

          <div className='space-x-4 space-y-2'>
            <p className={technologiesUsedDesign}> ReactJS </p>
            <p className={technologiesUsedDesign}> NodeJS </p>
            <p className={technologiesUsedDesign}> ExpressJS </p>
            <p className={technologiesUsedDesign}> MongoDB </p>
            <p className={technologiesUsedDesign}> Firebase </p>
            <p className={technologiesUsedDesign}> Tailwind CSS </p>
            <p className={technologiesUsedDesign}> DaisyUI </p>
            <p className={technologiesUsedDesign}> HTML </p>
            <p className={technologiesUsedDesign}> CSS </p>
          </div>

          <div className='flex justify-between my-4'>
            <a href='https://artifacts-atlas-phero.netlify.app/' target='_blank' className={projectButtonDesign}> Live Link </a>
            <a href='https://github.com/muhammad-sayem/Artifacts-Atlas-Client-Side' target='_blank' className={projectButtonDesign}> Code (Client) </a>
            <a href='https://github.com/muhammad-sayem/Artifacts-Atlas-Server-Side' target='_blank' className={projectButtonDesign}> Code (Server) </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className='border border-[#8245EC] rounded-xl p-3 hover:shadow-[0_0_10px_3px_rgba(165,84,246,0.3)] transform transition-all duration-700 hover:scale-[1.02]'>
          <img src={project3Image} className='rounded-xl w-full h-[480px]' alt="" />
          <h3 className='text-2xl font-bold my-4'> Visa Navigator Portal - Visa Information and apply Portal </h3>
          <p className='text-gray-500 text-md my-4'> Visa Navigator Portal is a web app that simplifies checking visa requirements, applying, and tracking applications. It offers a smooth user experience. </p>

          <div className='space-x-4 space-y-2'>
            <p className={technologiesUsedDesign}> ReactJS </p>
            <p className={technologiesUsedDesign}> NodeJS </p>
            <p className={technologiesUsedDesign}> ExpressJS </p>
            <p className={technologiesUsedDesign}> MongoDB </p>
            <p className={technologiesUsedDesign}> Firebase </p>
            <p className={technologiesUsedDesign}> Tailwind CSS </p>
            <p className={technologiesUsedDesign}> DaisyUI </p>
            <p className={technologiesUsedDesign}> HTML </p>
            <p className={technologiesUsedDesign}> CSS </p>
          </div>

          <div className='flex justify-between my-4'>
            <a href='https://visa-navigator-portal-162ef.web.app/' target='_blank' className={projectButtonDesign}> Live Link </a>
            <a href='https://github.com/muhammad-sayem/Visa-Navigator-Portal-Website-Client-Side' target='_blank' className={projectButtonDesign}> Code (Client) </a>
            <a href='https://github.com/muhammad-sayem/Visa-Navigator-Portal-Website-Server-Side' target='_blank' className={projectButtonDesign}> Code (Server) </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;