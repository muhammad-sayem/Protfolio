import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-1/2 mx-auto mb-12'>
      <h3 className="text-center text-xl font-bold text-[#8245EC]"> Md Shahrul Islam Sayem </h3>

      <div className="lg:flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li><a href='#' className='text-lg nav-link hover:text-[#8245EC]'>Home</a></li>
          <li><a href='#skills' className='text-lg nav-link hover:text-[#8245EC]'>Skills</a></li>
          <li><a href='#education' className='text-lg nav-link hover:text-[#8245EC]'>Education</a></li>
          <li><a href='#projects' className='text-lg nav-link hover:text-[#8245EC]'>Projects</a></li>
          <li><a href='#contact' className='text-lg nav-link hover:text-[#8245EC]'>Contact Me</a></li>
        </ul>
      </div>

      <div className="lg:flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li><a href='https://www.facebook.com/shahrulislam.sayem/' className='text-lg nav-link'><FaFacebookSquare size={30} /></a></li>
          <li><a href='https://www.linkedin.com/in/md-shahrul-islam-sayem/' className='text-lg nav-link'><FaLinkedin size={30} /></a></li>
          <li><a href='https://github.com/muhammad-sayem' className='text-lg nav-link'><FaSquareGithub size={30} /></a></li>
          <li><a href='#https://www.instagram.com/_muhammad_sayem/' className='text-lg nav-link'><FaInstagramSquare size={30} /></a></li>
          
        </ul>
      </div>

      <p className="text-gray-400 text-center"> &copy; 2025 Md Shahrul Islam Sayem. All rights reserved </p>
    </div>
  );
};

export default Footer;