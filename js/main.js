document.addEventListener('DOMContentLoaded', function() {
    
    // 1. INICIALIZAR CARRUSEL
    const myCarouselElement = document.querySelector('#servicesCarousel');
    if (myCarouselElement) {
        new bootstrap.Carousel(myCarouselElement, {
            interval: 3000,
            ride: 'carousel',
            wrap: true
        });
    }

    // 2. LÓGICA DE IDIOMAS (Simplificada para evitar errores)
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_somos: "Somos Galapagos",
            nav_experiencias: "Experiencias",
            nav_tours: "Tours",
            nav_sostenibilidad: "Sostenibilidad",
            nav_galeria: "Galeria",
            nav_testimonio: "Testimonio",
            nav_contact: "Contacto"
        },
        en: {
            nav_home: "Home",
            nav_somos: "About us",
            nav_experiencias: "Experiences",
            nav_tours: "Tours",
            nav_sostenibilidad: "Sustainability",
            nav_galeria: "Gallery",
            nav_testimonio: "Testimony",
            nav_contact: "Contact"
        }
    };

    document.querySelectorAll('.lang-menu li').forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            
            // Si es español, lo mejor es recargar para mantener el contexto original
            if (lang === 'es') {
                window.location.reload();
                return;
            }

            // Cambiar UI del botón
            document.querySelector('.lang-current img').src = item.querySelector('img').src;
            document.querySelector('.lang-current span').textContent = lang.toUpperCase();

            // Traducir
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
        });
    });
});

// Detectar sección activa en scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
