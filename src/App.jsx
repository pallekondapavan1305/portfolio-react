// import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Aboutme from './components/Aboutme'
import Technologies from './components/Technologies'
import Experence from './components/Experence'
import Projects from './components/Projects'
import Contacts from './components/contact/Contacts'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:bg-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'><div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Page1 />
        <Aboutme />
        <Technologies />
        <Experence />
        <Projects />
        <Contacts />
      </div>

    </div>
  )
}

export default App
