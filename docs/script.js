// Inicializar Reveal.js
Reveal.initialize({
    hash: true,
    transition: 'slide',
    transitionSpeed: 'default',
    
    // Configurações de navegação
    keyboard: {
        // Habilita navegação com setas do teclado (padrão: true)
        39: 'next',      // Seta para a direita = próximo slide
        37: 'prev',      // Seta para a esquerda = slide anterior
        38: 'up',        // Seta para cima = slide anterior vertical
        40: 'down'       // Seta para baixo = próximo slide vertical
    },
    
    // Configurações adicionais
    width: '100%',
    height: '100%',
    margin: 0.1,
    minScale: 0.2,
    maxScale: 2.0,
    
    // Mostrar barra de progresso
    progress: true,
    
    // Mostrar controles de navegação
    controls: true,
    
    // Ativar modo de apresentação
    center: true
});

// Eventos de navegação (opcional)
Reveal.on('slidechanged', event => {
    console.log('Slide mudou para:', event.indexh, event.indexv);
});
