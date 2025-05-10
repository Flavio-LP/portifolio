import './index.css';

function Contact() {
  return (
    <div className="contact-header">
      <h1>Entre em Contato</h1>
      <p>
        Olá, meu nome é <strong>Flávio Leandro Pirola</strong>. Estou sempre aberto a novas oportunidades e colaborações. 
        Se você tem alguma dúvida ou gostaria de discutir um projeto, não hesite em entrar em contato!
      </p>
      <p>Você pode me encontrar nas redes sociais ou enviar um e-mail diretamente.</p>

      <section className="contact-container">
        <h2>Entre em Contato</h2>
        <div className="contact-buttons">
          {/* Botão para E-mail */}
          <a href="mailto:flavio.lpirola@gmail.com" className="contact-button email-button">
            <img src="https://imgs.search.brave.com/jFmFDrCTPMA8z45brWdMcu02rHvnwxWsV5_KaxLCu0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL0dtYWlsX0xv/Z29fMTI4cHgucG5n" alt="Ícone de E-mail" />
            <span>flavio.lpirola@gmail.com</span>
          </a>

          {/* Botão para GitHub */}
          <a href="https://github.com/Flavio-LP" target="_blank" rel="noopener noreferrer" className="contact-button github-button">
            <img src="/portifolio/public/assets/github.png" alt="Ícone do GitHub" />
            <span>Flavio-LP</span>
          </a>
          {/* Botão para LinkedIn */}
          <a href="https://www.linkedin.com/in/flavio-pirola/" target="_blank" rel="noopener noreferrer" className="contact-button github-button">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="Ícone do GitHub" />
            <span>Flavio Pirola</span>
          </a>
        </div>
      </section>
    </div>



  );
}

export default Contact;