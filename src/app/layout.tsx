import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Providers from './components/providers';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true, // Permitir que o usuário faça zoom
};

export const metadata: Metadata = {
  title: {
    template: `%s - BuscasPlus`,
    default: `BuscasPlus`,
  },
  openGraph: {
    title: {
      template: `%s - BuscasPlus`,
      default: `BuscasPlus`,
    },
    description: `Descubra o poder da informação com o ${process.env.NEXT_PUBLIC_APP_NAME}! Oferecemos mais de 40 módulos ONLINE para consultas detalhadas sobre pessoas e empresas. Obtenha relatórios completos e confiáveis, repletos de dados relevantes para apoiar decisões estratégicas com rapidez, precisão e segurança. Seja para análise de risco, validação de informações ou insights valiosos, o ${process.env.NEXT_PUBLIC_APP_NAME} é a ferramenta certa para o seu negócio.`,
    siteName: `BuscasPlus`,
    type: 'website',
    url: process.env.NEXT_PUBLIC_BASE_URL,
  },
  description: `Descubra o poder da informação com o ${process.env.NEXT_PUBLIC_APP_NAME}! Oferecemos mais de 40 módulos ONLINE para consultas detalhadas sobre pessoas e empresas. Obtenha relatórios completos e confiáveis, repletos de dados relevantes para apoiar decisões estratégicas com rapidez, precisão e segurança. Seja para análise de risco, validação de informações ou insights valiosos, o ${process.env.NEXT_PUBLIC_APP_NAME} é a ferramenta certa para o seu negócio.`,
  keywords: [
    'consultas de pessoas e empresas',
    'consultas online de pessoas',
    'relatórios empresariais confiáveis',
    'análise de risco para negócios',
    'validação de informações empresariais',
    'ferramenta de análise de dados',
    'consultas para tomada de decisão',
    'módulos de consultas online',
    'relatórios completos para empresas',
    'dados confiáveis para negócios',
    'consultas de crédito e risco',
    'melhor site para consultas empresariais',
    'consultas detalhadas de empresas',
    'consulta CPF online',
    'consulta CNPJ online',
    'BuscasPlus empresariais',
    'plataforma de análise de dados',
    'consulta de histórico de empresas',
    'relatórios para gestão de risco',
    'consultas rápidas e precisas',
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nocache: true,
      'max-video-preview': 0,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};