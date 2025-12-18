"use server";

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { LoginInput } from '../api/login';


export async function login(payload: LoginInput) {
  const supabase = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { error } = await supabase.auth.signInWithPassword(payload)

  if (error) {
    redirect('/')
  }

  redirect('/dashboard')
}
