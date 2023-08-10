import githubIcon from "../assets/images/icon-github.svg";
import linkedlnIcon from "../assets/images/icon-linkedin.svg";
import frontEndMentorIcon from "../assets/images/icon-frontend-mentor.svg";

export default function NavbarBottom() {
    return(
        <header className="flex justify-center items-center p-5 flex-wrap bg-greyish-black min-h-full w-screen lg:justify-between">
            <a href="#" className="bold text-white text-lg">botirkhaltaev</a>
            <nav className="flex justify-evenly items-center ">
                <a href="https://github.com/botirk38" className="text-white text-lg py-3 px-6 hover:text-gray-400"  rel="noreferrer" target="_blank"><img src={githubIcon} alt="Link to my github" className="object-scale-down"/></a>
                <a href="https://www.linkedin.com/in/botir-khaltaev-964977264/" className="text-white text-lg py-3 px-6 hover:text-gray-400"  rel="noreferrer" target="_blank"><img src={linkedlnIcon} alt="Link to my linkedln profile" className="object-scale-down"/></a>
                <a href="https://www.frontendmentor.io/profile/botirk38" className="text-white text-lg py-3 px-6 hover:text-gray-400"  rel="noreferrer" target="_blank"><img src={frontEndMentorIcon} alt="Link to my frontend mentor profile" className="object-scale-down"/></a>
            </nav>
        </header>
    )
}