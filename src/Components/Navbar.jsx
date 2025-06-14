const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar fixed top-0 left-0 z-50 bg-transparent backdrop-blur-lg px-4 md:px-8 lg:px-32 w-full overflow-hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href='/' className=' font-bold text-lg nav-link'>Home</a></li>
                            <li><a href='#about' className=' font-bold text-lg nav-link'>About</a></li>
                            <li><a href='#skills' className=' font-bold text-lg nav-link'>Skills</a></li>
                            <li><a href='#projects' className=' font-bold text-lg nav-link'>Projects</a></li>
                            <li><a href='#contact' className=' font-bold text-lg nav-link'>Contact Me</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl p-0">Md Shahrul Islam Sayem</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#' className=' font-bold text-lg nav-link'>Home</a></li>
                        <li><a href='#about' className=' font-bold text-lg nav-link'>About</a></li>
                        <li><a href='#skills' className=' font-bold text-lg nav-link'>Skills</a></li>
                        <li><a href='#projects' className=' font-bold text-lg nav-link'>Projects</a></li>
                        <li><a href='#contact' className=' font-bold text-lg nav-link'>Contact Me</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://drive.google.com/file/d/1enFs4tkNOe4JfzuSE14owphky_bDURpy/view?usp=drive_link" target='_blank'> <button className='btn bg-gradient-to-r from-[#8245EC] to-[#A654F6] border-2 border-[#8245EC] px-9 py-4 rounded-full text-lg font-bold text-white'> Resume </button> </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;