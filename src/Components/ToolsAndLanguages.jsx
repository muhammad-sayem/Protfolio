import Slider from "react-slick";
import cImage from "../assets/Logos/c.png";
import cppImage from "../assets/Logos/cpp.png";
import pythonImage from "../assets/Logos/python.png";
import javascriptImage from "../assets/Logos/javascript.png";
import gitImage from "../assets/Logos/git.png";
import githubImage from "../assets/Logos/github.png";
import netlifyImage from "../assets/Logos/netlify.png";
import vercelImage from "../assets/Logos/vercel.png";
import vsCodeImage from "../assets/Logos/vs code.png";

const ToolsAndLanguages = () => {
  const singleToolsStyle =
    "border border-[#8245EC]/60 rounded-lg flex flex-col items-center py-2 transform transition-transform duration-300 hover:scale-90";

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-16">
      <div className="text-center" data-aos="fade-down" data-aos-duration="2000">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white inline-block">
          Tools & Languages
        </h2>
        <div className="h-1 w-64 bg-[#8245EC] mx-auto mt-4 mb-6"></div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={vsCodeImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> VS Code </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={gitImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> Git </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={githubImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> GitHub </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={netlifyImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> Netlify </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={vercelImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> Vercel </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={javascriptImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> JavaScript </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={pythonImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> Python </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={cImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> C </p>
            </div>
          </div>

          <div className="px-2">
            <div className={singleToolsStyle}>
              <img src={cppImage} className="w-28 h-28 mb-2" alt="" />
              <p className="text-xl font-bold"> C++ </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ToolsAndLanguages;
