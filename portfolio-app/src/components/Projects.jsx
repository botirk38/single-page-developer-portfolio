import PropTypes from 'prop-types';
import spaceTourismWebsite from "../assets/images/space-tourism-website.jpg";
import ipTrackerApp from "../assets/images/ipAddressTracker.jpeg";
import urlShorteningApp from "../assets/images/shortly.jpg";
import multiStepForm from "../assets/images/multi-step-form.jpg";
import kanbanApp from "../assets/images/desktop-img-dark.png";
import todoApp from "../assets/images/todo-app-dark.png";

export default function Projects({ onContactClick }) {
  return (
    <section className="container grid place-items-center gap-6 my-4 border-b-2 border-white p-5 sm:place-items-start sm:grid-cols-2 sm:p-0">
      <div className="flex justify-between items-start text-center w-full sm:col-span-2">
        <h1 className="text-xl text-white font-bold py-2 lg:text-2xl">Projects</h1>
        <button onClick={onContactClick} className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green">Contact Me</button>
      </div>

      {[
      {
        image:kanbanApp,
        title: "Kanban Task Management Web App",
        link: 'https://kanban-app-botir.vercel.app/',
        code: 'https://github.com/botirk38/kanban-task-management-app',
        tech: ['NEXT.JS', 'TAILWIND', 'TYPESCRIPT','PYTHON', 'DJANGO']
      },

      {
        image: spaceTourismWebsite,
        title: 'Space Tourism Website',
        link: 'https://space-tourism-website-botir.netlify.app/',
        code: 'https://github.com/botirk38/space-tourism-website-main',
        tech: ['HTML', 'CSS', 'REACT']
      },

      {
        image: multiStepForm,
        title: 'Multi-Step Form',
        link: 'https://multi-step-form-botir.netlify.app/',
        code: 'https://github.com/botirk38/multi-step-form-main',
        tech: ['HTML', 'STYLED COMPONENTS', 'REACT', 'TYPESCRIPT']
      },

      {
        image: urlShorteningApp,
        title: 'Shortly URL Shortening App',
        link: 'https://shortly-url-botir.netlify.app/',
        code: 'https://github.com/botirk38/url-shortening-api-master',
        tech: ['HTML', 'TAILWIND', 'REACT']
      },
      {
        image: ipTrackerApp,
        title: 'IP Address Tracker App',
        link: 'https://ip-address-tracker-botir.netlify.app/',
        code: 'https://github.com/botirk38?tab=repositories',
        tech: ['HTML','CSS','REACT']
      },
      {
        image: todoApp,
        title: 'Todo App',
        link: 'https://todo-app-botir.netlify.app/',
        code: 'https://github.com/botirk38/todo-app-main/tree/main',
        tech: ['HTML','SASS','REACT','TYPESCRIPT']


      }
      
  
     ].map((project, index) => (
        <div key={index} className="project-container flex justify-items-start items-center flex-col w-full relative mb-5">
          <a href={project.link} rel="noreferrer" target="_blank">
            <img
            src={project.image}
            alt={`My project which I created for ${project.title}`}
            className="object-cover h-100 aspect-video  w-full transform transition-transform duration-300 ease-in-out hover:scale-105 aspect-auto"
            />

          </a>
          <div className="desktop-only project-overlay absolute top-0 left-0 right-0 bottom-0 flex flex-row justify-center items-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green mr-4" href={project.link} rel="noreferrer" target="_blank">View Project</a>
            <a className="text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green ml-4" href={project.code} rel="noreferrer" target="_blank">View Code</a>
          </div>
          <div className="flex justify-items-start items-center w-full">
            <h1 className="text-lg text-white uppercase font-semibold">{project.title}</h1>
          </div>
          <div className="flex items-center justify-items-start w-full">
            {project.tech.map((tech, techIndex) => (
              <p key={techIndex} className="text-white text-base mx-2">{tech}</p>
            ))}
          </div>
          <div className="mobile-only flex flex-row items-center justify-items-center w-full">
            <a className="mobile-only text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green mr-4" href={project.link} rel="noreferrer" target="_blank">View Project</a>
            <a className="mobile-only text-white text-base py-6 px-3 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green ml-4" href={project.code} rel="noreferrer" target="_blank">View Code</a>
          </div>
        </div>
      ))}
    </section>
  );
}

Projects.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};
