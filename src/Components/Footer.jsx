import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto px-4 mb-12' data-aos="zoom-in" data-aos-duration="2000">
      <h3 className="text-center text-xl font-bold text-[#8245EC] mb-4">Md Shahrul Islam Sayem</h3>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        <ul className="flex flex-col md:flex-row items-center gap-4">
          <li><a href='#' className='text-lg nav-link hover:text-[#8245EC]'>Home</a></li>
          <li><a href='#skills' className='text-lg nav-link hover:text-[#8245EC]'>Skills</a></li>
          <li><a href='#education' className='text-lg nav-link hover:text-[#8245EC]'>Education</a></li>
          <li><a href='#projects' className='text-lg nav-link hover:text-[#8245EC]'>Projects</a></li>
          <li><a href='#contact' className='text-lg nav-link hover:text-[#8245EC]'>Contact</a></li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mb-4">
        <a href='https://www.facebook.com/shahrulislam.sayem/' className='text-lg nav-link hover:text-[#8245EC]'>
          <FaFacebookSquare size={30} />
        </a>
        <a href='https://www.linkedin.com/in/md-shahrul-islam-sayem/' className='text-lg nav-link hover:text-[#8245EC]'>
          <FaLinkedin size={30} />
        </a>
        <a href='https://github.com/muhammad-sayem' className='text-lg nav-link hover:text-[#8245EC]'>
          <FaSquareGithub size={30} />
        </a>
        <a href='https://www.instagram.com/_muhammad_sayem/' className='text-lg nav-link hover:text-[#8245EC]'>
          <FaInstagramSquare size={30} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-center text-sm">© 2025 Md Shahrul Islam Sayem. All rights reserved.</p>
    </div>
  );
};

export default Footer;