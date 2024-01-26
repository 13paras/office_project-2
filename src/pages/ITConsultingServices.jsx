import Wrapper from "../components/Wrapper";
import { consultancyServices } from "../assets";
import { Activity, Sparkles, User2 } from "lucide-react";
import { itConsultingServicesData } from "../utils/data";
import ITConsultingServicePP from "../components/pricingNplans/ITConsultingServicePP";
import CustomAccordion from "../components/CustomAccordion";

const ITConsultingServices = () => {
  return (
    <Wrapper>
      {/* Right/bottom */}
      <section className='my-14 px-2 text-zinc-700 lg:flex-[2_2_0]'>
        <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
          <div className='space-y-6'>
            <h2 className='mx-auto text-4xl font-bold text-zinc-800 sm:w-[80%] lg:mx-0 lg:text-4xl'>
              Company name:{" "}
              <span className='text-darkred'>
                Unleashing Business Innovation with IT Excellence
              </span>
            </h2>
            <p className='mx-auto leading-relaxed text-lg sm:w-[80%] lg:mx-0 lg:w-[90%]'>
              At{" "}
              <span className='font-semibold text-blue-600'>company name</span>,
              our IT Consulting Services redefine the technological landscape.
              We craft tailored solutions driving businesses toward sustainable
              growth and enduring success. Embracing cutting-edge tech and
              strategic insights, we streamline operations, boost efficiency,
              and fortify competitiveness in the dynamic digital realm. Our
              commitment is empowering businesses to embrace change, optimize
              processes, and attain excellence in the world of information
              technology.
            </p>
          </div>
          <img
            src={consultancyServices}
            loading='lazy'
            className='mb-10 mt-6 h-[22rem] rounded-md lg:mb-0 lg:mt-0 lg:h-[25rem]'
            alt=''
          />
        </div>

        <article className='py-14'>
          <h4 className='flex items-center gap-3 text-3xl font-semibold'>
            <span>Our Services: </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-heart-handshake text-darkred'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
              <path d='M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25' />
              <path d='M12.5 15.5l2 2' />
              <path d='M15 13l2 2' />
            </svg>
          </h4>
          {/* Radix accordion */}
          <section className='mt-10'>
            {itConsultingServicesData &&
              itConsultingServicesData?.map(services => (
                <CustomAccordion
                  key={services.id}
                  id={services.id}
                  title={services.title}
                  description={services.description}
                  points={services.points}
                />
              ))}
          </section>
        </article>

        {/* Why choose us section */}
        <section className='  text-gray-600'>
          <div className='container mx-auto px-5 py-24'>
            <div className='mb-20 text-center'>
              <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
                Why Choose{" "}
                <span className='font-semibold text-blue-600 underline'>
                  company name
                </span>
                :
              </h1>
              <div className='mt-6 flex justify-center'>
                <div className='inline-flex h-1 w-16 rounded-full bg-darkred'></div>
              </div>
            </div>
            <div className='-mx-4 -mb-10 -mt-4 flex flex-wrap gap-2 space-y-6 sm:-m-4 md:space-y-0'>
              <div className='flex flex-col items-center rounded-md bg-headline p-4 text-center text-white hover:shadow-lg md:w-[32%]'>
                <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-darkred'>
                  <Activity
                    className='h-10 w-10 text-darkred'
                    strokeWidth={2}
                  />
                </div>
                <div className='flex-grow '>
                  <h2 className='title-font mb-3 text-lg font-medium text-gray-100'>
                    Expertise
                  </h2>
                  <p className='text-base leading-relaxed text-zinc-300'>
                    Our team comprises seasoned professionals with a proven
                    track record.
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center rounded-md bg-headline p-4 text-center text-white hover:shadow-lg md:w-[32%]'>
                <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-darkred'>
                  <Sparkles
                    className='h-10 w-10 text-darkred'
                    strokeWidth={2}
                  />
                </div>
                <div className='flex-grow'>
                  <h2 className='title-font mb-3 text-lg font-medium text-gray-100'>
                    Innovation
                  </h2>
                  <p className='text-base leading-relaxed text-zinc-300'>
                    We stay ahead of the curve, integrating the latest
                    technologies into your business
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center rounded-md bg-headline p-4 text-center text-white hover:shadow-lg md:w-[32%]'>
                <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-darkred'>
                  <User2 className='h-10 w-10 text-darkred' strokeWidth={2} />
                </div>

                <div className='flex-grow'>
                  <h2 className='title-font mb-3 text-lg font-medium text-gray-100'>
                    Client-Centric Approach
                  </h2>
                  <p className='text-base leading-relaxed text-zinc-300'>
                    Your success is our priority; we work closely with you to
                    understand and meet your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='mx-auto lg:w-[70%]'>
          <ITConsultingServicePP />
        </div>

        <p className='my-16 mt-10 space-y-4 rounded-md bg-gradient-to-r from-yellow-600 to-darkred px-6 py-10 font-semibold text-black'>
          At{" "}
          <span className='font-semibold text-blue-600 underline'>
            company name
          </span>
          , we dont just provide IT services; we deliver transformative
          solutions that drive your business forward. Join us on the journey to
          IT excellence
        </p>
      </section>
    </Wrapper>
  );
};

export default ITConsultingServices;
