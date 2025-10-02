import profileImg from '../../assets/imagem-eu4.png';

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
            <p>Sou Artur Ibañez, um desenvolvedor focado em transformar ideias em realidade digital. Com código limpo e design moderno, construo sites que cativam e agregam valor. Disponível para projetos freelancer. <br />
            <br /> Com formação em Ciência da Computação pela Atitus Educação, busco atuar na área de desenvolvimento de software, aplicando minhas habilidades em programação, design de interfaces e boas práticas de código. Tenho interesse em oportunidades que me permitam evoluir tecnicamente, contribuir com soluções inovadoras e agregar valor aos projetos da empresa, seja em equipes de desenvolvimento web, aplicações interativas ou sistemas digitais.</p>
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
