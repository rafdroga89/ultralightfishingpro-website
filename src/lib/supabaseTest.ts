import { supabase } from './supabase';

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('published', true)
      .limit(1);

    if (error) {
      console.error('Erreur de connexion à Supabase:', error.message);
      return false;
    }

    console.log('Connexion à Supabase réussie!');
    console.log('Articles trouvés:', data?.length || 0);
    return true;
  } catch (error) {
    console.error('Erreur inattendue:', error);
    return false;
  }
}
