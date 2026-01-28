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
                src: 'images/ascii-art.png',
                alt: 'Interface principale ASCII Art Web'
            },
            {
                src: 'images/ascii-art-3.png',
                alt: 'Sélection de couleurs'
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
                src: 'images/lem-in.webm',
                alt: 'Algorithme de pathfinding en action',
                type: 'video'
            }
        ]
    },
    'make-your-game': {
        title: 'Make Your Game',
        description: 'Moteur de jeu vidéo 2D complet développé en JavaScript vanilla. Comprend un système de physique, gestion de sprites, détection de collisions et éditeur de niveaux. Démonstration technique de maîtrise du DOM et de la manipulation Canvas sans framework.',
        images: [
            {
                src: 'images/myp-1.png',
                alt: 'Interface principale Make Your Game'
            },
            {
                src: 'images/myp-2.png',
                alt: 'Gameplay en action'
            },
            {
                src: 'images/myp-3.png',
                alt: 'Editeur de niveaux'
            }
        ]
    },
    'teamup': {
        title: 'TeamUp Hub',
        description: 'Plateforme de gestion collaborative pour associations sportives. Dashboard complet pour coachs et administrateurs, gestion des plannings, suivi des présences et statistiques. Stack moderne : React/Vite, Node.js/Express, SQLite/Prisma et Tailwind CSS.',
        images: [
            {
                src: 'images/teamup-1.png',
                alt: 'Dashboard TeamUp Hub'
            },
            {
                src: 'images/teamup-2.png',
                alt: 'Gestion des plannings'
            },
            {
                src: 'images/teampup-3.png',
                alt: 'Suivi des présences'
            }
        ]
    }
};
