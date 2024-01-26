import { DribbbleIcon, FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Wrapper from "./Wrapper";
import "./style.css";
import { useNavigate } from "react-router-dom";
// import { logo } from "../assets";
import { Link } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="border-t-4 border-gradient"></div>
       */}

      <hr className='h-1 w-full border-0 bg-gradient-to-r from-yellow-500 to-darkred' />
      <div>
        <Wrapper>
          <footer className=''>
            <div className='mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
              <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                <div>
                  <h1 className="text-4xl font-extrabold">IT</h1>
                  <p className='mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left'>
                    Our team of skilled, knowledgeable, and professional technicians is ready to
                    assist you with the support and services you need.
                  </p>

                  <ul className='mt-8 flex justify-center gap-6 sm:justify-start md:gap-8'>
                    <li>
                      <a className='text-darkred transition hover:text-darkred/75'>
                        <span className='sr-only'>Facebook</span>
                        <FacebookIcon />
                      </a>
                    </li>

                    <li>
                      <a className='text-darkred transition hover:text-darkred/75'>
                        <span className='sr-only'>Instagram</span>
                        <InstagramIcon />
                      </a>
                    </li>

                    <li>
                      <a className='text-darkred transition hover:text-darkred/75'>
                        <span className='sr-only'>Twitter</span>
                        <TwitterIcon />
                      </a>
                    </li>

                    <li>
                      <a className='text-darkred transition hover:text-darkred/75'>
                        <span className='sr-only'>GitHub</span>
                        <GithubIcon />
                      </a>
                    </li>

                    <li>
                      <a className='text-darkred transition hover:text-darkred/75'>
                        <span className='sr-only'>Dribbble</span>
                        <DribbbleIcon />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2'>
                  <div className='w-full'>
                    <h3 className='mb-7 text-xl font-semibold text-zinc-800'>Usefull Links</h3>
                    <nav className='space-y-4 text-zinc-700'>
                      <li>
                        <Link
                          to='home'
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          onClick={() => navigate("/")}
                          className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                        >
                          Home
                        </Link>
                      </li>
                      <li className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'>
                        <Link to='aboutUs' spy={true} smooth={true} offset={0} duration={500}>
                          About Us
                        </Link>
                      </li>
                      <li className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'>
                        Services
                      </li>
                      <li
                        onClick={() => navigate("/clients")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        Clients
                      </li>
                      <li
                        onClick={() => navigate("/contact-us")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        Contact Us
                      </li>
                      <li
                        onClick={() => navigate("/terms-N-Condition")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        Terms and Conditions
                      </li>
                      <li
                        onClick={() => navigate("/refund-policy")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        Refund Policy
                      </li>
                    </nav>
                  </div>

                  <div className='w-full text-start sm:text-left'>
                    <p className='mb-7 text-lg font-semibold text-gray-900'>Our Services</p>

                    <nav className='space-y-4 text-zinc-700'>
                      <li
                        onClick={() => navigate("/consulting-services")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        IT Consulting Services
                      </li>
                      <li
                        onClick={() => navigate("/staff-recruit")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        IT Staff Recruitment
                      </li>
                      <li
                        onClick={() => navigate("/staff-augmentation")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        Staff Augmentation
                      </li>
                      <li
                        onClick={() => navigate("/digital-marketing")}
                        className='cursor-pointer transition-all duration-150 ease-in-out hover:text-darkred hover:underline'
                      >
                        Digital Marketing
                      </li>
                    </nav>
                  </div>

                  <div className='w-full text-center sm:text-left'>
                    <p onClick={() => navigate('/contact-us')} className='text-lg font-medium text-gray-900'>Contact Us</p>

                    <ul className='mt-8 space-y-4 text-start text-sm'>
                      <li>
                        <a
                          className='flex items-center justify-center gap-1.5 '
                          href='/'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 shrink-0 text-gray-900'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                          </svg>

                          <a
                            href='mailto:support@piscalinnovations.com'
                            className='flex-1 text-blue-700'
                          >
                            support@piscalinnovations.com
                          </a>
                        </a>
                      </li>

                      <li className='flex items-start justify-center gap-1.5 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 shrink-0 text-gray-900'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>

                        <address className='-mt-0.5 flex-1 not-italic text-gray-700'>
                          Piscal Innovations LLC <br /> 4015 Randall Lane, Carrollton Texas 75007
                        </address>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </Wrapper>
        <hr className='mb-32 mt-10 h-2 text-black' />
      </div>
    </>
  );
};

export default Footer;
