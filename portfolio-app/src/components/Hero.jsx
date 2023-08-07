import mobileProfilePic from '../assets/images/image-profile-mobile.jpg'

import '../App.css';

export default function Hero() {
    return (
        <section className="flex justify-center items-center flex-col hero px-1 border-b-2 border-white max-w-sm ">
            <picture className="flex justify-center items-center -z-50 bg-circle-img w-full">
                <img src={mobileProfilePic} alt="Profile picture" className="object-scale-down   min-h-min max-w-[16rem]" />
            </picture>

            <div className="grid gap-2 grid-rows-2 text-center w-full   ">
                <h1 className="text-xl text-white  font-bold">Nice to meet you!</h1>
                <h1 className="text-xl text-white  font-bold -mt-7 px-3">I&apos;m <span className="underline decoration-limish-green underline-offset-4">Botir Khaltaev.</span></h1>
                <p className='text-white text-lg '>A creative frontend developer on a mission to craft visually stunning and user-friendly web applications that leave a lasting impact.</p>
            </div>

            <div className="flex justify-center items-center flex-col text-center mb-20  ">
                <button className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green">Contact Me</button>
            </div>
        </section>
    );}

