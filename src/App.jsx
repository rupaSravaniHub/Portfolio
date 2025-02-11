import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import { Experience } from './components/experience'
import { Projects } from './components/projects'
import { Contact } from './components/contact'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About />
     {/* <Services/> */}
     <Experience/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
