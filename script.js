document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const btnExplorar = document.getElementById('btn-explorar');
    const contactForm = document.getElementById('contact-form');

    // 1. Cambio de color del header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Scroll suave hacia contacto
    if (btnExplorar) {
        btnExplorar.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // 3. Validación de consola para el formulario
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("✅ Formulario enviado correctamente.");
            alert("¡Gracias por contactar a Studio Creativo!");
            contactForm.reset();
        });
    }
    
    console.log("🚀 Studio Creativo está ONLINE y funcionando.");
});
const images = document.querySelectorAll('.project-card img');
console.log(`📸 Galería: Se encontraron ${images.length} imágenes.`);

// Verificar si alguna imagen falló al cargar
images.forEach(img => {
    if (!img.complete || img.naturalWidth === 0) {
        console.error(`❌ Error al cargar imagen: ${img.src}`);
    } else {
        console.log(`✅ Imagen cargada: ${img.alt}`);
    }
});
document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('load', () => console.log(`✅ Imagen cargada: ${img.alt}`));
    img.addEventListener('error', () => console.error(`❌ Error al cargar: ${img.src}`));
});
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SELECCIÓN DE ELEMENTOS ---
    const header = document.getElementById('header');
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const btnExplorar = document.getElementById('btn-explorar');
    const contactForm = document.getElementById('contact-form');

    // --- 2. LOGICA DEL MENÚ MÓVIL (HAMBURGUESA) ---
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navList.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (Mejora UX)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navList.classList.remove('active');
            });
        });
    }

    // --- 3. EFECTO SCROLL EN HEADER ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 4. SCROLL SUAVE AL BOTÓN HERO ---
    if (btnExplorar) {
        btnExplorar.addEventListener('click', () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- 5. VALIDACIÓN DEL FORMULARIO ---
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí simulamos el envío
            console.log("%c Envio de formulario detectado", "color: #6c5ce7; font-weight: bold;");
            alert("¡Gracias! Tu mensaje ha sido enviado a Studio Creativo.");
            contactForm.reset();
        });
    }

    console.log("%c 🚀 Studio Creativo: Sistema cargado sin errores.", "color: #2ecc71; font-weight: bold;");
});
// Agrega esto a tu script si no lo tienes
const btnCotizar = document.querySelector('.btn-outline');
if(btnCotizar) {
    btnCotizar.onclick = () => document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}
