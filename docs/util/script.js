 document.addEventListener("DOMContentLoaded", function() {
        
        // Seleciona todas as seções que possuem a classe "slide"
        const slides = document.querySelectorAll(".slide");

        // Configuração do observador de intersecção
        const observerOptions = {
            root: null, // Usa a própria viewport como referência de tela
            rootMargin: "0px",
            threshold: 0.15 // Dispara o efeito quando 15% do slide estiver visível na tela
        };

        // Função que será executada quando o slide entrar na tela
        const slideObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Adiciona a classe que faz o elemento subir e surgir suavemente
                    entry.target.classList.add("visible");
                }
            });
        }, observerOptions);

        // Ativa o monitoramento em cada um dos slides mapeados
        slides.forEach(slide => {
            slideObserver.observe(slide);
        });

        // Força a exibição imediata do primeiro slide (capa) ao carregar a página
        if(slides.length > 0) {
            slides[0].classList.add("visible");
        }
    });
    