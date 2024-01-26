import Wrapper from "../components/Wrapper";
import { mastercard, securityCard, visa } from "../assets";

const Checkout = () => {
  return (
    <Wrapper>
      <div className='mx-auto my-32 max-w-[80%] lg:max-w-[60%]'>
        <h3 className='pb-10 text-center text-4xl font-bold'>Checkout Form</h3>
        <form action='' className='rounded-md  border  px-4 py-4'>
          <div className="pb-6">
            <h3 className='text-2xl font-semibold'>Billing Address</h3>
            <p className='mt-6 text-lg font-semibold'>Full Name</p>
            <input
              type='text'
              id='name'
              minLength='10'
              maxLength='32'
              placeholder='Enter your full name...'
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
            />

            <p className='mt-6 text-lg font-semibold'>Email</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              minLength='10'
              maxLength='32'
              id='email'
              type='email'
              placeholder='Enter your email...'
            />

            <p className='mt-6 text-lg font-semibold'>Address</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              type='text'
              id='address'
              placeholder='Enter your address...'
            />

            <p className='mt-6 text-lg font-semibold'>City</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              type='text'
              id='city'
              placeholder='Enter your city...'
            />

            <p className='mt-6 text-lg font-semibold'>State</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              id='state'
              type='text'
              placeholder='Enter your state...'
            />

            <p className='mt-6 text-lg font-semibold'>Zip</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              id='zip'
              type='text'
              placeholder='Enter your zip...'
            />
          </div>

          <hr className='border-gray-500 ' />

          <div className='py-4'>
            <h3 className='text-2xl font-semibold'>Payment</h3>
            <ul>
              <li className='flex items-center'>
                
                <img src={visa} alt='' width={37} />
                <img src={mastercard} width={40} alt='' />
                <img src={securityCard} width={40} alt='' />
              </li>
            </ul>

            <p className='mt-6 text-lg font-semibold'>Card Number</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              name='credit-number'
              type='tel'
              pattern='\d*'
              maxLength='19'
              placeholder='Card Number'
            />

            <p className='mt-6 text-lg font-semibold'>Exp Month</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              type='tel'
              pattern='\d*'
              maxLength='7'
              placeholder='MM / YY'
            />

            <p className='mt-6 text-lg font-semibold'>Exp Year</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              type='tel'
              pattern='\d*'
              maxLength='7'
              placeholder='MM / YY'
            />

            <p className='mt-6 text-lg font-semibold'>CCV</p>
            <input
              className='w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out'
              name='credit-cvc'
              type='tel'
              pattern='\d*'
              maxLength='4'
              placeholder='CVC'
            />
          </div>

          <div className="py-4 space-y-4">
            <p className="text-2xl font-semibold mb-2">Your order</p>
            <select name="services" id="services" className=" w-full p-2 bg-zinc-200 rounded-sm">
              <optgroup value="Services">Services:</optgroup>
              <option value="IT Consulting Services">IT Consulting Services</option>
              <option value="IT Staff Recruiting">IT Staff Recruiting</option>
              <option value="Staff Augmentation">Staff Augmentation</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>

            <select name="plans" id="plans" className="bg-zinc-200 rounded-sm w-full p-2">
              <option value="BasicPlan">Basic Plan</option>
              <option value="standardPlan">Standard Plan</option>
              <option value="advancedPlan">Advanced Plan</option>
              <option value="premiumPlan">Premium Plan</option>
            </select>
          </div>

          <button className='mt-10 w-full rounded-md bg-green py-2 bg-greenishBlue text-white transition-all duration-150 ease-in-out hover:bg-darkGreen'>
            Continue to checkout
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Checkout;
