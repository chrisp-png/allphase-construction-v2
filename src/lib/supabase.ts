import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  image_url: string;
  alt_text: string;
  caption: string;
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  title?: string;
  slug?: string;
  city?: string;
  county?: string;
  roof_type?: string;
  project_type?: string;
  description?: string;
  featured?: boolean;
  completed_date?: string;
};
