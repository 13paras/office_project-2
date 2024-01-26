import Wrapper from "../components/Wrapper";
import { staffAugmentation, staffAugmentation2 } from "../assets";
import {
  Building2,
  ClapperboardIcon,
  Construction,
  CpuIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  PiggyBankIcon,
  ShoppingCart,
} from "lucide-react";
import StaffAugmentationPP from "../components/pricingNplans/StaffAugmentationPP";
import { staffAugmentationData } from "../utils/data";
import CustomAccordion from "../components/CustomAccordion";
// import StaffAugmentationPP from "../components/pricingNplans/StaffAugmentationPP";

const whyChooseUs = [
  {
    id: 1,
    title: "Proven Track Record",
    description: `company name has an established history of delivering top-tier Staff Augmentation services to organizations of all sizes.`,
  },
  {
    id: 2,
    title: "Customized Solutions",
    description: `Understanding that each organization has unique requirements, our services are tailored to match your specific needs, ensuring the best fit for your projects.`,
  },
  {
    id: 3,
    title: "Cost-Efficiency",
    description: `Leveraging our Staff Augmentation services allows you to reduce recruitment and training costs, making your IT projects more cost-effective.`,
  },
  {
    id: 4,
    title: "Timely Delivery",
    description: `Our agile approach ensures swift deployment of resources to meet your project timelines, maintaining your competitive edge.`,
  },
  {
    id: 5,
    title: "Quality Assurance",
    description: `company name emphasizes quality, providing professionals who are not only skilled but also aligned with your organizational culture.`,
  },
];

const StaffAugmentation = () => {
  return (
    <Wrapper>
      <div className='mt-20 lg:flex lg:gap-4'>
        <div className='my-14 px-2 text-zinc-700 lg:flex-[2_2_0]'>
          <div className='flex flex-col items-center lg:flex-row'>
            <h2 className='text-3xl font-bold text-zinc-800 sm:text-4xl'>
              <span className='font-semibold text-blue-500 underline'>
                Company name
              </span>
              : Overview of IT Consulting Services - Staff Augmentation
            </h2>
            <img
              src={staffAugmentation}
              className='mx-auto mt-14 w-[70%] rounded-lg lg:w-[55%]'
              alt=''
            />
          </div>

          <article className='py-14'>
            <div className='my-32'>
              <h4 className='text-3xl font-semibold'>Service Overview:</h4>
              <p className='pt-2 text-lg font-light'>
                <span className='text-blue-500'>At company name,</span> we stand
                as a premier IT Consulting firm, renowned for our unparalleled
                expertise in Staff Augmentation services. Our strategic
                methodology empowers businesses to fortify their workforce by
                seamlessly integrating specialized IT professionals, bridging
                skill gaps, and bolstering project capabilities. With a profound
                understanding of the dynamic IT landscape, Company Name offers a
                diverse spectrum of Staff Augmentation services, tailored to
                meet the distinct technological needs and project objectives of
                organizations.
              </p>
            </div>

            <section className='mt-10'>
              <h4 className='pb-20 text-4xl font-semibold capitalize'>
                Key Features of{" "}
                <span className='text-blue-500'>company name</span> Staff
                Augmentation Services:
              </h4>
              {staffAugmentationData &&
                staffAugmentationData?.map(data => (
                  <CustomAccordion
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    point={data.description}
                  />
                ))}
            </section>
          </article>

          {/* <------- companies we serve SECTION ----> */}
          <img
            src={staffAugmentation2}
            className='mx-auto mt-14 w-[70%] rounded-lg lg:w-[55%]'
            alt=''
          />
          <section>
            <div className='max-w-screen-xl px-4 py-14 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
              <div className='grid grid-cols-1 items-center gap-y-8 lg:gap-x-3'>
                <div className='mx-auto max-w-full place-items-center text-center lg:mx-0'>
                  <h2 className='text-3xl font-bold sm:text-4xl'>
                    Industries We Serve:
                  </h2>

                  <p className='mt-4 text-gray-600'>
                    <span className='text-blue-500'>company name</span> provides
                    Staff Augmentation services to a wide range of industries,
                    including but not limited to:
                  </p>

                  <button className='bg-green hover:bg-darkGreen  mx-auto mt-5 flex rounded border-0 px-8 py-2 text-lg text-white focus:outline-none'>
                    Contact Us
                  </button>
                </div>

                <div className=' grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:mx-auto lg:w-[60%]'>
                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block p-3'>
                      <CpuIcon className='h-7 w-7 text-darkred' />
                    </span>

                    <p className=' text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Technology and Software Development
                    </p>
                  </a>

                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block p-3'>
                      <HeartPulseIcon className='h-7 w-7 text-darkred' />
                    </span>

                    <p className=' text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Healthcare
                    </p>
                  </a>

                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block p-3'>
                      <PiggyBankIcon className='h-7 w-7 text-darkred' />
                    </span>

                    <p className='text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Finance and Banking
                    </p>
                  </a>

                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block p-3'>
                      <Construction className='h-7 w-7 text-darkred' />
                    </span>

                    <p className=' text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Manufacturing
                    </p>
                  </a>

                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block p-3'>
                      <ShoppingCart className='h-7 w-7 text-darkred' />
                    </span>

                    <p className=' text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Retail and E-commerce
                    </p>
                  </a>

                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block p-3'>
                      <Building2 className='h-7 w-7 text-darkred' />
                    </span>

                    <p className=' text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Government and Public Sector
                    </p>
                  </a>

                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block rounded-lg  p-3'>
                      <GraduationCapIcon className='h-7 w-7 text-darkred' />
                    </span>

                    <p className=' text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Education
                    </p>
                  </a>

                  <a className='block rounded-xl border bg-headline p-4 text-white shadow-lg hover:border-darkred'>
                    <span className='inline-block p-3'>
                      <ClapperboardIcon className='h-7 w-7 text-darkred' />
                    </span>

                    <p className=' text-zinc-400 sm:mt-1 sm:block sm:text-sm'>
                      Entertainment and Media
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className='my-14 space-y-4'>
            <h3 className='pb-12 text-3xl font-bold sm:text-4xl'>
              Why Choose <span className='text-blue-500'>company name</span> for{" "}
              <span className='text-4xl italic underline decoration-wavy' style={{
                textDecorationColor: '#057bc4'
              }}>
                {" "}
                Staff Augmentation 
              </span> :
            </h3>
            <ul className='list-disc space-y-4 text-lg'>
              {whyChooseUs.map(data => (
                <li key={data.id}>
                  <p>
                    <strong>{data.title}: </strong> {data.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <div className='mx-auto lg:w-[70%]'>
            <StaffAugmentationPP />
          </div>

          <div className='my-16 space-y-4 rounded-md bg-gradient-to-r from-yellow-500 to-darkred px-6 py-10'>
            <h3 className='text-3xl font-semibold text-greenishBlue'>
              Contact <span className='text-blue-500'>company name</span>:
            </h3>
            <p className='text-paragraph'>
              For a boost in your IT projects through skilled professionals via
              Staff Augmentation, connect with{" "}
              <span className='text-blue-500'>company name</span> today. Our
              collaborative approach ensures a tailored understanding of your
              needs, delivering the precise IT talent to steer your projects
              towards triumph.
              <br />
              <br />
              <span className='text-blue-500'>company name</span> stands as your
              dependable partner in IT Staff Augmentation, enabling you to reach
              business milestones while retaining an edge in the ever-evolving
              IT domain.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StaffAugmentation;
