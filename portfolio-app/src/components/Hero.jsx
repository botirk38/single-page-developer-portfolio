import profilePic from "../assets/images/image-profile-mobile.jpg";
import '../App.css';

import PropTypes from 'prop-types';

export default function Hero({ onContactClick }) {
    return (
        <section className="grid place-items-center hero px-5 order-2  mb-8 w-screen sm:order-1 sm:grid-cols-2 sm:col-start-1 sm:col-end-3  sm:row-start-2 sm:row-span-2 sm:px-0 lg:pl-10">
            <picture className="order-1 sm:order-2 sm:min-h-full sm:justify-self-end sm:col-start-2 sm:max-w-sm md:max-w-lg">
                <img src={profilePic} alt="Botir Khaltaev" className="object-cover -mt-5 sm:-mt-3  sm:w-full md:max-w-md lg:max-w-lg" />
            </picture>

            <div className="flex justify-center flex-col items-center order-2 sm:order-1 sm:col-start-1 sm :col-start-2 sm:items-start lg:pl-10">
                <div className="grid gap-2 grid-rows-1 text-center w-full sm:text-start ">
                    <h1 className="text-xl text-white  font-bold sm:text-xl md:text-2xl sm:break-words ">
                    Nice to meet you! <span className="">I&apos;m</span>
                    <span className=" underline decoration-limish-green underline-offset-4 p-3"> Botir Khaltaev.</span>
                </h1>
                <p className='text-white text-lg p-3'>A creative full stack developer on a mission to craft visually stunning and user-friendly web applications that leave a lasting impact.</p>
            </div>
                <div className="px-5 md:px-0">
                <button onClick={onContactClick} className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold  hover:text-limish-green">Contact Me</button>
                </div>
            </div>

           
        </section>
    );
}

Hero.propTypes = {
    onContactClick: PropTypes.func.isRequired,
};


