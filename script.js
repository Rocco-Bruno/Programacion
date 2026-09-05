const boton = document.getElementById('flotante');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1600) {
    boton.classList.remove('oculto');
    boton.classList.add('visible');
  } else {
    boton.classList.remove('visible');
    boton.classList.add('oculto');
  }
});

boton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});