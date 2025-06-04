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

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Formulário fake
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! (só de mentirinha)');
});

