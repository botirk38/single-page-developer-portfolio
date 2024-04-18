import profilePic from "../assets/images/image-profile-mobile.jpg";
import "../App.css";

import PropTypes from "prop-types";
import { HeroHighlight } from "./hero-highlight";
import { TextGenerateEffect } from "./text-generate-effect";

export default function Hero({ onContactClick }) {
    return (
        <section className="grid place-items-center hero px-5 order-2  mb-8 w-screen sm:order-1 sm:grid-cols-2 sm:col-start-1 sm:col-end-3  sm:row-start-2 sm:row-span-2 sm:px-0 lg:pl-10">
            <picture className="order-1 sm:order-2 sm:min-h-full sm:justify-self-end sm:col-start-2 sm:max-w-sm md:max-w-lg">
                <img
                    src={profilePic}
                    alt="Botir Khaltaev"
                    className="object-cover -mt-5 sm:-mt-3  sm:w-full md:max-w-md lg:max-w-lg"
                />
            </picture>

            <div className="flex justify-center flex-col items-center order-2 sm:order-1 sm:col-start-1 sm :col-start-2 sm:items-start lg:pl-10">
                <div className="grid gap-2 grid-rows-1 text-center w-full sm:text-start ">
                    <TextGenerateEffect
                        words={"Hi, it's nice to meet you! I'm Botir Khaltaev."} 
                    />
                    <TextGenerateEffect
                        words={
                            "A dedicated software engineer, committed to designing, implementing, and optimizing secure and scalable systems. Passionate about problem-solving and ensuring seamless user experiences."
                        }
                        className={"text-sm font-normal"}
                    />
                </div>
                <div className="px-5 md:px-0">
                    <button
                        onClick={onContactClick}
                        className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold  hover:text-limish-green"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = {
    onContactClick: PropTypes.func.isRequired,
};
