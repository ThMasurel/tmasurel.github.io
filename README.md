# 🌟 Portfolio - Thibaud Masurel

Portfolio personnel d'étudiant Zone01 présentant mes projets en développement Go et web moderne.

## ✨ Fonctionnalités

### 🎨 Interface & Design
- **Section Hero** avec fond parallax et animation
- **Section À propos** avec photo de profil repositionnée (500x400px)
- **Timeline de formation** Zone01 avec design moderne
- **Galerie de projets** avec démos popup interactives
- **Animations fluides** (scroll reveal, hover effects)
- **Design responsive** optimisé mobile/desktop

### 🔍 Projets interactifs
- **Popups de démo** avec galerie d'images navigable
- **Navigation clavier** (flèches, Escape) 
- **Thumbnails cliquables** pour chaque projet
- **Descriptions détaillées** des fonctionnalités

### 📄 CV Téléchargeable
- **CV HTML/CSS** optimisé pour l'impression
- **Génération PDF** automatique
- **Design professionnel** A4
- **Responsive** pour tous les appareils

### 🚀 Performance
- **Variables CSS** pour thèmes
- **Optimisations** d'accessibilité
- **Code propre** et maintenable

## 🛠️ Installation

### Prérequis
- Navigateur web moderne
- Node.js (pour génération PDF)

### Utilisation locale

1. **Cloner le projet**
```bash
git clone https://github.com/ThMasurel/portfolio.git
cd portfolio
```

2. **Voir le portfolio en ligne**
```
https://thmasurel.github.io/tmasurel.github.io/
```

### Génération du CV PDF

1. **Installer les dépendances**
```bash
npm install
```

2. **Générer le PDF**
```bash
npm run generate-cv
```

Le fichier `cv_thibaud_masurel.pdf` sera créé dans le dossier.

## 📂 Structure du projet

```
portfolio/
├── index.html          # Page principale
├── style.css           # Styles principaux avec thèmes
├── script.js           # JavaScript interactif
├── cv.html             # CV HTML pour impression
├── generate_cv_pdf.js  # Script génération PDF
├── package.json        # Configuration Node.js
└── README.md          # Documentation
```

## 🎯 Projets Zone01 présentés

### 🎵 Groupie Tracker
Application web de découverte d'artistes musicaux avec design vintage :
- **5 captures d'écran** dans la démo popup
- Interface principale, recherche, détails artiste, concerts, responsive
- Consommation d'API REST pour artistes et dates de concerts
- **Technologies :** Go, HTML/CSS, JavaScript, API REST

### 🎨 ASCII Art Web  
Convertisseur de texte en art ASCII avec interface moderne :
- **5 captures d'écran** montrant les différents styles
- 3 polices (standard, shadow, thinkertoy) avec préview temps réel
- Sélection de couleurs et téléchargement du résultat
- **Technologies :** Go, HTTP Server, Templates

### 🐜 Lem-in
Algorithme de pathfinding avancé pour optimiser les fourmis :
- **2 captures d'écran** de visualisation du réseau
- Recherche de chemins optimaux dans des graphes complexes  
- Algorithmes de flux et théorie des graphes
- **Technologies :** Go, Algorithms, Pathfinding, Graph Theory

## 🎮 Fonctionnalités cachées

### Code Konami
Tapez la séquence suivante pour un effet spécial :
```
↑ ↑ ↓ ↓ ← → ← → B A
```

### Filtrage interactif
- Cliquez sur les **boutons de filtre** pour trier les projets
- Cliquez sur les **tags de technologie** pour les mettre en évidence
- Animations fluides pour toutes les interactions

## 🌐 Déploiement GitHub Pages

1. **Fork ce repository**
2. **Renommer** en `votre-username.github.io`
3. **Activer GitHub Pages** dans les settings
4. **Personnaliser** les informations

### Variables à modifier

Dans `index.html` :
- Nom et informations personnelles
- Liens vers vos repositories
- Adresse email de contact

Dans `cv.html` :
- Expériences professionnelles
- Formation
- Coordonnées de contact

## 🎨 Personnalisation

### Couleurs (dans `style.css`)
```css
:root {
    --accent-primary: #3498db;    /* Bleu principal */
    --accent-secondary: #2980b9;  /* Bleu secondaire */
    --bg-primary: #f8f9fa;        /* Arrière-plan clair */
    --text-primary: #333;         /* Texte principal */
}
```

### Thème sombre
Automatiquement géré par les variables CSS avec `[data-theme="dark"]`.

## 🔧 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables et animations
- **JavaScript** - Interactivité et animations
- **Puppeteer** - Génération PDF
- **GitHub Pages** - Hébergement

## 📱 Responsive Design

- **Desktop** : Expérience complète avec curseur personnalisé
- **Tablet** : Interface adaptée aux écrans tactiles
- **Mobile** : Navigation optimisée et performance préservée

## 🚀 Performance

- **Chargement optimisé** avec loading screen
- **Animations performantes** avec `requestAnimationFrame`
- **Respect des préférences** d'accessibilité
- **Code minifié** en production

## 📞 Contact

- **Email** : thibaud.masurel@gmail.com
- **GitHub** : [ThMasurel](https://github.com/ThMasurel)
- **Portfolio** : [thmasurel.github.io](https://thmasurel.github.io/tmasurel.github.io/)

## 📄 License

MIT License - Voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ par Thibaud Masurel**