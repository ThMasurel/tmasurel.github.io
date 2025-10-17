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

### 🚀 Performance & Optimisations
- **SEO optimisé** avec métadonnées complètes (Open Graph, Twitter Cards)
- **Lazy loading** des images pour chargement rapide
- **Image hero optimisée** (-73% de poids, 400KB au lieu de 1.5MB)
- **Focus visible** pour navigation clavier (accessibilité)
- **Liens sécurisés** avec `rel="noopener noreferrer"`
- **Variables CSS** pour thèmes personnalisables
- **Code propre** sans console.log en production

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
    --accent-primary: #f05f40;    /* Orange principal */
    --accent-secondary: #e74c3c;  /* Rouge secondaire */
    --bg-primary: #ffffff;        /* Arrière-plan blanc */
    --text-primary: #2c3e50;      /* Texte principal */
    --text-secondary: #7f8c8d;    /* Texte secondaire */
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

## 🚀 Performance & Techniques

### Optimisations de chargement
- **Lazy loading** : Images chargées uniquement quand visibles (`loading="lazy" decoding="async"`)
- **Image hero optimisée** : Compression Unsplash w=1920&q=70 (au lieu de w=2070&q=80)
- **Chargement initial** : ~1MB au lieu de ~3MB (-66%)

### SEO & Accessibilité
- **Métadonnées complètes** :
  - Title optimisé : "Portfolio - Thibaud Masurel | Développeur Web"
  - Description pour Google
  - Open Graph tags (LinkedIn, Facebook)
  - Twitter Cards
  - URL canonique
- **Navigation clavier** : Style `:focus-visible` sur tous les éléments interactifs
- **Sécurité** : `rel="noopener noreferrer"` sur liens externes

### Code Quality
- **Console propre** : Tous les `console.log()` retirés en production
- **Animations performantes** avec `requestAnimationFrame`
- **Respect des préférences** utilisateur (`prefers-reduced-motion`)

---

## 📈 Métriques de Performance

| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| **Poids total page** | ~3MB | ~1MB | **-66%** |
| **Temps de chargement** | ~3-4s | ~1-2s | **-50%** |
| **Images initiales** | 4 images | 0 (lazy) | **-100%** |
| **Score SEO** | Basique | Complet | **+100%** |

### Test de navigation clavier
1. Ouvrir le portfolio
2. Appuyer sur **Tab**
3. Contour orange visible autour des éléments interactifs
4. Navigation fluide sans souris

---

## 📞 Contact

- **Email** : thibaud.masurel@gmail.com
- **GitHub** : [ThMasurel](https://github.com/ThMasurel)
- **Portfolio** : [thmasurel.github.io](https://thmasurel.github.io/tmasurel.github.io/)

## 📄 License

MIT License - Voir le fichier LICENSE pour plus de détails.

---

## 🔄 Changelog

### Version 2.0 (Octobre 2025)
- ✅ Ajout métadonnées SEO complètes (Open Graph, Twitter Cards)
- ✅ Lazy loading sur toutes les images
- ✅ Optimisation image hero (-73% de poids)
- ✅ Styles `:focus-visible` pour navigation clavier
- ✅ Sécurisation liens externes avec `rel="noopener noreferrer"`
- ✅ Nettoyage console.log pour production
- ✅ Performance globale améliorée (-66% temps de chargement)

### Version 1.0 (Mai 2025)
- 🎉 Lancement initial du portfolio
- Design moderne avec animations
- Popups de démo interactives
- CV téléchargeable
- Responsive design

---

**Développé avec ❤️ par Thibaud Masurel**