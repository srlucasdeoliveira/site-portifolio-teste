// Menu Hamburguer Responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Rolagem Suave para as Seções
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50,  // Ajuste para o topo, considerando o cabeçalho fixo
      behavior: 'smooth'
    });
  });
});
