/*
  # Configuration du stockage pour les images

  1. Création du bucket
    - Création d'un bucket public 'images' pour stocker les images du site
  
  2. Sécurité
    - Activation des politiques de sécurité pour le bucket
    - Autorisation de lecture publique
    - Autorisation d'écriture pour les utilisateurs authentifiés
*/

-- Création du bucket pour les images
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true);

-- Politique de lecture publique
CREATE POLICY "Images are publicly accessible"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');

-- Politique d'insertion pour les utilisateurs authentifiés
CREATE POLICY "Users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images');

-- Politique de mise à jour pour les utilisateurs authentifiés
CREATE POLICY "Users can update their images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'images');

-- Politique de suppression pour les utilisateurs authentifiés
CREATE POLICY "Users can delete their images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'images');