'use client';

import { useEffect, useRef, useState } from 'react';
import { englobaModulos } from '@/lib/modulos';
import { Button } from '@heroui/button';
import ModalSearchModules from './modal-search-modules';
import Link from 'next/link';

export function ModulosEnglobados() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs para os cards
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref para o contêiner pai
  const [bubblePositions, setBubblePositions] = useState<number[]>([]); // Posições das bolinhas
  const [scrollProgress, setScrollProgress] = useState(0); // Progresso do scroll
  const [visibleCards, setVisibleCards] = useState<number[]>([]); // Índices dos cards visíveis

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Progresso do scroll (entre 0 e 1) com base na rolagem da página
      const scrollY = Math.max(0, window.scrollY); // Pega a rolagem da janela
      const maxScroll = containerHeight - viewportHeight; // A altura máxima do scroll
      const progress = Math.min(scrollY / maxScroll, 1); // Percentual do scroll

      setScrollProgress(progress); // Atualiza o progresso do scroll

      // Identifica quais cards estão visíveis
      const visibleCardIndexes = cardRefs.current
        .map((card, index) => {
          if (card) {
            const rect = card.getBoundingClientRect();
            // Verifica se o card está visível no viewport
            return rect.top >= 0 && rect.bottom <= viewportHeight ? index : -1;
          }
          return -1;
        })
        .filter((index) => index !== -1);

      setVisibleCards(visibleCardIndexes); // Atualiza os cards visíveis

      // Atualiza as posições das bolinhas com base na rolagem
      const positions = cardRefs.current.map((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          return rect.top - containerRect.top + rect.height / 2;
        }
        return 0;
      });
      setBubblePositions(positions);
    };

    // Listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpa o listener ao desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cardRefs.current]);

  return (
    <div className="w-full flex flex-row relative">
      {/* Contêiner pai */}
      <div className="w-1/2 max-md:w-1/12 relative" ref={containerRef}>
        <div className="sticky top-10 gap-3 flex flex-col text-left max-w-xs max-md:hidden mb-4">
          <h1 className="text-5xl font-bold text-foreground">
            Mais de 50 módulos para você consultar
          </h1>
          <span className=" text-muted-foreground text-sm text-left">
            Confira todos os módulos disponíveis em nosso site, com eles você
            poderá simplificar suas análises de crédito, validação cadastral e
            consultas específicas com nossa plataforma completa.
          </span>

          <ModalSearchModules />
        </div>

        {/* Linha vertical de progresso */}
        <div
          className="absolute right-0 top-0 mr-5 w-[5px] rounded-lg transition-all duration-500"
          style={{
            height: `${scrollProgress * 100}%`, // A altura da barra segue o progresso do scroll
            opacity: scrollProgress > 0 ? 1 : 0, // Fade in quando começa o scroll
            background: `linear-gradient(to top, rgba(29, 78, 216, 0.6) ${
              scrollProgress * 100
            }%, rgba(29, 78, 216, 0) 100%)`, // Gradiente suave
            transition: 'height 0.3s ease-out', // Suaviza a transição da altura
          }}
        />

        {/* Bolinhas que aparecem gradualmente conforme os cards ficam visíveis */}
        {bubblePositions.map((position, index) =>
          visibleCards.includes(index) ? (
            <div
              key={index}
              className="absolute right-0 mr-3 transition-all duration-500 ease-in-out"
              style={{
                top: `${position}px`,
                transform: 'translateY(-50%)', // Centraliza verticalmente
                opacity: visibleCards.includes(index) ? 1 : 0, // As bolinhas ficam visíveis quando o card entra na tela
              }}
            >
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
              </span>
            </div>
          ) : null,
        )}
      </div>

      {/* Coluna da direita com os cards */}
      <div className="w-1/2 max-md:w-11/12 flex flex-col gap-5">
        {englobaModulos.map(({ modules, title, link }, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el; // Apenas atribui a referência
            }}
            className="max-w-md p-5 text-left flex flex-col gap-2 border border-border rounded-lg shadow-md bg-gradient-to-b from-black/[0.8] to-transparent"
          >
            <h1 className="text-primary text-xl font-semibold text-md">
              {title}
            </h1>
            <span className="text-muted-foreground text-sm">
              {modules.join(', ')}
            </span>
            <Link href={link}>
              <Button
                color="primary"
                radius="sm"
                className="text-foreground mt-2"
              >
                Veja o modelo de consulta
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
