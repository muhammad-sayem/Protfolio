import heroImage from "../assets/Logos/portfolio bg.webp";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const HeroSection = () => {
    const [text] = useTypewriter({
        words: ["Junior MERN Stack Developer"],
        loop: 0
    });

    return (
        <div id="hero" className='mt-16 mb-10 flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-12 py-8 gap-8'>
            
            <div
                className='w-full lg:w-7/12 flex flex-col justify-center text-center lg:text-left'
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Hello</h2>
                <h3 className='text-xl md:text-2xl lg:text-3xl mb-4 font-semibold'>
                    This is <span className='text-[#8245EC]'>Md Shahrul Islam Sayem</span>
                </h3>

                <p className='text-lg md:text-xl lg:text-2xl font-bold'>I am a</p>
                <p className='text-lg md:text-xl lg:text-2xl font-bold text-[#8245EC]'>
                    {text} <Cursor />
                </p>

                <p className='text-base md:text-lg lg:text-lg mt-4'>
                    I'm a Full Stack Developer focused on MERN stack development, with a current emphasis on frontend technologies. I enjoy creating intuitive, responsive user interfaces and have built several projects that reflect my ability to work across the entire stack. I'm always eager to expand my knowledge, stay updated with modern web trends, and explore new tools and technologies to sharpen my skills.
                </p>

               
                <div className='mt-4 flex justify-center lg:justify-start gap-4'>
                    <a href="https://github.com/muhammad-sayem" target='_blank' rel='noopener noreferrer'>
                        <FaGithubSquare size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/md-shahrul-islam-sayem/" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={40} />
                    </a>
                    <a href="https://www.facebook.com/shahrulislam.sayem/" target='_blank' rel='noopener noreferrer'>
                        <FaFacebookSquare size={40} />
                    </a>
                </div>

             
                <div className='mt-6'>
                    <a
                        href="https://drive.google.com/file/d/1enFs4tkNOe4JfzuSE14owphky_bDURpy/view?usp=drive_link"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <button className='btn bg-gradient-to-r from-[#8245EC] to-[#A654F6] border-2 border-[#8245EC] px-8 py-3 rounded-full text-base font-semibold text-white transform transition-transform hover:scale-95 shadow-[0_0_10px_3px_rgba(165,84,246,0.6)]'>
                            Resume
                        </button>
                    </a>
                </div>
            </div>

            <div
                className='w-full lg:w-5/12 flex justify-center'
                data-aos="fade-left"
                data-aos-duration="2000"
            >
                <img
                    src={heroImage}
                    alt="Hero"
                    className='w-56 h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover rounded-full border-8 border-[#8245EC] shadow-xl'
                />
            </div>
        </div>
    );
};

export default HeroSection;
