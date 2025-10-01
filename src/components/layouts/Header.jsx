import { useState, useEffect, useRef } from 'react';
import logoImg from '../../assets/leao-logo2.png'

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header data-aos="fade-down" data-aos-delay="200" className={isHidden ? 'hidden' : ''}>
      <div className="container">
        <div className="content">
          <div className="logo">
            <a className='Artur' href="">Artur Ibañez</a>
            <img className="content-img" src={logoImg} alt="Logo Leão" />
          </div>
          <nav>
            <a href="#about">Sobre mim</a>
            <a href="#project">Projetos</a>
          </nav>
          <div className="extra-nav">
            <a className='botao-header' href="#contact"><span>Entre em contato</span></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;