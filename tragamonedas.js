// Inicialización de partículas
document.addEventListener('DOMContentLoaded', function() {
  // Configuración de partículas
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#ff00ff", "#00ffff", "#39ff14", "#bf00ff"]
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // Año actual en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Navegación móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      this.setAttribute('aria-expanded', this.classList.contains('active'));
    });
  }

  // Cerrar menú al hacer clic en un enlace
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Navbar con scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Animación de revelado al hacer scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  // Verificar al cargar y al hacer scroll
  window.addEventListener('load', checkReveal);
  window.addEventListener('scroll', checkReveal);
  
  // Inicializar la verificación al cargar
  checkReveal();

  // Efecto de escritura para el título (opcional)
  const neonTitle = document.querySelector('.neon-title');
  if (neonTitle) {
    const originalText = neonTitle.textContent;
    neonTitle.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(function() {
      if (i < originalText.length) {
        neonTitle.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 100);
  }

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Efectos de hover mejorados para las cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Efecto de parallax en el hero
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroImage.style.transform = `perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(${rate}px)`;
    });
  }

  // Preload de imágenes importantes
  const imagesToPreload = [
    'imagenes/VillaSlot.webp',
    'sala-principal.jpg',
    'maquinas-detalle.jpg',
    'zona-premium.jpg',
    'jackpot.jpg',
    'tecnologia.jpg',
    'ambiente.jpg'
  ];
  
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Efecto de sonido opcional para interacciones (descomentar si se desea)
  /*
  const hoverSound = new Audio('hover-sound.mp3');
  hoverSound.volume = 0.2;
  
  document.querySelectorAll('.btn, .card, .menu a').forEach(element => {
    element.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
  });
  */

  console.log('Villa Slot - Sala de juegos premium cargada correctamente');
});