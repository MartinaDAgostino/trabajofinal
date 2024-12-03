
let index = 0;

function actualizarImagen(siguiente) {
  console.log('actualizarImagen llamada con dirección:', siguiente);

  const carousel = document.querySelector('.carrusel');
  console.log('carousel:', carousel);

  const items = document.querySelectorAll('.item');
  console.log('items:', items);

  const totalItems = items.length;
  console.log('totalItems:', totalItems);

  index = (index + siguiente + totalItems) % totalItems;
  console.log('nuevo índice:', index);

  carousel.style.transform = `translateX(-${index * 100}%)`;
  console.log('estilo transform aplicado:', carousel.style.transform);
}

const btnAnterior = document.querySelector('.prev');
const btnSiguiente = document.querySelector('.next');

btnAnterior.addEventListener('click', () => {
  console.log('botón anterior clicado');
  actualizarImagen(-1);
});

btnSiguiente.addEventListener('click', () => {
  console.log('botón siguiente clicado');
  actualizarImagen(1);
});
