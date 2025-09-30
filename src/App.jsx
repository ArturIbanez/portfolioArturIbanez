import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS

// Importando os componentes
import Header from './components/layouts/Header';
import Hero from './components/layouts/Hero';
import About from './components/layouts/About';
import Contact from './components/layouts/Contato';
import Projects from './components/layouts/Projetos';
import Footer from './components/layouts/Footer';

function App() {
  // Inicializa o AOS quando o componente App é montado
  useEffect(() => {
    AOS.init({
      once: false, // Permite que a animação aconteça toda vez que o elemento entra na tela
      duration: 1000, // Duração da animação
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