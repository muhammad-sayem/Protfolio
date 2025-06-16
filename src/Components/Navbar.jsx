const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-lg shadow-md">
      <div className="navbar px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
       
        <div className="navbar-start">
          
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#8245EC]">
              <li><a href='/' className='font-semibold text-base nav-link'>Home</a></li>
              <li><a href='#about' className='font-semibold text-base nav-link'>About</a></li>
              <li><a href='#skills' className='font-semibold text-base nav-link'>Skills</a></li>
              <li><a href='#projects' className='font-semibold text-base nav-link'>Projects</a></li>
              <li><a href='#contact' className='font-semibold text-base nav-link'>Contact</a></li>
            </ul>
          </div>


          <a className="btn btn-ghost normal-case text-lg md:text-xl font-bold p-0">
            Md Shahrul Islam Sayem
          </a>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#' className='font-semibold text-xs xl:text-base nav-link hover:text-[#8245EC]'>Home</a></li>
            <li><a href='#skills' className='font-semibold text-xs xl:text-base nav-link hover:text-[#8245EC]'>Skills</a></li>
            <li><a href='#education' className='font-semibold text-xs xl:text-base nav-link hover:text-[#8245EC]'>Education</a></li>
            <li><a href='#projects' className='font-semibold text-xs xl:text-base nav-link hover:text-[#8245EC]'>Projects</a></li>
            <li><a href='#contact' className='font-semibold text-xs xl:text-base nav-link hover:text-[#8245EC]'>Contact Me</a></li>
          </ul>
        </div>


        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1enFs4tkNOe4JfzuSE14owphky_bDURpy/view?usp=drive_link"
            target='_blank' rel='noreferrer'>
            <button className='btn bg-gradient-to-r from-[#8245EC] to-[#A654F6] border-2 border-[#8245EC] px-5 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold text-white transition-transform hover:scale-95 shadow-[0_0_10px_3px_rgba(165,84,246,0.6)]'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
