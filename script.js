let userAnswer = '';

function goToPage(num) {
  // Remover a classe 'active' de todas as páginas
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  
  // Adicionar a classe 'active' à página desejada
  document.getElementById('page' + num).classList.add('active');
  
  // Rolar para o topo da página
  window.scrollTo(0, 0);
}

function selectAnswer(type) {
  userAnswer = type;
  if (type === 'sim') {
    goToPage(3);
  } else {
    // Para respostas diferentes de "sim", vamos para a página 4
    goToPage(4);
  }
}

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'Ganhando o Mundo',
      text: 'Descubra o Programa Ganhando o Mundo!',
      url: window.location.href
    })
    .then(() => console.log('Conteúdo compartilhado com sucesso'))
    .catch((error) => console.log('Erro ao compartilhar:', error));
  } else {
    // Fallback para navegadores que não suportam a API de compartilhamento
    alert('Compartilhe esta página manualmente: ' + window.location.href);
    
    // Alternativa: copiar URL para a área de transferência
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('URL copiada para a área de transferência!'))
        .catch(err => console.log('Erro ao copiar URL:', err));
    }
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  // Garantir que a primeira página esteja ativa
  goToPage(1);
  
  // Adicionar evento de upload de vídeo (exemplo)
  const videoInput = document.querySelector('input[type="file"]');
  if (videoInput) {
    videoInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        console.log('Vídeo selecionado:', file.name);
        // Aqui você pode adicionar lógica para processar o vídeo
      }
    });
  }
});