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

  redirect(
    gerarLinkWhatsapp(
      `Olá, tenho interesse no ${plano} de ${duracao} por R$${preco}`,
    ),
  );
}
