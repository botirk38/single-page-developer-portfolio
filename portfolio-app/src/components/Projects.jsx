import spaceTourismWebsite from "../assets/images/space-tourism-website.jpg";
import ageCalculatorApp from "../assets/images/ageCalculatorApp.webp";
import socialMediaDashboard from "../assets/images/social-media-dashboard.webp";
import newsLetterSignup from "../assets/images/newsletter-sign-up.webp";
import newsHomePage from "../assets/images/news-homepage.webp";

export default function Projects(){
    return(
        <section className="container grid place-items-center gap-6 my-4 max-w-sm border-b-2 border-white">

            <div className="flex justify-between items-start text-center w-full">
                <h1 className="text-xl text-white font-bold py-2">Projects</h1>
                <button className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green">Contact Me</button>
                
            </div>

            <div className="flex justify-center items-center flex-col  w-full">
            <a href="https://space-tourism-website-botir.netlify.app/" rel="noreferrer" target="_blank">
                <img
                    src={spaceTourismWebsite}
                    alt="My project which I created for a space tourism company"
                    className="object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </a>
            <div className="flex-col items-center justify-items-start w-full my-3">
                <h1 className="text-lg text-white uppercase font-semibold">Space Tourism Website</h1>
                <div className="flex items-center justify-items-start w-full">
                    <p className="text-white text-base">HTML</p>
                    <p className="text-white text-base mx-2">CSS</p>
                    <p className="text-white text-base">REACT</p>
                </div>
                <div className="flex items-center justify-items-start w-full">
                <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green mr-4" href="https://space-tourism-website-botir.netlify.app/" rel="noreferrer" target="_blank">View Project</a>
                <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green ml-4" href="https://github.com/botirk38/space-tourism-website-main" rel="noreferrer" target="_blank">View Code</a>
                </div>
            </div>


            
            </div>


            <div className="flex justify-center items-center flex-col  w-full">
                <a href="https://age-calculator-app-botir.netlify.app/" rel="noreferrer" target="_blank">
                    <img
                        src={ageCalculatorApp}
                        alt="My project which I created for a space tourism company"
                        className="object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </a>
                <div className="flex-col items-center justify-items-start w-full my-3">
                    <h1 className="text-lg text-white uppercase font-semibold">Age Calculator App</h1>
                    <div className="flex items-center justify-items-start w-full">
                        <p className="text-white text-base">HTML</p>
                        <p className="text-white text-base mx-2">CSS</p>
                        <p className="text-white text-base">REACT</p>
                    </div>
                    <div className="flex items-center justify-items-start w-full">
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green mr-4" href="https://age-calculator-app-botir.netlify.app/" rel="noreferrer" target="_blank">View Project</a>
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green ml-4" href="https://github.com/botirk38/age-calculator-app" rel="noreferrer" target="_blank">View Code</a>
                    </div>
                </div>

            </div>


            <div className="flex justify-center items-center flex-col  w-full">
                <a href="https://social-media-dashboard-botir.netlify.app/" rel="noreferrer" target="_blank">
                    <img
                        src={socialMediaDashboard}
                        alt="My project which I created for a space tourism company"
                        className="object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </a>
                <div className="flex-col items-center justify-items-start w-full my-3">
                    <h1 className="text-lg text-white uppercase font-semibold">Social Media Dashboard</h1>
                    <div className="flex items-center justify-items-start w-full">
                        <p className="text-white text-base">HTML</p>
                        <p className="text-white text-base mx-2">CSS</p>
                        <p className="text-white text-base">REACT</p>
                    </div>
                    <div className="flex items-center justify-items-start w-full">
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green mr-4" href="https://social-media-dashboard-botir.netlify.app/" rel="noreferrer" target="_blank">View Project</a>
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green ml-4" href="https://github.com/botirk38/social-media-dashboard-with-theme-switcher-master" rel="noreferrer" target="_blank">View Code</a>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center flex-col  w-full">
                <a href="https://botirk38.github.io/newsletter-signup/" rel="noreferrer" target="_blank">
                    <img
                        src={newsLetterSignup}
                        alt="My project which I created for a space tourism company"
                        className="object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </a>
                <div className="flex-col items-center justify-items-start w-full my-3">
                    <h1 className="text-lg text-white uppercase font-semibold">Newsletter Signup</h1>
                    <div className="flex items-center justify-items-start w-full">
                        <p className="text-white text-base">HTML</p>
                        <p className="text-white text-base mx-2">CSS</p>
                        <p className="text-white text-base">REACT</p>
                    </div>
                    <div className="flex items-center justify-items-start w-full">
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green mr-4" href="https://botirk38.github.io/newsletter-signup/" rel="noreferrer" target="_blank">View Project</a>
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green ml-4" href="https://github.com/botirk38/newsletter-signup" rel="noreferrer" target="_blank">View Code</a>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center flex-col  w-full">
                <a href="hhttps://news-hompage-botir.netlify.app/" rel="noreferrer" target="_blank">
                    <img
                        src={newsHomePage}
                        alt="My project which I created for a space tourism company"
                        className="object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </a>
                <div className="flex-col items-center justify-items-start w-full my-3">
                    <h1 className="text-lg text-white uppercase font-semibold">News Homepage</h1>
                    <div className="flex items-center justify-items-start w-full">
                        <p className="text-white text-base">HTML</p>
                        <p className="text-white text-base mx-2">SASS</p>
                        <p className="text-white text-base">REACT</p>
                    </div>
                    <div className="flex items-center justify-items-start w-full">
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green mr-4" href="https://news-hompage-botir.netlify.app/" rel="noreferrer" target="_blank">View Project</a>
                    <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green ml-4" href="https://github.com/botirk38/news-homepage-main" rel="noreferrer" target="_blank">View Code</a>
                    </div>
                </div>
            </div>

        </section>
        
    )
}