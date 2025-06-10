import TypingAnimation from '@/components/ui/typing-animation';
import React from 'react';
import { ReputacaoDisplay } from './reputacao-display';

export default function SectionReputacao() {
  return (
    <section className="z-20 w-full mx-auto flex flex-col gap-2">
      <div className="mx-auto flex flex-col gap-2">
        <TypingAnimation
          className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground/[0.8] to-foreground"
          text="Nossa Reputação"
          duration={60}
        />

        <p className="text-center text-gray-300 text-medium max-sm:text-medium">
          Descubra o que nossos clientes estão falando sobre a nossa experiência
          e qualidade.
        </p>
      </div>

      <ReputacaoDisplay />
    </section>
  );
}
