import React, { useState, useEffect } from 'react';
import './App.css'; // Asegúrate de mover tus estilos aquí

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Reemplazo de window.addEventListener('scroll')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpieza del evento al desmontar el componente (Buena práctica)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExplorar = () => {
    alert('¡Prepárate para explorar algo increíble!');
  };

  return (
    <div className="App">
      {/* Header Dinámico */}
      <header className={scrolled ? 'header scrolled' : 'header'}>
        <nav>
          <div className="logo">Creativo</div>
          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#features">Características</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Sección Hero */}
        <section id="home" className="hero">
          <h1>Creatividad e Interactividad</h1>
          <p>Explora una nueva forma de experimentar el diseño Web.</p>
          <button className="explorar-btn" onClick={handleExplorar}>
            Explorar
          </button>
        </section>

        {/* Secciones de relleno para probar el scroll */}
        <section id="features" style={{ height: '100vh', padding: '100px' }}>
          <h2>Características</h2>
          <p>Aquí va el contenido de valor.</p>
        </section>

        <section id="contact" style={{ height: '100vh', padding: '100px' }}>
          <h2>Contacto</h2>
          <p>Ponte en contacto con nosotros.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Diseño Creativo. Hecho con React.</p>
      </footer>
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Esto es lo que verá la gente en la pestaña de studiocreativo.com
    document.title = "Studio Creativo | Diseño e Interactividad";
  }, []);

  return (
    <div className="App">
      <header>
        <div className="logo">Studio<span>Creativo</span></div>
        {/* ... resto de tu navegación ... */}
      </header>
      {/* ... resto del contenido ... */}
    </div>
  );
}
<header className={scrolled ? 'header scrolled' : 'header'}>
  <nav className="container">
    <div className="logo">Studio<span>Creativo</span></div>
    <ul className="nav-links">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#features">Proyectos</a></li>
      <li><a href="#contact" className="nav-btn">Contacto</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="home" className="hero-section">
    <div className="hero-content">
      <span className="badge">Diseño Digital 2026</span>
      <h1>Donde la imaginación se vuelve <span>interactiva</span></h1>
      <p>Transformamos ideas complejas en experiencias digitales fluidas y estéticas.</p>
      <div className="cta-group">
        <button className="btn-primary" onClick={handleExplorar}>Empezar proyecto</button>
        <button className="btn-secondary">Ver portafolio</button>
      </div>
    </div>
  </section>
</main>
const [status, setStatus] = useState('idle'); // idle, loading, success

const handleExplorar = () => {
  setStatus('loading');
  // Simulamos una carga de 1 segundo
  setTimeout(() => {
    setStatus('success');
    // Scroll suave hacia la sección de proyectos
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  }, 1000);
};

// En el JSX:
<button 
  className={`btn-primary ${status}`} 
  onClick={handleExplorar}
  disabled={status === 'loading'}
>
  {status === 'loading' ? 'Cargando...' : 'Explorar Proyectos'}
</button>
<img src="proyecto-1.webp" alt="Diseño de marca" loading="lazy" />
  import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  // Control del scroll para la UI
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulación de carga para mejorar la UX
  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className="app-container">
      <header className={scrolled ? 'nav-scrolled' : ''}>
        <nav className="navbar container">
          <div className="logo">Studio<span>Creativo</span></div>
          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#features">Proyectos</a></li>
            <li><a href="#contact" className="btn-contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-info">
            <span className="badge">Beta v1.0</span>
            <h1>Diseño que <span>conecta</span> ideas</h1>
            <p>Probando la interactividad de tu nueva plataforma digital.</p>
            <button 
              className={`cta-button ${loading ? 'loading' : ''}`} 
              onClick={handleStart}
            >
              {loading ? 'Cargando...' : 'Ver si jala'}
            </button>
          </div>
        </section>

        <section id="features" className="content container">
          <h2>Proyectos Recientes</h2>
          <div className="grid">
            <div className="card"><h3>UI Design</h3></div>
            <div className="card"><h3>UX Research</h3></div>
            <div className="card"><h3>Development</h3></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
<section id="contact" className="contact-section container">
  <div className="contact-grid">
    {/* Columna 1: Info */}
    <div className="contact-info">
      <h2>Hablemos de tu <span>idea</span></h2>
      <p>Estamos listos para llevar tu proyecto al siguiente nivel. ¿Te unes?</p>
      
      <div className="contact-details">
        <div className="detail-item">
          <span>📍</span> 
          <p>Culiacán, Sinaloa, México</p>
        </div>
        <div className="detail-item">
          <span>📧</span>
          <p>hola@studiocreativo.com</p>
        </div>
      </div>
    </div>

    {/* Columna 2: Formulario UI */}
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="input-group">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" required />
        </div>
        
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="tu@email.com" required />
        </div>

        <div className="input-group">
          <label>Mensaje</label>
          <textarea rows="4" placeholder="Cuéntanos un poco sobre tu proyecto..."></textarea>
        </div>

        <button type="submit" className="btn-send">
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</section>
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para el fondo del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Cierra el menú en móvil al hacer click
    }
  };

  return (
    <div className="app-dark">
      {/* Navegación */}
      <header className={scrolled ? 'header scrolled' : 'header'}>
        <nav className="container nav-flex">
          <div className="logo">Studio<span>Creativo</span></div>
          
          <div className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection('home')}>Inicio</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Proyectos</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-btn">Contacto</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <span className="badge">Diseño Premium</span>
            <h1>Ideas que cobran <span className="glow">vida</span></h1>
            <p>Creamos experiencias digitales con alto impacto visual y funcional.</p>
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              Ver Portafolio
            </button>
          </div>
        </section>

        {/* Galería de Proyectos (Menú de Fotos) */}
        <section id="projects" className="projects container">
          <div className="section-title">
            <h2>Nuestros <span>Proyectos</span></h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" alt="Branding" />
              <div className="overlay"><h3>Branding</h3><p>Identidad Visual</p></div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800" alt="UI Design" />
              <div className="overlay"><h3>UI/UX</h3><p>Interfaces Web</p></div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800" alt="Apps" />
              <div className="overlay"><h3>Apps</h3><p>Desarrollo Móvil</p></div>
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contact" className="contact container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>¿Listo para <span>empezar?</span></h2>
              <p>Envíanos un mensaje y hagamos algo increíble juntos.</p>
            </div>
            <form className="glass-form" onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado!'); }}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu email" required />
              <textarea placeholder="Cuéntanos tu idea..." rows="4"></textarea>
              <button type="submit" className="btn-send">Enviar Mensaje</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

