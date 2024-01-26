import React from "react";
import Wrapper from "./Wrapper";
import { Globe, PackageCheckIcon, SmilePlus, UsersIcon } from "lucide-react";

const Stats = () => {
  return (
    <div className='w-full bg-darkred'>
      <Wrapper>
        <div className='text-palewhite grid grid-cols-1 place-items-center py-4 text-center uppercase sm:grid-cols-2 lg:grid-cols-4'>
          <div className=' flex flex-col items-center space-y-1 p-4 text-center'>
            <a>
              <UsersIcon className='h-10 w-10' />
            </a>
            <h2 className='title-font text-green text-5xl font-bold'>350</h2>
            <p className='leading-relaxed'>Consultants Places</p>
          </div>
          <div className=' flex flex-col items-center space-y-1 p-4 lg:w-1/4'>
            <a className=''>
              <Globe className='h-10 w-10' />
            </a>
            <h2 className='title-font text-green text-5xl font-bold'>12</h2>
            <p className='leading-relaxed'>Locations</p>
          </div>
          <div className=' sm: flex flex-col items-center space-y-1 p-4 lg:w-1/4'>
            <a>
              <PackageCheckIcon className='h-10 w-10' />
            </a>
            <h2 className='title-font text-green text-5xl font-bold'>100</h2>
            <p className='leading-relaxed'>Projects Delivered</p>
          </div>
          <div className=' sm: flex flex-col items-center space-y-1 p-4 lg:w-1/4'>
            <a>
              <SmilePlus className='h-10 w-10' />
            </a>
            <h2 className='title-font text-green text-5xl font-bold'>114</h2>
            <p className='leading-relaxed'>Happy Customers</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Stats;
