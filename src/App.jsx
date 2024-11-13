import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import About from './components/About'
import Eye from './components/Eye'
import FeaturedProjects from './components/FeaturedProjects'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {



  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <section className='w-full h-full bg-zinc-800'>
        <nav>
          <Navbar />
        </nav>
        <Hero />
        <Slider />
        <About />
        <Eye />
        <FeaturedProjects />
        <Cards />
        <Contact />
        <Footer />
      </section>


    </>
  )
}

export default App
