import React from 'react';
import { PlanosSimples } from './planos-simples';
import { PlanoDiario } from './plano-diario';
import { PlanosPremium } from './planos-premium';
import { PlanosBasicos } from './planos-basicos';

export default function SectionPlanos() {
  return (
    <section className="z-20 w-full max-w-screen-lg mx-auto flex flex-col gap-8">
      <h1 className="text-5xl font-semibold text-center">Nossos planos</h1>
      <div
        id="planos"
        className="flex flex-col  gap-2 items-center justify-center"
      >
        <div className="flex flex-row max-sm:flex-col gap-2">
          <PlanoDiario />
          <PlanosSimples />
        </div>
        <div className="flex flex-row max-sm:flex-col gap-2">
          <PlanosBasicos />
          <PlanosPremium />
        </div>
      </div>
    </section>
  );
}
