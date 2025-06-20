import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BuscasPlus',
    short_name: 'BuscasPlus',
    description:
      'Descubra o poder da informação com o BuscasPlus! Oferecemos mais de 40 módulos ONLINE para consultas detalhadas sobre pessoas e empresas. Obtenha relatórios completos e confiáveis, repletos de dados relevantes para apoiar decisões estratégicas com rapidez, precisão e segurança. Seja para análise de risco, validação de informações ou insights valiosos, o BuscasPlus é a ferramenta certa para o seu negócio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
  };
}
