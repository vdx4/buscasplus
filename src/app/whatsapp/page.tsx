import { gerarLinkWhatsapp } from '@/lib/utils';
import { redirect } from 'next/navigation';

type Props = {
  searchParams: Promise<{
    plano?: string;
    duracao?: string;
    preco?: string;
  }>;
};

export default async function WhatsappIndex({ searchParams }: Props) {
  const { plano, duracao, preco } = await searchParams;

  // Opcional: trate parâmetros ausentes
  if (!plano || !duracao || !preco) {
    redirect('/erro'); // Ou mostre uma mensagem de erro
  }

  redirect(
    gerarLinkWhatsapp(
      `Olá, tenho interesse no ${plano} de ${duracao} por R$${preco}`,
    ),
  );
}
