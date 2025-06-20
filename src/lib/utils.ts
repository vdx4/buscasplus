import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function gerarLinkWhatsapp(message: string) {
  const url = new URL('https://wa.me/5511958586780');
  url.searchParams.set('text', message); // Usando searchParams para adicionar o parâmetro

  return url.toString(); // Retorna a URL completa
}
