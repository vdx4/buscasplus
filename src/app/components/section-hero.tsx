'use client';

import TypingAnimation from '@/components/ui/typing-animation';
import { Button } from '@heroui/button';
import { Rocket } from 'lucide-react';

export function SectionHero() {
  return (
    <section className="relative z-20 w-full max-w-screen-lg mx-auto flex flex-col gap-4">
      <TypingAnimation
        className="text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground/[0.8] to-foreground"
        text="Descubra o Poder do Painel de Consultas Mais Completo e Eficiente do
        Mercado!"
        duration={60}
      />

      <p className="text-center text-muted-foreground text-lg">
        Painel de consultas completo e confiável, com mais de 40 módulos online
        para obter informações detalhadas sobre pessoas e empresas. Oferece
        agilidade e precisão para decisões empresariais e pessoais, com
        relatórios claros e dados essenciais para o sucesso.
      </p>

      <Button
        color="primary"
        className="mt-1 text-foreground max-w-xs mx-auto"
        size="lg"
        radius="sm"
        endContent={<Rocket size={20} />}
        fullWidth
        onClick={() => {
          const targetDiv = document.getElementById('planos');
          if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        Quero ter acesso
      </Button>
    </section>
  );
}
