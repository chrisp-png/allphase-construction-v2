import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vsjebxljdhomgmqbqgdi.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzamVieGxqZGhvbWdtcWJxZ2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODkxMzcsImV4cCI6MjA4MjU2NTEzN30._gjIILl6LtMKnoERihdaRrQ-OQQ1rKoB_FXnoxRCW2Y';

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
