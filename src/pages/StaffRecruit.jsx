import { itStaffRecruit } from "../assets";
import Wrapper from "../components/Wrapper";
import { staffRecruitmentData } from "../utils/data";
import StaffRecruitmentPP from "../components/pricingNplans/StaffRecruitmentPP";
import CustomAccordion from "../components/CustomAccordion";

const StaffRecruit = () => {
  return (
    <Wrapper>
      <div className='mt-20'>
        {/* Right */}
        <section className='my-14 px-2 text-zinc-700 lg:flex-[2_2_0]'>
          <h2 className='rounded-md bg-gradient-to-r from-yellow-400 to-darkred p-4 text-xl text-zinc-800'>
            Piscal Innovations we redefine staffing solutions with a dedicated
            focus on IT recruitment services. We specialize in identifying
            top-tier IT talent, tailoring our recruitment process to meet your
            organization&apos;s specific needs. Leveraging extensive networks
            and industry insights, we source candidates with the right skills,
            experience, and cultural alignment. Our services encompass strategic
            talent acquisition, seamless onboarding, and ongoing support,
            ensuring a perfect fit between exceptional IT professionals and your
            company&apos;s requirements.
          </h2>
          <img
            src={itStaffRecruit}
            className='mx-auto mt-10 rounded-lg lg:w-[80%]'
            alt=''
          />

          <article className='py-14'>
            <section className='mt-10'>
              {staffRecruitmentData &&
                staffRecruitmentData?.map((data, index) => (
                  <CustomAccordion
                    key={index}
                    id={index + 1}
                    title={data.title}
                    description={data.description}
                    points={data.points}
                  />
                ))}
            </section>
          </article>

          {/* -----> PlansNPricing <----- */}
          <div className='mx-auto lg:w-[70%]'>
            <StaffRecruitmentPP />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default StaffRecruit;
