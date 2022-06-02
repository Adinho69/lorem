import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hirinrpuizgklqlpzyzd.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcmlucnB1aXpna2xxbHB6eXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMzNDQyMzIsImV4cCI6MTk2ODkyMDIzMn0.dV5jQ5nM_4JiSFSGLdBQR8lAuejEaFU0DReg8YiO6PM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
