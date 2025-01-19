document.addEventListener("DOMContentLoaded", () => {
  // Función para manejar el despliegue de los cuadros de carreras
  const carreraTitulos = document.querySelectorAll(".carrera-titulo");

  carreraTitulos.forEach((titulo) => {
    titulo.addEventListener("click", () => {
      const contenido = titulo.nextElementSibling;
      if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null; // Cierra el cuadro si ya está abierto
      } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px"; // Abre el cuadro
      }
    });
  });

  // Función para el carrusel de noticias
const carrusel = document.querySelector(".carrusel");
const items = document.querySelectorAll(".carrusel-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const itemsPerPage = 2; // Número de noticias que se muestran a la vez

const updateCarrusel = () => {
  const offset = -currentIndex * (100 / itemsPerPage); // Ajusta el desplazamiento
  carrusel.style.transform = `translateX(${offset}%)`;
};

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - itemsPerPage + items.length) % items.length;
  updateCarrusel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + itemsPerPage) % items.length;
  updateCarrusel();
});

// Inicializar el carrusel
updateCarrusel();
  // Función para redirigir a la página de programas
  const verProgramasButton = document.getElementById("verProgramas");

  if (verProgramasButton) {
    verProgramasButton.addEventListener("click", () => {
      window.location.href = "programas.html"; // Redirige a la página de programas
    });
  }

  // Función para desplegar información adicional en Clubes y Monumentos
  const leerMasButtons = document.querySelectorAll(".btn-leer-mas");

  leerMasButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const infoAdicional = button.nextElementSibling;
      if (infoAdicional.style.maxHeight) {
        infoAdicional.style.maxHeight = null;
      } else {
        infoAdicional.style.maxHeight = infoAdicional.scrollHeight + "px";
      }
    });
  });

  // Resto del código existente (animaciones, formulario, etc.)
  const animatedElements = document.querySelectorAll(".animated");

  const handleScroll = () => {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Llamar al cargar la página

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Gracias por contactarnos. Pronto te responderemos.");
      contactForm.reset();
    });
  }

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});