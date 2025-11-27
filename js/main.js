// ============================================
// CONFIGURACIÓN Y VARIABLES GLOBALES
// ============================================

// Elementos del DOM
const elements = {
    themeToggle: document.getElementById('themeToggle'),
    body: document.body,
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mainNav: document.getElementById('mainNav'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    sortSelect: document.getElementById('sortSelect'),
    resourcesGrid: document.getElementById('resourcesGrid'),
    resourceCards: document.querySelectorAll('.resource-card'),
    resourcesCount: document.querySelector('.resources-count')
};

// ============================================
// TEMA CLARO/OSCURO
// ============================================

function initTheme() {
    const themeIcon = elements.themeToggle.querySelector('i');

    // Cargar tema guardado
    if (localStorage.getItem('theme') === 'dark') {
        elements.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Toggle de tema
    elements.themeToggle.addEventListener('click', () => {
        elements.body.classList.toggle('dark-mode');

        if (elements.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ============================================
// MENÚ MÓVIL
// ============================================

function initMobileMenu() {
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mainNav.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    elements.mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                elements.mainNav.classList.remove('active');
            }
        });
    });
}

// ============================================
// BÚSQUEDA Y FILTRADO
// ============================================

function filterResources() {
    const searchTerm = elements.searchInput.value.toLowerCase();

    let visibleCount = 0;

    elements.resourceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.resource-description').textContent.toLowerCase();

        // Verificar si coincide con la búsqueda
        const matchesSearch = !searchTerm ||
            title.includes(searchTerm) ||
            description.includes(searchTerm);

        // Mostrar u ocultar tarjeta
        if (matchesSearch) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Actualizar contador
    updateResourceCount(visibleCount);
}

function updateResourceCount(count) {
    elements.resourcesCount.textContent =
        `Mostrando 1 - ${count} de ${count} enlaces`;
}

function initSearch() {
    // Búsqueda al hacer clic en el botón
    elements.searchBtn.addEventListener('click', filterResources);

    // Búsqueda en tiempo real
    elements.searchInput.addEventListener('input', filterResources);
}

// ============================================
// ORDENAMIENTO
// ============================================

function initSort() {
    elements.sortSelect.addEventListener('change', () => {
        const cards = Array.from(elements.resourceCards);
        const sortValue = elements.sortSelect.value;

        cards.sort((a, b) => {
            const titleA = a.querySelector('h3').textContent;
            const titleB = b.querySelector('h3').textContent;

            switch (sortValue) {
                case 'nombre':
                    return titleA.localeCompare(titleB);
                case 'recientes':
                    // Mantener orden original (más recientes primero)
                    return 0;
                case 'relevantes':
                default:
                    // Mantener orden original
                    return 0;
            }
        });

        // Reorganizar las tarjetas en el DOM
        cards.forEach(card => elements.resourcesGrid.appendChild(card));
    });
}

// ============================================
// SCROLL SUAVE
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Evitar error si el href es solo "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// ANIMACIONES DE ENTRADA
// ============================================

function initAnimations() {
    // Observador de intersección para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todas las tarjetas
    elements.resourceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// ============================================
// UTILIDADES
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// INICIALIZACIÓN
// ============================================

function init() {
    console.log('🚀 Inicializando Biblioteca UML...');

    try {
        initTheme();
        initMobileMenu();
        initSearch();
        initSort();
        initSmoothScroll();
        initAnimations();

        console.log('✅ Biblioteca UML inicializada correctamente');
    } catch (error) {
        console.error('❌ Error al inicializar:', error);
    }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// EXPORTAR FUNCIONES (si se usa módulos)
// ============================================

// Descomentar si se usa ES6 modules
// export { filterResources, initTheme, initSearch };
