import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Info Buscas',
    short_name: 'Info Buscas',
    description:
      'Descubra o poder da informação com o Info Buscas! Oferecemos mais de 40 módulos ONLINE para consultas detalhadas sobre pessoas e empresas. Obtenha relatórios completos e confiáveis, repletos de dados relevantes para apoiar decisões estratégicas com rapidez, precisão e segurança. Seja para análise de risco, validação de informações ou insights valiosos, o Info Buscas é a ferramenta certa para o seu negócio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: '/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
