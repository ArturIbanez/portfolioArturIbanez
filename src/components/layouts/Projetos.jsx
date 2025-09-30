import nicoLanchesImg from '../../assets/ImagemNicoLanches.png';
import climaNowImg from '../../assets/ClimaNowLogo2.png';
import laWebImg from '../../assets/ProjetoLAweb.png';

const projectsData = [
  {
    link: "https://nico-lanches.vercel.app",
    img: nicoLanchesImg,
    title: "Nico Lanches",
    desc: "Projeto de site e sistema de pedidos online para a lanchonete Nico Lanches. Foco em uma experiência mobile-first, cardápio digital interativo e otimização para o sistema de delivery da casa. Tecnologia principal: React.",
  },
  {
    link: "https://clima-now-omega.vercel.app/",
    img: climaNowImg,
    title: "Clima Now",
    desc: "Uma aplicação web minimalista de consulta do tempo, desenvolvida especificamente para desktops (computadores), onde se priorizou a clareza dos dados climáticos atuais e previsões.",
  },
  {
    link: "https://projeto-la-nine.vercel.app",
    img: laWebImg,
    title: "Projeto LA",
    desc: "Landing page desenvolvida para o lançamento do ebook de dietas do Projeto LA. O projeto foi focado em criar uma jornada de usuário persuasiva, com design limpo e chamadas (CTAs) estratégicas para maximizar as vendas.",
  },
];

function Projects() {
  return (
    <section className="project" id="project">
      <div className="container">
        <div className="content">
          <div className="header">
            <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
              Projetos Recentes
            </button>
            <div className="title">
              <h1 className="row-1" data-aos="fade-left" data-aos-duration="500" data-aos-delay="300"><hr /> Recentes</h1>
              <h1 className="row-2" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">PROJETOS</h1>
            </div>
          </div>
          <div className="project-area" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {projectsData.map((project, index) => (
              <div className="projects" key={index}>
                <img src={project.img} alt={`project-${index + 1}`} />
                <div className="desc">
                  <h1>{project.title}</h1>
                  <p>{project.desc}</p>
                  <a href={project.link} target='_blank'>Visitar aplicação</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;