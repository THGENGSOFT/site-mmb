document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links do menu que começam com #
    const menuLinks = document.querySelectorAll('.nav-links a[href^="#"], .btn-secondary[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o pulo brusco padrão

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calcula a posição da seção descontando a altura do menu fixo
                const headerOffset = 80; // Altura aproximada do menu
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Opcional: Adiciona uma sombra no menu quando rolar para baixo
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

});