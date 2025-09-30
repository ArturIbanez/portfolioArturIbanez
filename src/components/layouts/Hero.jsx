import { useState, useEffect } from 'react';

const rotatingWords = ['FULLSTACK', 'FREELANCER', 'WEB', 'JAVASCRIPT'];

function Hero() {
  const [localTime, setLocalTime] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('word-enter'); // Novo estado para controlar a classe de animação

  // Efeito para o relógio (seu código original)
  useEffect(() => {
    const now = new Date();
    const time = now.toLocaleTimeString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: '2-digit',
      minute: '2-digit'
    });
    setLocalTime(`${time} GMT-3`);
  }, []);

  // Efeito para a troca de palavras com animação
  useEffect(() => {
    const totalAnimationTime = 1000; // Tempo total da animação de saída/entrada (em ms)
    const displayTime = 3000;      // Tempo que a palavra fica visível antes de começar a sair

    const intervalId = setInterval(() => {
      setAnimationClass('word-exit'); // Inicia a animação de saída

      // Após a animação de saída, troca a palavra e inicia a animação de entrada
      const timeoutId = setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
        setAnimationClass('word-enter'); // Inicia a animação de entrada
      }, totalAnimationTime / 2); // Metade do tempo para a troca e entrada

      // Limpeza do timeout interno
      return () => clearTimeout(timeoutId);

    }, displayTime + totalAnimationTime / 2); // Intervalo total: tempo visível + metade do tempo de animação (para garantir que a entrada seja suave)

    // Limpeza do intervalo principal
    return () => clearInterval(intervalId);
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="line"></div>
          <div className="text">
            <h1
              className={`row-1 ${animationClass}`} // Aplica a classe de animação dinamicamente
              data-aos="fade-right" // Você pode manter o AOS, mas a animação CSS pode sobrescrevê-lo ou se somar
              data-aos-duration="2000"
            >
              {rotatingWords[currentWordIndex]}
            </h1>
            <h1 className="row-2" data-aos="flip-down" data-aos-duration="2000">DESENVOLVEDOR</h1>
            <h1 className="row-3" data-aos="fade-left" data-aos-duration="2000">ENTUSIASTA</h1>
          </div>
          <div className="short-info">
            <div className="left-side" data-aos="fade-up-right" data-aos-delay="300">
              <h1 className='loc'>Localizado em Rio Grande do Sul, Brasil</h1>
              <p className="time">{localTime}</p>
            </div>
            <div className="right-side" data-aos="fade-up-left" data-aos-delay="300">
              <p className='disponibilidade'>Disponibilidade Freelancer</p>
              <h1 className='limitada'>
                <div className="pulse"></div>
                AGENDA LIMITADA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;