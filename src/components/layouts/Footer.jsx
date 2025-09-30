import { BiLogoLinkedinSquare, BiLogoInstagram, BiLogoGithub } from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <h1>ARTUR IBAÑEZ PORTFÓLIO</h1>
          <div className="social">
            {/* 2. Use os ícones como componentes normais */}
            {/* Props como 'color' e 'size' funcionam da mesma forma! */}
            <a href="https://www.linkedin.com/in/artur-machado-ibañez-876332359" target="_blank" rel="noopener noreferrer" className="logo">
              <BiLogoLinkedinSquare color='white' size='24px' />
            </a>
            <a href="https://www.instagram.com/arturibanez.m" target="_blank" rel="noopener noreferrer" className="logo">
              <BiLogoInstagram color='white' size='24px' />
            </a>
            <a href="https://github.com/ArturIbanez" target="_blank" rel="noopener noreferrer" className="logo">
              <BiLogoGithub color='white' size='24px' />
            </a>
          </div>
          <p>&copy; ARTUR IBAÑEZ <span>{new Date().getFullYear()}</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;