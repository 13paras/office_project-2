import { Link } from "react-router-dom";
import { hero1 } from "../assets";
import Wrapper from "./Wrapper";

const Hero = () => {

  return (
    <section className="">
      <Wrapper>

	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:h-screen lg:items-center lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Your Trusted Partner for <span className="text-darkred">IT Services & Solutions.</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">We Deliver What You Need, When You Need It.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to={'/contact-us'}>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-greenishBlue text-palewhite">Contact Us</a>
				</Link>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-96 xl:h-112 2xl:h-128">
			<img src={hero1} alt="" className="object-contain w-[80%] lg:w-full" />
		</div>
	</div>
      </Wrapper>
</section>
  );
};

export default Hero;
