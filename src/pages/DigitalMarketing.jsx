import Wrapper from "../components/Wrapper";
import { dm, dm2 } from "../assets";
import {
  Activity,
  CheckSquare,
  DatabaseBackup,
  Globe2,
  InstagramIcon,
  RocketIcon,
  SearchCheck,
  TrendingUp,
  UserCheck,
  Wand,
} from "lucide-react";
import DigitalMarketingPP from "../components/pricingNplans/DigitalMarketingPP";

const DigitalMarketing = () => {
  return (
    <Wrapper>
      <div className='my-32 flex flex-col items-center space-y-6 lg:flex-row lg:gap-8 lg:space-y-0'>
        <div className='space-y-4 pb-6 text-center lg:pb-0 lg:text-start'>
          <h2 className='text-4xl font-bold text-zinc-800'>
            Empowering Your Digital Future: <br />{" "}
            <span className='text-darkred'>
              Elevating IT Excellence to Drive Success
            </span>
          </h2>
          <p className='text-lg text-zinc-700 lg:w-[80%]'>
            {" "}
            Piscal Innovations provides comprehensive and innovative digital
            marketing services tailored to amplify your brand&apos;s online
            presence and drive impactful growth. Our strategic approaches
            encompass a range of digital avenues, ensuring your brand stands out
            in today&apos;s competitive digital landscape. From targeted
            campaigns to strategic analytics, we are dedicated to boosting your
            brand&apos;s visibility, engagement, and success.
          </p>
        </div>
        <img
          src={dm2}
          alt=''
          className='mx-auto w-[70%] rounded-md lg:w-[40%]'
        />
      </div>
      <section className=' text-zinc-800'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div>
            <div className='mx-auto mb-10 max-w-xl space-y-6 text-center lg:text-start'>
              <h2 className='text-3xl font-bold sm:text-4xl'>
                Boost Your{" "}
                <span
                  className='inline italic underline decoration-wavy '
                  style={{
                    textDecorationColor: "#057bc4",
                  }}
                >
                  Marketing Initiatives
                </span>{" "}
              </h2>

              <p className='mt-4 text-zinc-700'>
                Empower your digital footprint with our expert web design and
                development team.
              </p>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <a className='hover:border-green block rounded-xl border border-gray-300 bg-headline p-8 shadow-xl transition'>
              <RocketIcon className='h-10 w-10 text-darkred ' strokeWidth={2} />

              <h2 className='mt-4 text-xl font-bold text-zinc-200'>
                Unleash Your Brand&apos;s Potential
              </h2>

              <p className='mt-1 text-sm text-zinc-400'>
                Our comprehensive digital marketing services will elevate your
                brand to new heights.
              </p>
            </a>

            <a className='hover:border-green block rounded-xl border border-gray-300 bg-headline p-8 shadow-xl transition'>
              <UserCheck className='h-10 w-10 text-darkred ' />

              <h2 className='mt-4 text-xl font-bold text-zinc-200'>
                User-Centric Interface Design
              </h2>

              <p className='mt-1 text-sm text-zinc-400'>
                Design user interfaces focused on ease of navigation, compelling
                visuals, and intuitive interactions to enhance user engagement
                and satisfaction.
              </p>
            </a>
            <a className='hover:border-green block rounded-xl border border-gray-300 bg-headline p-8 shadow-xl transition'>
              <Wand className='h-10 w-10 text-darkred ' />

              <h2 className='mt-4 text-xl font-bold text-zinc-200'>
                Performance Optimization
              </h2>

              <p className='mt-1 text-sm text-zinc-400'>
                Optimize website speed, ensuring swift loading times and smooth
                functionality to retain visitors and encourage prolonged
                engagement.
              </p>
            </a>

            <a className='hover:border-green block rounded-xl border border-gray-300 bg-headline p-8 shadow-xl transition'>
              <SearchCheck className='h-10 w-10 text-darkred ' />

              <h2 className='mt-4 text-xl font-bold text-zinc-200'>
                SEO Integration
              </h2>

              <p className='mt-1 text-sm text-zinc-400'>
                Implement SEO best practices into website development, enhancing
                visibility on search engines and driving organic traffic to the
                site.
              </p>
            </a>

            <a className='hover:border-green block rounded-xl border border-gray-300 bg-headline p-8 shadow-xl transition'>
              <InstagramIcon className='h-10 w-10 text-darkred ' />

              <h2 className='mt-4 text-xl font-bold text-zinc-200'>
                Harness the Power of Social Media
              </h2>

              <p className='mt-1 text-sm text-zinc-400'>
                Social media is a powerful tool for connecting with your
                audience and building brand awareness. Let us show you how to
                use it effectively.
              </p>
            </a>

            <a className='hover:border-green block rounded-xl border border-gray-300 bg-headline p-8 shadow-xl transition'>
              <Activity className='h-10 w-10 text-darkred ' />

              <h2 className='mt-4 text-xl font-bold text-zinc-200 '>
                Measure and Analyze Results
              </h2>

              <p className='mt-1 text-sm text-zinc-400'>
                Data is key to making informed marketing decisions. We&apos;ll
                help you track your progress and make adjustments as needed.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className='my-16'>
        <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
            <div className='relative z-10 lg:py-16'>
              <div className='relative h-64 sm:h-80 lg:h-full'>
                <img
                  alt='House'
                  src={dm}
                  className='absolute inset-0 z-0 h-full w-full object-contain'
                />
              </div>
            </div>

            <div className='bg-pinkish relative flex items-center'>
              <div className='p-4 sm:p-16 lg:p-10 '>
                <h2 className='text-2xl font-bold sm:text-3xl'>
                  Innovative, Customer-Centric Digital Marketing Solutions
                </h2>

                <p className='mt-4 space-y-3 leading-relaxed text-zinc-700'>
                  Crafting bespoke strategies, we deeply engage with clients to
                  understand their unique goals and challenges. Our commitment
                  lies in delivering high-value, performance-driven campaigns
                  with measurable results. <br />
                  <ul className='space-y-4'>
                    <li>
                      <h3 className='flex items-center gap-1 text-xl font-semibold text-darkred'>
                        <CheckSquare />
                        Proven Performance:{" "}
                      </h3>{" "}
                      <p>
                        We create impactful digital campaigns that consistently
                        deliver enduring results for our clients.
                      </p>
                    </li>
                    <li>
                      <h3 className='flex items-center gap-1 text-xl font-semibold text-darkred'>
                        <DatabaseBackup />
                        Data-Driven Precision:{" "}
                      </h3>{" "}
                      <p>
                        {" "}
                        Our strategies are optimized through data analysis,
                        ensuring maximum ROI and continual refinement.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className='flex items-center gap-1 text-xl font-semibold text-darkred'>
                        <Globe2 />
                        Global Reach, Local Expertise:{" "}
                      </h3>{" "}
                      <p>
                        {" "}
                        With a global perspective and local insights, we help
                        clients expand into new markets while respecting local
                        nuances.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className='flex items-center gap-1 text-xl font-semibold text-darkred'>
                        <TrendingUp />
                        Continuous Evolution:{" "}
                      </h3>{" "}
                      <p>
                        {" "}
                        As a dynamic agency, we continually adapt and innovate
                        to meet evolving client needs in the digital landscape.
                      </p>
                    </li>
                  </ul>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='mx-auto lg:w-[70%]'>
        <DigitalMarketingPP />
      </div>
    </Wrapper>
  );
};

export default DigitalMarketing;
