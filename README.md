# 🌟 Portfolio - Thibaud Masurel

Portfolio personnel moderne avec CV téléchargeable et système de filtrage interactif.

## ✨ Fonctionnalités

### 🎨 Interface & Design
- **Mode sombre/clair** avec toggle animé
- **Animations fluides** (scroll reveal, hover effects)
- **Photo de profil** agrandie et optimalement positionnée
- **Loading screen** avec animation
- **Smooth scrolling** entre sections
- **Design responsive** avec sticky positioning

### 🔍 Interactivité
- **Système de filtrage** des projets par technologie
- **Animations staggered** pour les cartes
- **Effets hover** avancés sur tous les éléments
- **Easter egg** (code Konami !)

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
https://thmasurel.github.io
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

## 🎯 Projets présentés

### 🎵 Groupie Tracker
Application web de découverte d'artistes musicaux avec :
- Consommation d'API REST
- Système de recherche avancée
- Design vintage inspiré des vinyles
- **Technologies :** Go, HTML/CSS, JavaScript, API REST

### 🎨 ASCII Art Web
Convertisseur de texte en art ASCII avec :
- Interface web responsive
- 4 styles de polices différents
- Téléchargement des créations
- **Technologies :** Go, HTTP Server, Templates

### 🐜 Lem-in
Algorithme de pathfinding pour fourmis avec :
- Optimisation de déplacement
- Analyse de graphes complexes
- Parsing de fichiers de configuration
- **Technologies :** Go, Algorithms, Graph Theory

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

- **Email** : thibaud.masurel@example.com
- **GitHub** : [ThMasurel](https://github.com/ThMasurel)
- **Portfolio** : [thmasurel.github.io](https://thmasurel.github.io)

## 📄 License

MIT License - Voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ par Thibaud Masurel**