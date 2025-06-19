// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Botão de voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.textContent = '↑';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '20px';
btnTopo.style.right = '20px';
btnTopo.style.padding = '10px';
btnTopo.style.display = 'none';
btnTopo.style.borderRadius = '50%';
btnTopo.style.background = '#333';
btnTopo.style.color = '#fff';
btnTopo.style.border = 'none';
btnTopo.style.cursor = 'pointer';
document.body.appendChild(btnTopo);

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll ', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Formulário fake
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! (só de mentirinha)');
});

  // animação nao sei porque insistir nessa desgraca

document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-text");
  const cursorElement = document.querySelector(".cursor");

  const words = ["Estudante de DS", "Futura Dev", "Auxiliar Admistrativo"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 60;
  const delayBetweenWords = 1500;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    // Corrigir posição do cursor para vir logo após o texto
    cursorElement.style.display = "inline-block";

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 400);
    } else {
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  type();
});