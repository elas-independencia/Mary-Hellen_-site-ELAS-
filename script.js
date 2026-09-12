function showTab(tabId) {
  // Ocultar todas as seções de conteúdo
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.classList.remove('active'));

  // Desativar a seleção dos botões do menu
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Mostrar a seção selecionada
  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Destacar o botão correspondente no menu superior
  const targetBtn = Array.from(buttons).find(btn => 
    btn.getAttribute('onclick').includes(`'${tabId}'`)
  );
  if (targetBtn) {
    targetBtn.classList.add('active');
  }

  // Rolar suavemente para o início da página ao trocar de aba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
