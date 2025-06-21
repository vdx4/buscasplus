import { gerarLinkWhatsapp } from '@/lib/utils';
import { redirect } from 'next/navigation';

type Props = {
  searchParams: {
    plano?: string;
    duracao?: string;
    preco?: string;
  };
};

export default async function WhatsappIndex({ searchParams }: Props) {
  const { plano, duracao, preco } = searchParams; // Não precisa do await!

  redirect(
    gerarLinkWhatsapp(
      `Olá, tenho interesse no ${plano} de ${duracao} por R$${preco}`,
    ),
  );
}
