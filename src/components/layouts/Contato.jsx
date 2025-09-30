
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4tcwf2n",
        "template_zpmssr6",
        e.currentTarget,
        "4bSRLTuRowvRFCSKT"
      )
      .then(
        (result) => {
          console.log("Enviado com sucesso!", result.text);
          alert("Mensagem enviada!");
        },
        (error) => {
          console.log("Erro:", error.text);
          alert("Erro ao enviar!");
        }
      );
  }
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="content">
          <div className="title" data-aos="fade-down" data-aos-delay="300">
            <h2>ENTRE EM</h2>
            <h1>CONTATO</h1>
          </div>
          <div className="contact-area">
            <div data-aos="fade-right" data-aos-delay="300" className="left-side">
              <h1>VAMOS</h1>
              <h1>COMEÇAR</h1>
              <h1>NOSSA HISTÓRIA</h1>
            </div>
            <div className="right-side">
              <form onSubmit={sendEmail} data-aos="fade-left" data-aos-delay="500">
                <input type="text" name="name" placeholder="SEU NOME" />
                <input type="text" name="email" placeholder="SEU ENDEREÇO DE EMAIL" />
                <textarea name="mensage" placeholder="MENSAGEM"></textarea>
                <button type="submit">ENVIAR MENSAGEM</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;