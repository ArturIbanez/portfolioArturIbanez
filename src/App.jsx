import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/layouts/Header';
import Hero from './components/layouts/Hero';
import About from './components/layouts/About';
import Contact from './components/layouts/Contato';
import Projects from './components/layouts/Projetos';
import Footer from './components/layouts/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;