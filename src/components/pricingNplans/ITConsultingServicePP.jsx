import { CheckIcon, XIcon } from "lucide-react";
import Btn from "../Btn";
import Wrapper from "../Wrapper";

const ITConsultingServicePP = () => {
  return (
    <Wrapper>
      <section className='body-font overflow-hidden text-gray-600'>
        <div className='mx-auto py-24 sm:px-5'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-2 text-3xl font-medium text-gray-900 sm:text-4xl'>
              Pricing
            </h1>
            <p className='mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
          </div>
          <div className='-m-4 flex flex-wrap justify-center'>
            {/* -----> Basic Plan <----- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6 transition-all duration-150 ease-in-out hover:border-gray-400'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  BASIC PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>
                  *1 managed channel/activity
                </h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'>
                    {" "}
                    $199
                  </strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Strategic IT Consulting{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700'>
                        {" "}
                        Digital Transformation{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700'> Cloud Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700'> Cybersecurity </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700'>
                        {" "}
                        Managed IT Services{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700 '> Data Analytics </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700 '>
                        {" "}
                        Custom Software Development{" "}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={
                      "bg-greenishBlue w-full hover:bg-darkGreen text-white"
                    }
                  />
                </div>
              </div>
            </div>

            {/* -----> Standard <----- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6 transition-all duration-150 ease-in-out hover:border-gray-400'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  STANDARD PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>
                  *3 managed channel/activities
                </h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'>
                    {" "}
                    $299
                  </strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Strategic IT Consulting{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Digital Transformation{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Cloud Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700'> Cybersecurity </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700'>
                        {" "}
                        Managed IT Services{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700 '> Data Analytics </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700 '>
                        {" "}
                        Custom Software Development{" "}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={
                      "bg-greenishBlue w-full hover:bg-darkGreen text-white"
                    }
                  />
                </div>
              </div>
            </div>
            {/* -----> Advanced <-------- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6 transition-all duration-150 ease-in-out hover:border-gray-400'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  ADVANCED PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>
                  *5 managed channel/activities
                </h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'>
                    {" "}
                    $399
                  </strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Strategic + Consultancy{" "}
                      </span>
                    </li>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Strategic IT Consulting{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Digital Transformation{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Cloud Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Cybersecurity </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Managed IT Services{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700 '> Data Analytics </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <XIcon className='h-5 w-5 text-darkred' />

                      <span className='text-gray-700 '>
                        {" "}
                        Custom Software Development{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={
                      "bg-greenishBlue w-full hover:bg-darkGreen text-white"
                    }
                  />
                </div>
              </div>
            </div>

            {/* ------> Premium <------- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6 transition-all duration-150 ease-in-out hover:border-gray-400'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  PREMIUM PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>
                  Full customisable plans depending upon business Needs.
                </h1>

                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Strategic IT Consulting{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Digital Transformation{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Cloud Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'> Cybersecurity </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700'>
                        {" "}
                        Managed IT Services{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700 '> Data Analytics </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <CheckIcon className='h-5 w-5 text-blue-500' />

                      <span className='text-gray-700 '>
                        {" "}
                        Custom Software Development{" "}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={
                      "bg-greenishBlue w-full hover:bg-darkGreen text-white"
                    }
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

export default ITConsultingServicePP;
