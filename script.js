const menuIcon = document.getElementById("menu-icon");

// Cria dinamicamente o menu lateral
const menuLateral = document.createElement("ul");
menuLateral.classList.add("menu-lateral");
menuLateral.innerHTML = `
  <li><a href="#home">Home</a></li>
  <li><a href="#sobre">Sobre</a></li>
  <li><a href="#projetos">Projetos</a></li>
  <li><a href="#faleComigo">Fale Comigo</a></li>
`;
document.body.appendChild(menuLateral);

// Abre/fecha menu lateral
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  menuIcon.classList.toggle("open");
  menuLateral.classList.toggle("show");
});

// Fecha ao clicar fora do menu
document.addEventListener("click", (e) => {
  if (!menuLateral.contains(e.target) && !menuIcon.contains(e.target)) {
    menuLateral.classList.remove("show");
    menuIcon.classList.remove("open");
  }
});

// Fecha ao clicar em um link do menu lateral
menuLateral.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuLateral.classList.remove("show");
    menuIcon.classList.remove("open");
  });
});

const clickableElements = document.querySelectorAll('.sobre-texto button, .card a, .social a');

clickableElements.forEach(el => {
  el.addEventListener('mousedown', () => {
    // Adiciona a classe/estilo ativo
    el.style.backgroundColor = '#fff';
    el.style.color = '#f9004d';
    el.style.transform = 'scale(1.12)';
  });

  el.addEventListener('mouseup', () => {
    // Remove a classe/estilo ativo
    el.style.transform = '';
    el.style.backgroundColor = '';
    el.style.color = '';
    el.blur(); // remove o foco
  });

  el.addEventListener('mouseleave', () => {
    // Caso o mouse saia do botão sem soltar
    el.style.transform = '';
    el.style.backgroundColor = '';
    el.style.color = '';
    el.blur();
  });

  // Mantém animação do mobile se precisar
  el.addEventListener('click', () => {
    if (window.innerWidth <= 885) {
      const originalBg = window.getComputedStyle(el).backgroundColor;
      const originalColor = window.getComputedStyle(el).color;

      el.style.backgroundColor = '#fff';
      el.style.color = '#f9004d';
      el.style.transform = 'scale(1.12)';

      setTimeout(() => el.style.transform = 'scale(0.97)', 80);
      setTimeout(() => {
        el.style.transform = '';
        el.style.backgroundColor = originalBg;
        el.style.color = originalColor;
      }, 200);
    }
  });
});