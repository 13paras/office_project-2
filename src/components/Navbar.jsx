import { ChevronDownIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleMenuClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`w-full bg-offwhite py-4 border-b border-b-zinc-300 z-20 transition-all duration-150 ease-in-out ${
        navbar ? "fixed top-0 py-3 shadow-lg" : "bg-offwhite text-black"
      } `}
    >
      <div className='flex items-center justify-between lg:mx-auto lg:max-w-[1300px]'>
        <h1 className='relative text-3xl pl-3 font-extrabold'>IT C&S</h1>

        {/* Mobile Menu */}
        <div
          onClick={() => setShow(!show)}
          className='mr-3 cursor-pointer space-y-1 transition-all duration-200 ease-in-out md:hidden'
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-200 ease-in-out ${
              show ? "translate-y-2 rotate-[50deg]" : "translate-y-0 rotate-0"
            } `}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-200 ease-in-out ${
              show ? "opacity-0" : "opacity-100"
            } `}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-200 ease-in-out ${
              show ? "-translate-y-1 -rotate-[50deg]" : " translate-y-0 rotate-0"
            } `}
          ></span>
        </div>

        {/* Main menu */}
        <nav
          onClick={handleMenuClick}
          className={`absolute z-50 mr-4 flex w-full list-none items-center space-y-6 py-12 text-center text-lg sm:text-base font-semibold text-zinc-800 transition-all duration-500 ease-in-out md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:space-x-5 md:space-y-0 md:bg-transparent md:py-0 md:text-left lg:justify-between ${
            show
              ? "top-16 h-screen w-full translate-x-0 flex-col bg-offwhite"
              : "top-16 h-screen w-full -translate-x-full flex-col bg-offwhite"
          }  `}
        >
          <li
            id='home'
            onClick={() => navigate("/")}
            className='UnderLine cursor-pointer hover:text-darkred'
          >
            {" "}
            HOME{" "}
          </li>
          <Link
            onClick={() => setShow(!show)}
            to='aboutUs'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href=''
            className='UnderLine cursor-pointer hover:text-darkred'
          >
            ABOUT US
          </Link>
          <li
            onClick={e => e.stopPropagation()}
            className='relative flex items-center space-x-2 hover:text-darkred'
          >
            <a className='peer cursor-pointer flex items-center'>SERVICES <ChevronDownIcon /> </a>
            <ul className='absolute -left-20 top-6 z-10 hidden w-[240px] rounded-md bg-offwhite text-start  text-base text-black drop-shadow-lg transition-all duration-100 ease-in-out  hover:block peer-hover:block'>
              <li
                onClick={() => {
                  navigate("/consulting-services");
                  setShow(!show);
                }}
                className='mt-5 w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
              >
                <a>IT Consulting Services</a>
              </li>
              <li
                onClick={() => {
                  navigate("/staff-recruit");
                  setShow(!show);
                }}
                className='w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
              >
                <a>IT Staff Recruiting</a>
              </li>
              <li
                onClick={() => {
                  navigate("/staff-augmentation");
                  setShow(!show);
                }}
                className='w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
              >
                <a>Staff Augmentation</a>
              </li>
              <li
                onClick={() => {
                  navigate("/digital-marketing");
                  setShow(!show);
                }}
                className='hover:bg-green w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
              >
                <a>Digital Marketing</a>
              </li>
            </ul>{" "}
          </li>
          <li
            onClick={() => navigate("/clients")}
            className='UnderLine cursor-pointer hover:text-darkred'
          >
            <a>CLIENTS</a>
          </li>
          <li
            onClick={() => navigate("/contact-us")}
            className='UnderLine cursor-pointer hover:text-darkred'
          >
            <a>CONTACT US</a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
