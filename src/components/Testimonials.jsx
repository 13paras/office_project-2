import Wrapper from "./Wrapper";
import { testimonialsCover } from "../assets";
import { testimonialS } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section
      className='my-32 flex flex-col bg-black/30 bg-zinc-700 bg-cover bg-fixed bg-center text-white bg-blend-overlay'
      style={{
        backgroundImage: `url(${testimonialsCover})`,
      }}
    >
      <Wrapper>
        <div className='container mx-auto mb-12 flex flex-col items-center md:p-10 md:px-12'>
          <h1 className='leadi p-4 text-center text-4xl font-semibold'>
            Some words from our clients
          </h1>
        </div>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mb-14"
        >
          {testimonialS.map(testimonial => (
            <SwiperSlide
              key={testimonial.id}
            >
              <div className='rounded-t-lg bg-white px-4 py-12 sm:px-8 md:px-12'>
                <p className='relative px-6 py-1 text-center text-lg italic text-gray-900'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    fill='currentColor'
                    className='h-8 w-8 text-darkred'
                  >
                    <path d='M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z'></path>
                    <path d='M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z'></path>
                  </svg>
                  {testimonial.review}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    fill='currentColor'
                    className='absolute right-0 h-8 w-8 text-darkred'
                  >
                    <path d='M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z'></path>
                    <path d='M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z'></path>
                  </svg>
                </p>
              </div>

              <div className='flex flex-col items-center justify-center rounded-b-lg bg-darkred p-8 text-gray-900'>
                <img
                  src='https://source.unsplash.com/50x50/?portrait?4'
                  alt=''
                  className='-mt-16 mb-2 h-16 w-16 rounded-full bg-gray-700 bg-cover  bg-center'
                />
                <p className='leadi text-xl font-semibold'>{testimonial.name}</p>
                <p className='text-sm uppercase'>{testimonial.post}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
