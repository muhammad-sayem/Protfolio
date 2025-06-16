import bubtLogo from "../assets/Logos/bubt logo.png";
import accLogo from "../assets/Logos/acc logo.jpg";
import acpsLogo from "../assets/Logos/acps logo.jpg";

const Education = () => {
  return (
    <div className="rounded-xl px-4 sm:px-8 md:px-12 py-8 mb-16 max-w-7xl mx-auto">
      <div
        className="text-center"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white inline-block">
          Education
        </h2>
        <div className="h-1 w-36 bg-[#8245EC] mx-auto mt-4 mb-6"></div>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {/* 1 */}
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
          </div>

          <div
            className="timeline-start mb-10 md:text-end border border-[#8245EC]/60 rounded-xl px-6 sm:px-8 py-4 hover:shadow-[0_0_10px_3px_rgba(165,84,246,0.2)] transform transition-transform duration-700 hover:scale-[1.02]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <time className="font-bold text-xl text-[#8245EC]">
              2022-2026 (Expected)
            </time>
            <div>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-2 gap-4">
                <div className="w-24 h-24 md:w-20 md:h-20 flex-shrink-0 rounded-full border-4 border-[#8245EC] overflow-hidden">
                  <img
                    src={bubtLogo}
                    alt="BUBT Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-2xl font-bold mb-2">
                    Bachelor of Science - B.Sc. in Computer Science & Engineering
                  </h3>
                  <p className="text-lg">
                    Bangladesh University of Business and Technology (BUBT)
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-lg font-bold text-gray-400">
                  Grade - CGPA: 3.60 (Current)
                </p>
                <p className="text-sm">
                  I am currently pursuing my Bachelor's degree in Computer
                  Science and Engineering at Bangladesh University of Business
                  and Technology (BUBT). Throughout my academic journey, I have
                  explored and continue to deepen my knowledge in various areas
                  of computer science, including programming languages,
                  object-oriented programming (OOP), data structures and
                  algorithms, databases, software development, project
                  management and ethics etc.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>

        {/* 2 */}
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
          </div>

          <div
            className="timeline-end mb-10 md:text-end border border-[#8245EC]/60 rounded-xl px-6 sm:px-8 py-4 hover:shadow-[0_0_10px_3px_rgba(165,84,246,0.2)] transform transition-transform duration-700 hover:scale-[1.02]"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <time className="font-bold text-xl text-[#8245EC]">2019-2021</time>
            <div>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-2 gap-4">
                <div className="w-24 h-24 md:w-20 md:h-20 flex-shrink-0 rounded-full border-4 border-[#8245EC] overflow-hidden">
                  <img
                    src={accLogo}
                    alt="ACC Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-2xl font-bold mb-2">HSC - Science Group</h3>
                  <p className="text-lg">Adamjee Cantonment College (ACC)</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-lg font-bold text-gray-400">Grade - GPA: 5.00</p>
                <p className="text-sm">
                  I studied at Adamjee Cantonment College from 2019 to 2021. In
                  2021, I passed the HSC examination from the Science group with
                  a GPA of 5.00, and I had an interest in learning programming
                  from the beginning, and I started it during my college life.
                  Which helped me easily understand the early subjects of
                  university after getting admitted to the Computer Science and
                  Engineering department.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>

        {/* 3 */}
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
          </div>

          <div
            className="timeline-start mb-10 md:text-end border border-[#8245EC]/60 rounded-xl px-6 sm:px-8 py-4 hover:shadow-[0_0_10px_3px_rgba(165,84,246,0.2)] transform transition-transform duration-700 hover:scale-[1.02]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <time className="font-bold text-xl text-[#8245EC]">2010 - 2019</time>
            <div>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-2 gap-4">
                <div className="w-24 h-24 md:w-20 md:h-20 flex-shrink-0 rounded-full border-4 border-[#8245EC] overflow-hidden">
                  <img
                    src={acpsLogo}
                    alt="ACPS Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-2xl font-bold mb-2">SSC - Science Group</h3>
                  <p className="text-lg">Adamjee Cantonment Public School (ACPS)</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-lg font-bold text-gray-400">Grade - GPA: 5.00</p>
                <p className="text-sm">
                  I spent almost my entire school life at Adamjee Cantonment Public
                  School. From class two all the way up to SSC, I studied in this
                  institution. In 2019, I successfully completed my SSC examination
                  from here with a GPA of 5.00. This school not only shaped my
                  academic foundation but also sparked my interest in science. It
                  was here that I was first introduced to science subjects, which
                  later became a strong base for my future studies.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
