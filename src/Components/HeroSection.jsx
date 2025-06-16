import heroImage from "../assets/Logos/portfolio bg.webp";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const HeroSection = () => {
    const [text] = useTypewriter({
        words: ["Junior MERN Stack Developer"],
        loop: 0
    });

    // #A554F6

    return (
        <div id="hero" className='mt-24 mb-20 flex flex-col-reverse md:flex md:flex-row md:justify-center py-6'>
            <div className='md:w-7/12 flex flex-col justify-center pl-6 pr-12 py-8' data-aos="fade-right"
                data-aos-duration="2000">
                <h2 className='md:text-4xl lg:text-5xl font-bold '> Hello </h2>
                <h3 className='md:text-2xl lg:text-3xl mb-4 font-semibold'> This is <span className='text-[#8245EC]'> Md Shahrul Islam Sayem </span> </h3>

                <p className='md:text-xl lg:text-2xl font-bold'> I am a </p>
                <p className='md:text-xl lg:text-2xl font-bold text-[#8245EC]'> {text} <Cursor /> </p>

                <p className='md:text-xl lg:text-lg mt-4'> I'm a Full Stack Developer focused on MERN stack development, with a current emphasis on frontend technologies. I enjoy creating intuitive, responsive user interfaces and have built several projects that reflect my ability to work across the entire stack. I'm always eager to expand my knowledge, stay updated with modern web trends, and explore new tools and technologies to sharpen my skills. </p>

                <div className='my-4 flex gap-x-2'>
                    <a href="https://github.com/muhammad-sayem" target='_blank' className=""> <FaGithubSquare size={50}></FaGithubSquare> </a>

                    <a href="https://www.linkedin.com/in/md-shahrul-islam-sayem/" target='_blank' className=""> <FaLinkedin size={50}></FaLinkedin> </a>

                    <a href="https://www.facebook.com/shahrulislam.sayem/" target='_blank' className=""> <FaFacebookSquare size={50}></FaFacebookSquare> </a>
                </div>

                <div>
                    <a href="https://drive.google.com/file/d/1enFs4tkNOe4JfzuSE14owphky_bDURpy/view?usp=drive_link" target='_blank'> <button className='btn bg-gradient-to-r from-[#8245EC] to-[#A654F6] border-2 border-[#8245EC] px-9 py-4 rounded-full text-lg font-bold text-white transform transition-transform hover:scale-90 shadow-[0_0_10px_3px_rgba(165,84,246,0.8)]'> Resume </button> </a>
                </div>

            </div>

            <div className='md:w-5/12 flex justify-center mr-6' data-aos="fade-left"
                data-aos-duration="2000">
                <img src={heroImage} className='w-full h-1/2 md:h-2/3 lg:h-full rounded-full border-8 border-[#8245EC]' alt="" />
            </div>
        </div>
    );
};

export default HeroSection;