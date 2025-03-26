import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/footer'
import Preloader from './components/Preloader'
import Industriessurvied from './pages/Industriessurvied.jsx'
import Gallery from './pages/Gallery'
import LoadingSpinner from './components/LoadingSpinner'
const App = () => {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        delay: 0,
        easing: 'ease-out',
        disableInMobile: true
      });
    };

    document.addEventListener('preloaderDone', initAOS);
    return () => document.removeEventListener('preloaderDone', initAOS);
  }, []);

  return (
    <>
      <Preloader />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industriessurvied" element={<Industriessurvied />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </main>
        <LoadingSpinner />
        <Footer />
      </div>
    </>
  )
}

export default App
