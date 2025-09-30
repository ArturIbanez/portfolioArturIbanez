import profileImg from '../../assets/imagem-eu2.png';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="content">
          <div className="title">
            <h2 data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">Sobre <hr /></h2>
            <h1 data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">Artur Ibañez</h1>
          </div>
          <div className="profile-container" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
            <img className="eu" src={profileImg} alt="Artur Ibañez" />
          </div>
          <div className="about-me" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <p>Sou Artur Ibañez, um desenvolvedor focado em transformar ideias em realidade digital. Com código limpo e design moderno, construo sites que cativam e funcionam. Disponível para projetos freelancer.</p>
          </div>
          <div className="text-wrapper" data-aos="flip-up">
            <div className="text">
              <h1>ARTUR <span>PORTFOLIO</span></h1>
              <h1>ARTUR <span>PORTFOLIO</span></h1>
            </div>
            <div className="text">
              <h1>ARTUR <span>PORTFOLIO</span></h1>
              <h1>ARTUR <span>PORTFOLIO</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;