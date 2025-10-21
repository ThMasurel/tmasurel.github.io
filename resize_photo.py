#!/usr/bin/env python3
"""
Script pour créer une version optimisée de la photo de profil
pour les partages sur les réseaux sociaux (Open Graph).
"""

from PIL import Image
import os

# Chemins
input_path = "images/photo-01.JPG"
output_og_path = "images/photo-og.jpg"  # Pour Open Graph (1200x630)
output_square_path = "images/photo-square.jpg"  # Carré (600x600)

def resize_for_opengraph(input_file, output_file, size=(1200, 630)):
    """
    Redimensionne l'image au format Open Graph (1200x630)
    en conservant le ratio et en cropant au centre.
    """
    print(f"📸 Ouverture de {input_file}...")
    img = Image.open(input_file)

    # Convertir en RGB si nécessaire
    if img.mode != 'RGB':
        img = img.convert('RGB')

    # Calculer le ratio
    target_ratio = size[0] / size[1]
    img_ratio = img.width / img.height

    # Crop au centre pour avoir le bon ratio
    if img_ratio > target_ratio:
        # Image plus large, crop les côtés
        new_width = int(img.height * target_ratio)
        left = (img.width - new_width) // 2
        img = img.crop((left, 0, left + new_width, img.height))
    else:
        # Image plus haute, crop le haut et bas
        new_height = int(img.width / target_ratio)
        top = (img.height - new_height) // 2
        img = img.crop((0, top, img.width, top + new_height))

    # Redimensionner
    img = img.resize(size, Image.Resampling.LANCZOS)

    # Sauvegarder avec optimisation
    img.save(output_file, 'JPEG', quality=85, optimize=True)

    # Afficher la taille du fichier
    file_size = os.path.getsize(output_file) / 1024  # en KB
    print(f"✅ Image Open Graph créée : {output_file} ({file_size:.1f} KB)")

def resize_square(input_file, output_file, size=600):
    """
    Crée une version carrée de l'image (600x600)
    """
    print(f"📸 Ouverture de {input_file}...")
    img = Image.open(input_file)

    # Convertir en RGB si nécessaire
    if img.mode != 'RGB':
        img = img.convert('RGB')

    # Crop au centre pour faire un carré
    min_dimension = min(img.width, img.height)
    left = (img.width - min_dimension) // 2
    top = (img.height - min_dimension) // 2
    img = img.crop((left, top, left + min_dimension, top + min_dimension))

    # Redimensionner
    img = img.resize((size, size), Image.Resampling.LANCZOS)

    # Sauvegarder avec optimisation
    img.save(output_file, 'JPEG', quality=85, optimize=True)

    # Afficher la taille du fichier
    file_size = os.path.getsize(output_file) / 1024  # en KB
    print(f"✅ Image carrée créée : {output_file} ({file_size:.1f} KB)")

if __name__ == "__main__":
    print("🖼️  Création des images optimisées pour les réseaux sociaux...\n")

    # Créer les deux versions
    resize_for_opengraph(input_path, output_og_path)
    print()
    resize_square(input_path, output_square_path)

    print("\n✨ Terminé !")
    print("\n📝 Prochaines étapes :")
    print("1. Vérifiez que les images sont correctement cadrées")
    print("2. Mettez à jour index.html pour utiliser la nouvelle image:")
    print(f"   - Ligne 18 et 25: remplacez 'photo-01.JPG' par 'photo-og.jpg'")
    print("3. Commitez et pushez les changements")
