import { MailCheckIcon, MapPinnedIcon, MessageSquareIcon, PhoneIcon } from "lucide-react";
import Wrapper from "../components/Wrapper";

const ContactUs = () => {
  return (
    <section className='my-32'>
      <Wrapper>
        <div className='py-6'>
          <div className='mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8'>
            <div className='py-6 md:px-6 md:py-0'>
              <h1 className='text-4xl font-bold'>Get in touch</h1>
              <p className='pb-4 pt-2'>Fill in the form to start a conversation</p>
              <div className='space-y-4'>
                <p className='flex items-center gap-2'>
                  <MapPinnedIcon />
                  <span>Fake address, 9999 City</span>
                </p>
                <p className='flex items-center gap-2'>
                  <PhoneIcon />
                  <span>123456789</span>
                </p>
                <p className='flex items-center gap-2'>
                  <MailCheckIcon />
                  <span>contact@business.com</span>
                </p>
              </div>
            </div>
            <form noValidate='' className='flex flex-col space-y-6 py-6 md:px-6 md:py-0'>
              <label className='block'>
                <span className='mb-2'>Full name</span>
                <input
                  type='text'
                  placeholder='Leroy Jenkins'
                  className='mt-2 block w-full rounded-md border border-zinc-300 p-2 focus:outline-greenishBlue'
                  spellCheck='false'
                />
              </label>
              <label className='block'>
                <span className='mb-2'>Email address</span>
                <input
                  type='email'
                  placeholder='leroy@jenkins.com'
                  className='mt-2 block w-full rounded-md border border-zinc-300 p-2 focus:outline-greenishBlue'
                />
              </label>
              <label className='block'>
                <span className='mb-2'>Message</span>
                <textarea
                  rows='3'
                  className='mt-2 block focus:outline-greenishBlue w-full rounded-md border border-zinc-300 p-2'
                  spellCheck='false'
                  placeholder='message...'
                ></textarea>
              </label>
              <button
                type='button'
                className='focus:ri focus:ri hover:ri self-center rounded text-palewhite bg-greenishBlue px-8 py-3 text-lg hover:ring  focus:ring'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactUs;
