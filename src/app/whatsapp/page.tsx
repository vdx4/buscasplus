import { gerarLinkWhatsapp } from '@/lib/utils';
import { redirect } from 'next/navigation';

type Props = {
  searchParams: {
    plano?: string;
    duracao?: string;
    preco?: string;
  };
};

export default function WhatsappIndex({ searchParams }: Props) {
  const { plano, duracao, preco } = searchParams;

  redirect(
    gerarLinkWhatsapp(
      `Olá, tenho interesse no ${plano} de ${duracao} por R$${preco}`,
    ),
  );
}
