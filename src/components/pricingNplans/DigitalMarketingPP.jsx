import { CheckIcon } from "lucide-react";
import Btn from "../Btn";
import Wrapper from "../Wrapper";

const DigitalMarketingPP = () => {
  return (
    <Wrapper>
      <section className='body-font overflow-hidden text-gray-600'>
        <div className='mx-auto sm:px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-2 text-3xl font-medium text-gray-900 sm:text-4xl'>
              Pricing
            </h1>
          </div>
          <div className='-m-4 grid grid-cols-1 lg:grid-cols-2'>
            {/* -----> Basic Plan <----- */}
            <div className='p-4 sm:w-[80%] lg:w-full'>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  BASIC PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>*1 managed channel/activity</h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'> $99</strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex  gap-2'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <p className='flex w-[70%] flex-col font-semibold text-gray-700'>
                        {" "}
                        Website Design & Managment{" "}
                        <span className='text-sm font-normal'>
                          T&C: Major Altercations & Upgradations, Chat Support, Brochure, Poster,
                          Business Cards etc. will be charged accordingly
                        </span>{" "}
                      </p>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={"bg-greenishBlue w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>

            {/* -----> Standard <----- */}
            <div className='p-4 sm:w-[80%] lg:w-full'>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  STANDARD PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>*2 managed channel/activities</h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'> $199</strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Website Design & Managment </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Social Media Marketing </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={"bg-greenishBlue w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>
            {/* -----> Advanced <-------- */}
            <div className='p-4 sm:w-[80%] lg:w-full'>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  ADVANCED PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>*4 managed channel/activities</h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'> $399</strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Strategic + Consultancy </span>
                    </li>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Googel & Social PPC </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> SEO </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Website Support & Landing Pages </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> E-commerce strategy & Consultancy </span>
                    </li>
                  </ul>
                </div>
                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={"bg-greenishBlue w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>

            {/* ------> Premium <------- */}
            <div className='p-4 sm:w-[80%] lg:w-full'>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  PREMIUM PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>
                  Full SOSTAC Research & Planning with customisable plans depending upon Business
                  Needs.
                </h1>

                <div className='mt-2 '>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"Connect With Us"}
                    classes={"bg-greenishBlue uppercase w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default DigitalMarketingPP;
