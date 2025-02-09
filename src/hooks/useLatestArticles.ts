import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Article } from '../types/article';

export function useLatestArticles(limit: number = 3) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false }) // Tri par date de création décroissante
          .limit(limit);

        if (error) throw error;
        
        // Si aucun article n'est trouvé, utiliser des articles par défaut
        if (!data || data.length === 0) {
          const defaultArticles: Article[] = [
            {
              id: '1',
              title: 'Guide du Light Rock Fishing (LRF)',
              description: 'Découvrez l\'art de la pêche ultra-légère en milieu rocheux.',
              image_url: 'https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lrf%201.jpg',
              link: '/guides/lrf',
              created_at: new Date(2025, 1, 15).toISOString(), // Date plus récente
              published: true
            },
            {
              id: '2',
              title: 'Guide Complet de l\'Ajing',
              description: 'Découvrez cette technique japonaise qui révolutionne la pêche en Europe.',
              image_url: 'https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//aji%20banniere.webp',
              link: '/guides/ajing',
              created_at: new Date(2025, 1, 10).toISOString(), // Date moins récente
              published: true
            },
            {
              id: '3',
              title: 'Test de la Tenryu Lunakia',
              description: 'Notre avis détaillé sur cette canne haut de gamme.',
              image_url: 'https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lunakia%20icone.webp',
              link: '/materiel/cannes/tenryu-lunakia',
              created_at: new Date(2025, 1, 5).toISOString(), // Date la moins récente
              published: true
            }
          ];

          // Tri des articles par défaut par date décroissante
          const sortedArticles = defaultArticles.sort((a, b) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );

          setArticles(sortedArticles);
        } else {
          setArticles(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    // Configuration de l'abonnement en temps réel
    const subscription = supabase
      .channel('articles_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'articles'
        },
        () => {
          // Rafraîchir les articles quand il y a des changements
          fetchLatestArticles();
        }
      )
      .subscribe();

    // Chargement initial des articles
    fetchLatestArticles();

    // Nettoyage de l'abonnement
    return () => {
      subscription.unsubscribe();
    };
  }, [limit]);

  return { articles, loading, error };
}