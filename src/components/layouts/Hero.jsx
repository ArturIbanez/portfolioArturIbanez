import { useState, useEffect } from 'react';

const rotatingWords = ['FULLSTACK', 'FREELANCER', 'WEB', 'JAVASCRIPT'];

function Hero() {
  const [localTime, setLocalTime] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('word-enter');

  useEffect(() => {
    const now = new Date();
    const time = now.toLocaleTimeString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: '2-digit',
      minute: '2-digit'
    });
    setLocalTime(`${time} GMT-3`);
  }, []);

  useEffect(() => {
    const totalAnimationTime = 1000;
    const displayTime = 3000;
    const intervalId = setInterval(() => {
      setAnimationClass('word-exit');

      const timeoutId = setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
        setAnimationClass('word-enter');
      }, totalAnimationTime / 2);
      return () => clearTimeout(timeoutId);

    }, displayTime + totalAnimationTime / 2);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="line"></div>
          <div className="text">
            <h1
              className={`row-1 ${animationClass}`}
              data-aos="fade-right"
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
                AGENDA DISPONÍVEL
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
