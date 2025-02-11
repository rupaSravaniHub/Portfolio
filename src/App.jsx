import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import { Projects } from './components/projects'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About />
     <Services/>
     <Projects/>
    </>
  )
}

export default App
