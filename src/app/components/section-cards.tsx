import BoxReveal from '@/components/ui/box-reveal';
import ShineBorder from '@/components/ui/shine-border';
import {
  Boxes,
  Handshake,
  LucideProps,
  ScrollText,
  Shield,
} from 'lucide-react';
import React from 'react';

export const cardList: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<LucideProps>;
}[] = [
  {
    icon: Boxes,
    title: 'Mais de 40 módulos ONLINE',
    subtitle:
      'Acesse rapidamente dados sobre pessoas, CNPJs, produtos, veículos, telefones e muito mais.',
  },
  {
    icon: ScrollText,
    title: 'Relatórios completos e detalhados',
    subtitle: 'Informações essenciais para você tomar decisões com confiança.',
  },
  {
    icon: Handshake,
    title: 'Solução simples e prática',
    subtitle:
      'Interface intuitiva, com ferramentas otimizadas para buscas ágeis e eficientes.',
  },
  {
    icon: Shield,
    title: 'Dados confiáveis e seguros',
    subtitle:
      ' Atualizados com as principais fontes de informações públicas e privadas do Brasil.',
  },
];

export default function SectionCards() {
  return (
    <section className="mx-auto max-w-screen-md justify-between w-full flex flex-row flex-wrap gap-x-2 gap-y-3">
      {cardList.map(({ subtitle, title, icon: Icon }, index) => {
        return (
          <ShineBorder
            key={index}
            color={['#FE620E', '#FFB566']}
            className="w-full max-w-[49%] max-sm:max-w-full relative p-8 bg-gradient-to-b from-black/50 to-transparent border-1 border-white/[0.20] text-white rounded-lg"
          >
            <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-2">
              <Icon className="size-10 text-primary" />
              <h1 className="text-2xl font-bold">{title}</h1>

              <ShineBorder
                className="min-h-0 min-w-0 p-0 my-2 relative flex h-[1px] w-full rounded-lg border"
                color={['#FE620E', '#FFB566']}
              >
                <></>
              </ShineBorder>

              <p className="mt-4 text-muted-foreground">{subtitle}</p>
            </div>
          </ShineBorder>
        );
      })}
    </section>
  );
}
