function organizar() {
  const mainSection = document.querySelector('.main');
  mainSection.classList.toggle('column-layout');
}

function cambiarTitulo() {
  const headerTitle = document.querySelector('.header h1');
  const boton = document.getElementById('cambiarTitulo');

  const nuevoTitulo = "HTML & CSS: Curso práctico avanzado";
  const tituloOriginal = "Libro Demo";

  if (headerTitle.textContent === tituloOriginal) {
    headerTitle.textContent = nuevoTitulo;
    boton.textContent = "Restaurar Título";
  } else {
    headerTitle.textContent = tituloOriginal;
    boton.textContent = "Cambiar Título";
  }
}

function cambiarColor() {
  const titulos = document.querySelectorAll('.card-title');
  const parrafos = document.querySelectorAll('.card-content');
  const boton = document.getElementById('cambiarColorTitulo');

  let cambioActivo = false;

  titulos.forEach(titulo => {
    if (!titulo.classList.contains('cambiado')) {
      cambioActivo = true;
    }
  });

  titulos.forEach(titulo => {
    titulo.classList.toggle('cambiado');
  });

  parrafos.forEach(parrafo => {
    parrafo.classList.toggle('cambiado');
  });

  boton.textContent = cambioActivo
    ? "Restaurar Estilo de Títulos y Texto"
    : "Cambiar Color de Títulos y Fuente";
}

function agregarImagen() {
  const contenedor = document.querySelector('.footer-img-container');
  const boton = document.getElementById('agregarImagenFooter');
  const imagenExistente = document.querySelector('.footer-img');

  if (!imagenExistente) {
    const img = document.createElement('img');
    img.src = "img/libros.jpg";
    img.alt = "Imagen del libro";
    img.classList.add('footer-img');
    contenedor.appendChild(img);
    boton.textContent = "Quitar Imagen del Footer";
  } else {
    imagenExistente.remove();
    boton.textContent = "Agregar Imagen en Footer";
  }
}

