import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Form from './components/Form'
import NavbarBottom from './components/NavbarBottom'
import { useRef } from 'react'

import './App.css'




export default function App() {
  const contactRef = useRef(null);

  const executeScroll = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  return (
    <>
    <div className='grid place-items-center grid-cols-1 grid-rows-1 w-screen grid-flow-row-dense border-b-2 border-white sm:place-items-start sm:grid-cols-2 sm:grid-rows-1 sm:grid-flow-row sm:auto-cols-max sm:auto-rows-max'>
        <a href="#" className="text-white text-lg mb-2 font-bold sm:mb-0 col-start-1 sm:px-4 py-3">botirkhaltaev</a>
        <Navbar />
        <Hero onContactClick={executeScroll}/>
      </div>
    <Skills/>
    <Projects onContactClick={executeScroll}/>
    <Form contactRef={contactRef}/>
    <NavbarBottom/>
    </>
  )
}