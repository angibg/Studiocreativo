!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studio Creativo | Final Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    
    <style>
        /* --- VARIABLES DE DISEÑO --- */
        :root {
            --bg: #080808;
            --accent: #6c5ce7;
            --card: #121212;
            --white: #ffffff;
            --text-dim: rgba(255, 255, 255, 0.6);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg);
            color: var(--white);
            line-height: 1.6;
            scroll-behavior: smooth;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 25px; }

        /* --- HEADER DINÁMICO --- */
        header {
            position: fixed; width: 100%; top: 0; z-index: 1000;
            padding: 25px 0; transition: 0.4s ease;
        }

        header.scrolled {
            background: rgba(8, 8, 8, 0.9);
            backdrop-filter: blur(15px);
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .logo span { color: var(--accent); }

        .nav-links { display: flex; list-style: none; gap: 30px; align-items: center; }
        .nav-links a { color: var(--white); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.3s; }
        .nav-links a:hover { color: var(--accent); }

        /* --- HERO SECTION --- */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .hero h1 { font-size: clamp(2.5rem, 8vw, 5rem); font-weight: 900; line-height: 1; margin-bottom: 20px; }
        .hero h1 span { color: var(--accent); }
        .hero p { color: var(--text-dim); font-size: 1.2rem; max-width: 600px; margin: 0 auto 40px; }

        .btn-main {
            background: var(--accent); color: white; border: none;
            padding: 18px 40px; border-radius: 12px; font-weight: 700;
            cursor: pointer; font-size: 1rem; transition: 0.3s;
        }

        .btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(108, 92, 231, 0.4); }

        /* --- MENÚ DE FOTOS (GRID) --- */
        .projects { padding: 120px 0; }
        .projects h2 { font-size: 2.5rem; margin-bottom: 60px; text-align: center; }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
        }

        .card {
            position: relative; border-radius: 20px; overflow: hidden;
            height: 400px; background: var(--card); border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card img {
            width: 100%; height: 100%; object-fit: cover;
            filter: brightness(0.8); transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card:hover img { transform: scale(1.1); filter: brightness(1.1); }

        .card-info {
            position: absolute; bottom: 0; left: 0; width: 100%;
            padding: 30px; background: linear-gradient(transparent, rgba(0,0,0,0.9));
        }

        /* --- FORMULARIO FINAL --- */
        .contact { padding: 100px 0 150px; }
        .contact-card {
            background: var(--card); padding: 60px; border-radius: 30px;
            max-width: 800px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.05);
        }

        input, textarea {
            width: 100%; padding: 15px; margin-bottom: 20px;
            background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1);
            color: white; border-radius: 10px; font-family: inherit;
        }

        /* --- MENÚ MÓVIL --- */
        .menu-toggle { display: none; cursor: pointer; flex-direction: column; gap: 6px; }
        .bar { width: 25px; height: 2px; background: white; transition: 0.3s; }

        @media (max-width: 768px) {
            .menu-toggle { display: flex; }
            .nav-links {
                position: fixed; top: -100%; right: 0; width: 100%; height: 100vh;
                background: var(--bg); flex-direction: column; justify-content: center;
                transition: 0.5s;
            }
            .nav-links.active { top: 0; }
        }
    </style>
</head>
<body>

    <header id="header">
        <nav class="container">
            <div class="logo">STUDIO<span>CREATIVO</span></div>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span><span class="bar"></span><span class="bar"></span>
            </div>
            <ul class="nav-links" id="nav-list">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact" style="background:var(--accent); padding:10px 20px; border-radius:8px;">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero container">
            <div>
                <h1>Ideas que se vuelven <span>digitales</span></h1>
                <<section id="home" class="hero container">
    <div>
        <p class="badge-text">Soluciones Digitales 2026</p>
        <h1>Diseño y <span>Páginas Web</span> que venden.</h1>
        <p>Creamos sitios web de alta velocidad, optimizados para Google y con un diseño premium que posiciona tu marca por encima de la competencia.</p>
        
        <div class="hero-btns">
            <button class="btn-main" onclick="document.getElementById('projects').scrollIntoView()">Ver Proyectos</button>
            <button class="btn-outline" onclick="document.getElementById('contact').scrollIntoView()">Cotizar ahora</button>
        </div>
    </div>
</section>

                <button class="btn-main" onclick="document.getElementById('projects').scrollIntoView()">Ver Portafolio</button>
            </div>
        </section>

        

        <section id="projects" class="projects container">
            <h2>Nuestras <span>Creaciones</span></h2>
            <div class="projects-grid">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000&auto=format&fit=crop" alt="Web UI">
                    <div class="card-info"><h3>E-Commerce Luxury</h3><p>UI / UX Design</p></div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" alt="Branding">
                    <div class="card-info"><h3>Identidad Visual</h3><p>Branding</p></div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop" alt="Mobile App">
                    <div class="card-info"><h3>Fintech App</h3><p>Mobile Development</p></div>
                </div>
            </div>
        </section>

        

        <section id="contact" class="contact container">
            <div class="contact-card">
                <h2 style="margin-bottom: 20px; text-align: center;">¿Hablamos de tu <span>visión?</span></h2>
                <form id="final-form">
                    <input type="text" placeholder="Tu Nombre" required>
                    <input type="email" placeholder="Tu Email" required>
                    <textarea rows="5" placeholder="Cuéntanos tu proyecto..."></textarea>
                    <button type="submit" class="btn-main" style="width:100%;">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    </main>

    <script>
        // --- CEREBRO DEL SITIO (JS) ---
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('header');
            const mobileMenu = document.getElementById('mobile-menu');
            const navList = document.getElementById('nav-list');

            // 1. Efecto Scroll Header
            window.addEventListener('scroll', () => {
                header.classList.toggle('scrolled', window.scrollY > 50);
            });

            // 2. Menú Hamburguesa
            mobileMenu.addEventListener('click', () => {
                navList.classList.toggle('active');
            });

            // 3. Validación y Feedback
            document.getElementById('final-form').onsubmit = (e) => {
                e.preventDefault();
                console.log("%c ✅ Studio Creativo: Mensaje enviado con éxito.", "color: #6c5ce7; font-weight: bold;");
                alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
                e.target.reset();
            };

            console.log("🚀 STUDIO CREATIVO ONLINE: V1.1 FINAL");
        });
    </script>
</body>
</html>
<section id="services" class="services container">
    <div class="services-grid">
        <div class="service-card">
            <div class="icon">🌐</div>
            <h3>Desarrollo Web</h3>
            <p>Sitios web de alta velocidad, autogestionables y optimizados para convertir visitantes en clientes.</p>
        </div>

        <div class="service-card">
            <div class="icon">🎨</div>
            <h3>Diseño UI/UX</h3>
            <p>Interfaces modernas e intuitivas diseñadas para ofrecer la mejor experiencia de usuario en cualquier dispositivo.</p>
        </div>

        <div class="service-card">
            <div class="icon">🚀</div>
            <h3>SEO & Velocidad</h3>
            <p>Optimizamos cada línea de código para que tu página aparezca en los primeros resultados de Google.</p>
        </div>
    </div>
</section>
<a href="https://wa.me/TUNUMERO" class="whatsapp-float" target="_blank" rel="noopener noreferrer">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
    </svg>
    <span>Chatea con nosotros</span>
</a>
