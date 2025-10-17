// Portfolio JavaScript - Fonctionnalités d'interface et design

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== LOADING SCREEN =====
    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;
    
    function hideLoadingScreen() {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
            body.classList.remove('loading');

            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }
    
    // Hide loading screen after 2 seconds
    setTimeout(hideLoadingScreen, 2000);
    
    // Allow clicking to skip loading
    if (loadingScreen) {
        loadingScreen.addEventListener('click', hideLoadingScreen);
    }
    
    // Loading screen will be handled by timeout above

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Apply visual theme on load
        if (savedTheme === 'dark') {
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#f8f9fa';
            document.body.style.color = '#333';
        }
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Apply theme change
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Force visual update
            document.body.style.transition = 'all 0.3s ease';
            if (newTheme === 'dark') {
                document.body.style.backgroundColor = '#1a1a1a';
                document.body.style.color = '#fff';
            } else {
                document.body.style.backgroundColor = '#f8f9fa';
                document.body.style.color = '#333';
            }
            
            // Add visual feedback to button
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // ===== CUSTOM CURSOR - DISABLED =====
    // Custom cursor disabled for better usability

    // ===== CV DOWNLOAD ENHANCEMENT =====
    const cvButton = document.querySelector('.cv-download');
    if (cvButton) {
        cvButton.addEventListener('click', (e) => {
            // Create download animation
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            cvButton.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Show download feedback
            const originalText = cvButton.textContent;
            cvButton.textContent = '📥 Téléchargement...';
            cvButton.style.background = '#27ae60';
            
            setTimeout(() => {
                cvButton.textContent = originalText;
                cvButton.style.background = '';
            }, 1500);
        });
    }

    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== SMOOTH SCROLLING =====
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== SCROLL REVEAL ANIMATION =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Add reveal classes and observe elements
    const revealElements = document.querySelectorAll('section h2, .about-content, .project-card, .contact-content');
    
    revealElements.forEach((element, index) => {
        // Add staggered reveal classes
        if (element.classList.contains('project-card')) {
            element.classList.add('reveal');
            element.style.transitionDelay = `${(index % 3) * 0.1}s`;
        } else if (element.classList.contains('about-content')) {
            const children = element.children;
            Array.from(children).forEach((child, childIndex) => {
                child.classList.add(childIndex % 2 === 0 ? 'reveal-left' : 'reveal-right');
                child.style.transitionDelay = `${childIndex * 0.2}s`;
                observer.observe(child);
            });
        } else {
            element.classList.add('reveal');
        }
        
        observer.observe(element);
    });

    // ===== PROJECT CARDS ENHANCED HOVER =====
    // Note: projectCards will be declared later in filter system

    // ===== SKILL TAGS ANIMATION =====
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        
        tag.addEventListener('click', () => {
            tag.style.transform = 'scale(0.95)';
            setTimeout(() => {
                tag.style.transform = '';
            }, 150);
        });
    });

    // ===== PARALLAX EFFECT FOR HERO =====
    const hero = document.getElementById('hero');
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }


    // ===== PROJECT FILTER SYSTEM =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Setup enhanced hover for project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.transformOrigin = `${x}px ${y}px`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transformOrigin = 'center';
        });
    });
    
    filterButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button - force removal of active class
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = '';
                btn.style.color = '';
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.style.background = 'var(--accent-primary)';
            this.style.color = 'white';

            // Filter projects with staggered animation
            projectCards.forEach((card, cardIndex) => {
                const categories = card.getAttribute('data-category').split(' ');
                
                setTimeout(() => {
                    if (filter === 'all' || categories.includes(filter)) {
                        card.classList.remove('filter-hidden');
                        card.classList.add('filter-show');
                    } else {
                        card.classList.remove('filter-show');
                        card.classList.add('filter-hidden');
                    }
                }, cardIndex * 100);
            });
            
            // Button click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ===== TECH TAGS FILTER EFFECT =====
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const tech = tag.textContent.toLowerCase();
            
            projectCards.forEach(card => {
                const cardTechs = Array.from(card.querySelectorAll('.tech-tag'))
                    .map(t => t.textContent.toLowerCase());
                
                if (cardTechs.includes(tech)) {
                    card.style.transform = 'scale(1.05)';
                    card.style.boxShadow = '0 15px 40px rgba(52, 152, 219, 0.3)';
                    
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 2000);
                }
            });
            
            // Visual feedback for clicked tag
            tag.style.backgroundColor = 'var(--accent-primary)';
            tag.style.color = 'white';
            
            setTimeout(() => {
                tag.style.backgroundColor = '';
                tag.style.color = '';
            }, 2000);
        });
    });

    // ===== CONTACT LINKS ENHANCED ANIMATION =====
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            contactLinks.forEach((otherLink, otherIndex) => {
                if (otherIndex !== index) {
                    otherLink.style.transform = 'scale(0.95)';
                    otherLink.style.opacity = '0.7';
                }
            });
        });
        
        link.addEventListener('mouseleave', () => {
            contactLinks.forEach(otherLink => {
                otherLink.style.transform = '';
                otherLink.style.opacity = '';
            });
        });
    });

    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Debounce scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Scroll-dependent animations here
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable heavy animations
        document.documentElement.style.setProperty('--transition', 'none');
    }

    // ===== EASTER EGG =====
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg: Party mode!
                document.body.style.animation = 'rainbow 1s infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 5000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

});

