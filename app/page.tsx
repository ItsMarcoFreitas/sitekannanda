import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-gradient-main">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <span></span>
              </div>
              <span className="logo-text">Marcio Cahino</span>
            </div>
            <nav className="nav">
              <a href="#cursos">Cursos</a>
              <a href="#sobre">Sobre</a>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#contato">Contato</a>
            </nav>
            <a href="#cursos" className="btn-course" rel="noopener noreferrer">
              Matricule-se
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="badge">
            ✨ Venha já fazer parte e se tornar uma profissional na área da
            estética.
          </div>
          <h1 className="hero-title">
            Transforme sua{" "}
            <span className="gradient-text">Paixão em Profissão</span>
          </h1>
          <p className="hero-subtitle">
            Aprenda técnicas avançadas de estética. Cursos práticos, suporte
            completo para sua carreira.
          </p>
          <div className="hero-buttons">
            <a href="#cursos" className="btn-course" rel="noopener noreferrer">
              Ver todos os cursos disponvieis
            </a>
          </div>
          <div className="hero-image">
            <img
              src="/banner1.jpg"
              alt="Sala de aula moderna com equipamentos de estética"
            />
            <div className="hero-overlay" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-number">1.000+</div>
              <div className="stat-label">Alunos Formados</div>
            </div>
            <div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Cursos Disponíveis</div>
            </div>
            <div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfação</div>
            </div>
            <div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossos Cursos em Destaque</h2>
            <p className="section-subtitle">
              Escolha entre nossos cursos mais procurados e inicie sua jornada
              profissional
            </p>
          </div>

          <div className="courses-grid">
            {/* Curso 1 */}
            <div className="course-card">
              <div className="course-image-container">
                <img
                  src="/limpeza.jpg"
                  alt="Curso de Limpeza de Pele"
                  className="course-image"
                />
                <div className="course-badge badge-popular">Mais Popular</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Estética Básica</h3>
                <p className="course-description">
                  Aprenda a Estética Básica de um Jeito Simples e Transforme sua
                  Rotina de Autocuidado.
                </p>
                <div className="course-meta">
                  <div className="course-meta-item">
                    <span>🕒</span>
                    <span>06h</span>
                  </div>
                  <div className="course-meta-item">
                    <span>👥</span>
                    <span>Turma aberta</span>
                  </div>
                  <div className="course-meta-item">
                    <span>📜</span>
                    <span>Certificado</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div>
                    <span className="course-price">R$ 199,90</span>
                    <span className="course-old-price">R$ 250</span>
                  </div>
                  <a
                    href="https://wa.me/5583988263013?text=Ol%C3%A1%2C%20me%20interesso%20no%20curso%20de%20est%C3%A9tica%20básica."
                    className="btn-course"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Matricular
                  </a>
                </div>
              </div>
            </div>

            {/* Curso 2 */}
            <div className="course-card">
              <div className="course-image-container">
                <img
                  src="/injetavel.jpg"
                  alt="Curso de Microblading"
                  className="course-image"
                />
                <div className="course-badge badge-advanced">Mais Popular</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Injetáveis</h3>
                <p className="course-description">
                  Domine a Arte da Estética Injetável: Torne-se um Profissional
                  de Destaque
                </p>
                <div className="course-meta">
                  <div className="course-meta-item">
                    <span>🕒</span>
                    <span>06h</span>
                  </div>
                  <div className="course-meta-item">
                    <span>👥</span>
                    <span>Turma aberta</span>
                  </div>
                  <div className="course-meta-item">
                    <span>📜</span>
                    <span>Certificado</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div>
                    <span className="course-price">R$ 299,90</span>
                    <span className="course-old-price">R$ 350</span>
                  </div>
                  <a
                    href="https://wa.me/5583988263013?text=Ol%C3%A1%2C%20me%20interesso%20no%20curso%20de%20injetaveis."
                    className="btn-course"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Matricular
                  </a>
                </div>
              </div>
            </div>

            {/* Curso 3 */}
            <div className="course-card">
              <div className="course-image-container">
                <img
                  src="/harmonizacao.jpg"
                  alt="Curso de Massagem Relaxante"
                  className="course-image"
                />
                <div className="course-badge badge-beginner">Mais Popular</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Harmonização</h3>
                <p className="course-description">
                  Transforme Relações, Crie Confiança e Domine a Arte do
                  Equilíbrio Estético
                </p>
                <div className="course-meta">
                  <div className="course-meta-item">
                    <span>🕒</span>
                    <span>06h</span>
                  </div>
                  <div className="course-meta-item">
                    <span>👥</span>
                    <span>Turma aberta</span>
                  </div>
                  <div className="course-meta-item">
                    <span>📜</span>
                    <span>Certificado</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div>
                    <span className="course-price">R$ 539,90</span>
                    <span className="course-old-price">R$ 650</span>
                  </div>
                  <a
                    href="https://wa.me/5583988263013?text=Ol%C3%A1%2C%20me%20interesso%20no%20curso%20de%20harmonização."
                    className="btn-course"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Matricular
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="https://drive.google.com/file/d/1cNYdN2tQvHq2J0fFgbZovN29OlhN2IC5/view"
              className="btn-course"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos os cursos
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="badge">Sobre Nós</div>
              <h2 className="section-title">
                Referência em Ensino de Estética
              </h2>
              <p className="section-subtitle about-content">
                Com 15+ anos de experiência no mercado, somos reconhecidos pela
                qualidade do ensino e pela formação de profissionais de
                excelência na área de estética.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">
                    Professor especialista com experiência prática
                  </span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Ambiente profissional</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">
                    Certificação reconhecida pelo mercado
                  </span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Suporte Dedicado</span>
                </div>
              </div>
              <Link href="https://www.instagram.com/marciocahino/" passHref>
                <button className="btn-primary btn-large">
                  Conheça Mais Sobre o Professor
                </button>
              </Link>
            </div>
            <div className="about-image-container">
              <img
                src="/biografia.jpg"
                alt="Sala de aula da escola de estética"
                className="about-image"
              />
              <div className="about-badge">
                <div className="about-badge-content">
                  <div className="about-badge-icon">
                    <span>🏆</span>
                  </div>
                  <div>
                    <div className="about-badge-text">Certificação</div>
                    <div className="about-badge-subtext">
                      Reconhecida nacionalmente
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O que nossos alunos dizem</h2>
            <p className="section-subtitle">
              Histórias reais de transformação e sucesso profissional
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "O curso de microagulhamento mudou minha vida! Hoje tenho minha
                própria clientela e uma renda que nunca imaginei. A professora é
                incrível!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MF</div>
                <div>
                  <div className="testimonial-name">Maria Fernanda</div>
                  <div className="testimonial-role">Aluna</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Ensino de qualidade. Me sinto preparada para atender qualquer
                cliente. Recomendo de olhos fechados!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AS</div>
                <div>
                  <div className="testimonial-name">Ana Silva</div>
                  <div className="testimonial-role">Aluna</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Fiz vários cursos aqui e todos superaram minhas expectativas. O
                suporte pós-curso é excepcional. Hoje tenho meu próprio salão!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JC</div>
                <div>
                  <div className="testimonial-name">Juliana Costa</div>
                  <div className="testimonial-role">Aluna</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Pronto para Transformar sua Carreira?</h2>
          <p className="cta-subtitle">
            Não perca mais tempo! Comece hoje mesmo sua jornada rumo ao sucesso
            profissional na área de estética.
          </p>
          <div className="cta-buttons">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5583988263013"
              className="btn-white"
            >
              <span>📞</span>
              Entre em contato
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <div className="logo">
                  <div className="logo-icon"></div>
                  <span className="logo-text">Marcio Cahino</span>
                </div>
              </div>
              <p className="footer-description">
                Transformando vidas através da educação em estética.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/marciocahino/"
                  className="social-icon"
                >
                  @
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Cursos</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Limpeza de pele</a>
                </li>
                <li>
                  <a href="#">Microagulhamento</a>
                </li>
                <li>
                  <a href="#">Clareamento íntimo</a>
                </li>
                <li>
                  <a href="#">Detox corporal + Redutora</a>
                </li>
                <li>
                  <a href="#">Tóxina botulínica</a>
                </li>
                <li>
                  <a href="#">Fios de PDO</a>
                </li>
                <li>
                  <a href="#">Preenchimento full face</a>
                </li>
                <li>
                  <a href="#">Bioestimulador de colágeno</a>
                </li>
                <li>
                  <a href="#">Todos os Cursos</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Empresa</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Sobre Nós</a>
                </li>

                <li>
                  <a href="#">Estrutura</a>
                </li>
                <li>
                  <a href="#">Certificações</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contato</h3>
              <div className="footer-contact">
                <div className="contact-item">
                  <span>📞</span>
                  <span>(83) 98826-3013</span>
                </div>
                <div className="contact-item">
                  <span>✉️</span>
                  <span>Marciocahino@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span>📍</span>
                  <span>Bancarios - João Pessoa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Marcio Cahino. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
