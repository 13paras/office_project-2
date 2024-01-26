import React from "react";
import Wrapper from "./Wrapper";
import { aboutus } from "../assets";
import { Gamepad2Icon, MapPinIcon, Medal, UserCheck2 } from "lucide-react";

const AboutUs = () => {
  return (
    <div className='py-32' id='aboutUs'>
      <Wrapper>
        <div className='pb-12'>
          <h3 className='text-center text-4xl font-bold uppercase  text-greenishBlue sm:text-3xl'>
            About Us
          </h3>
          <span className='mx-auto mt-2 block h-[1px] w-12 bg-orange-500 text-center'></span>
        </div>
        <div className='flex flex-col items-center gap-4 lg:flex-row lg:gap-6'>
          <div className='flex-1 space-y-4'>
            <h3 className="text-4xl font-bold text-darkred">Trusted By Worldwide Clients</h3>
            <p className='space-y-4 text-lg lg:text-base tracking-wide text-zinc-700'>
              At [Company Name], we&apos;re driven by a passion for delivering unparalleled digital
              solutions that transform businesses and exceed expectations. Our commitment revolves
              around understanding our clients challenges and crafting tailored strategies that
              resonate with their goals.
            </p>
            <ul className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 gap-2">
            <div className='flex ease-in-out duration-200 transition-all gap-2 border border-zinc-200 lg:w-full hover:scale-105  hover:shadow-sm p-3 rounded-md w-[90%]'>
              <a>
                <UserCheck2 className="h-10 w-10 text-electric-blue" />
              </a>
              <li className='list-none space-y-2'>
                <h4 className="text-xl font-semibold text-greenishBlue">Customer-Centric Solutions</h4>
                <p className="lg:text-sm">
                  Crafting innovative digital solutions tailored to your unique needs, ensuring
                  value and satisfaction.
                </p>
              </li>
            </div>

            <div className='flex ease-in-out duration-200 transition-all gap-2 border border-zinc-200 lg:w-full hover:scale-105  hover:shadow-sm p-3 rounded-md w-[90%]'>
              <a>
                <Medal className="h-10 w-10 text-electric-blue" />
              </a>
              <li className='list-none'>
                <h4 className="text-xl font-semibold text-greenishBlue">Proven Results</h4>
                <p className="lg:text-sm">
                  Achieving measurable outcomes through data-driven strategies that deliver tangible
                  and lasting results.
                </p>
              </li>
            </div>
            <div className='flex ease-in-out duration-200 transition-all gap-2 border border-zinc-200 lg:w-full hover:scale-105  hover:shadow-sm p-3 rounded-md w-[90%]'>
              <a>
                <MapPinIcon className="h-10 w-10 text-electric-blue" />
              </a>
              <li className='list-none'>
                <h4 className="text-xl font-semibold text-greenishBlue">Worldwide Services</h4>
                <p className="lg:text-sm">
                  Leveraging a global perspective to expand your reach and facilitate growth in
                  diverse markets.
                </p>
              </li>
            </div>
            <div className='flex ease-in-out duration-200 transition-all gap-2 border border-zinc-200 lg:w-full hover:scale-105  hover:shadow-sm p-3 rounded-md w-[90%]'>
              <a>
                <Gamepad2Icon className="h-10 w-10 text-electric-blue" />
              </a>
              <li className='list-none'>
                <h4 className="text-xl font-semibold text-greenishBlue">Continuous Evolution</h4>
                <p className="lg:text-sm">
                Constantly evolving and learning, staying at the forefront of digital innovation to propel your business forward.


                </p>
              </li>
            </div>
            </ul>
          </div>
          <img
            className='mt-10 h-[30rem] w-[90%] flex-1 rounded-md lg:mt-0 lg:h-[35rem] lg:w-[55%]'
            src={aboutus}
            alt=''
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