// ===== CSS ANIMATION KEYFRAMES (added via JS) =====
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===== DEMO POPUPS =====
const demoPopup = document.getElementById('demo-popup');
const demoOverlay = document.getElementById('demo-overlay');
const demoClose = document.getElementById('demo-close');
const demoTitle = document.getElementById('demo-title');
const demoMainImg = document.getElementById('demo-main-img');
const demoThumbnails = document.querySelector('.demo-thumbnails');
const demoCounter = document.getElementById('demo-counter');
const demoDesc = document.getElementById('demo-desc');
const demoPrevBtn = document.getElementById('demo-prev');
const demoNextBtn = document.getElementById('demo-next');

// Données des projets avec leurs images
const projectsData = {
    'groupie-tracker': {
        title: 'Groupie Tracker',
        description: 'Application web de découverte d\'artistes musicaux avec système de recherche avancée et design vintage inspiré des vinyles. Interface responsive avec consommation d\'API REST pour afficher les informations des artistes, leurs albums et dates de concerts.',
        images: [
            {
                src: 'images/groupie-tracker-1.png',
                alt: 'Interface principale Groupie Tracker'
            },
            {
                src: 'images/groupie-tracker-2.png',
                alt: 'Page de recherche d\'artistes'
            },
            {
                src: 'images/groupie-tracker-3.png',
                alt: 'Détails d\'un artiste'
            },
            {
                src: 'images/groupie-tracker-4.png',
                alt: 'Liste des concerts et dates'
            },
            {
                src: 'images/groupie-tracker-5.png',
                alt: 'Interface responsive mobile'
            }
        ]
    },
    'ascii-art': {
        title: 'ASCII Art Web',
        description: 'Convertisseur de texte en art ASCII avec interface web moderne. Propose 3 styles de polices différents (standard, shadow, thinkertoy) avec preview en temps réel, sélection de couleurs et téléchargement du résultat. Backend développé en Go avec serveur HTTP.',
        images: [
            {
                src: 'images/ascii-art-1.png',
                alt: 'Interface principale ASCII Art Web'
            },
            {
                src: 'images/ascii-art-2.png',
                alt: 'Génération avec différents styles'
            },
            {
                src: 'images/ascii-art-3.png',
                alt: 'Sélection de couleurs'
            },
            {
                src: 'images/ascii-art-4.png',
                alt: 'Résultat avec style shadow'
            },
            {
                src: 'images/ascii-art-5.png',
                alt: 'Export et téléchargement'
            }
        ]
    },
    'lem-in': {
        title: 'Lem-in',
        description: 'Algorithme de pathfinding avancé pour optimiser le déplacement de fourmis dans un réseau complexe de salles connectées. Implémentation d\'algorithmes de recherche de chemin optimal avec visualisation du réseau et des flux. Projet focalisé sur les performances et la théorie des graphes.',
        images: [
            {
                src: 'images/lem-in.png',
                alt: 'Visualisation du réseau Lem-in'
            },
            {
                src: 'images/lem-in-1.png',
                alt: 'Algorithme de pathfinding en action'
            }
        ]
    }
};

let currentProject = null;
let currentImageIndex = 0;

// Gestion des clics sur les liens Demo
document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = link.getAttribute('data-project');
        openDemoPopup(projectId);
    });
});

// Fonction pour ouvrir le popup
function openDemoPopup(projectId) {
    currentProject = projectsData[projectId];
    currentImageIndex = 0;

    if (!currentProject) return;

    // Mettre à jour le contenu
    demoTitle.textContent = currentProject.title;
    demoDesc.textContent = currentProject.description;

    // Créer les thumbnails
    demoThumbnails.innerHTML = '';
    currentProject.images.forEach((image, index) => {
        const thumb = document.createElement('div');
        thumb.className = `demo-thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        thumb.addEventListener('click', () => showImage(index));
        demoThumbnails.appendChild(thumb);
    });

    // Afficher la première image
    showImage(0);

    // Ouvrir le popup
    demoOverlay.classList.add('active');
    demoPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Fonction pour afficher une image
function showImage(index) {
    if (!currentProject || index < 0 || index >= currentProject.images.length) return;
    
    currentImageIndex = index;
    const image = currentProject.images[index];
    
    // Mettre à jour l'image principale
    demoMainImg.src = image.src;
    demoMainImg.alt = image.alt;
    
    // Mettre à jour les thumbnails
    document.querySelectorAll('.demo-thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Mettre à jour le compteur
    demoCounter.textContent = `${index + 1} / ${currentProject.images.length}`;
    
    // Mettre à jour les boutons navigation
    demoPrevBtn.disabled = index === 0;
    demoNextBtn.disabled = index === currentProject.images.length - 1;
}

// Fonction pour fermer le popup
function closeDemoPopup() {
    demoOverlay.classList.remove('active');
    demoPopup.classList.remove('active');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    currentProject = null;
    currentImageIndex = 0;
}

// Event listeners pour fermer le popup
demoClose.addEventListener('click', closeDemoPopup);
demoOverlay.addEventListener('click', closeDemoPopup);

// Navigation avec les boutons
demoPrevBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        showImage(currentImageIndex - 1);
    }
});

demoNextBtn.addEventListener('click', () => {
    if (currentImageIndex < currentProject.images.length - 1) {
        showImage(currentImageIndex + 1);
    }
});

// Navigation avec le clavier
document.addEventListener('keydown', (e) => {
    if (!demoPopup.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeDemoPopup();
            break;
        case 'ArrowLeft':
            if (currentImageIndex > 0) {
                showImage(currentImageIndex - 1);
            }
            break;
        case 'ArrowRight':
            if (currentImageIndex < currentProject.images.length - 1) {
                showImage(currentImageIndex + 1);
            }
            break;
    }
});

