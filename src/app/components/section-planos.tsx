import React from 'react';
import { PlanoDiario } from './plano-diario';
import { PlanoBronze } from './plano-bronze';
import { PlanoPrata } from './plano-prata';
import { PlanoOuro } from './plano-ouro';
import { PlanoDividas } from './plano-dividas';

export default function SectionPlanos() {
  return (
    <section className="z-20 w-full max-w-screen-lg mx-auto flex flex-col gap-8">
      <h1 className="text-5xl font-semibold text-center">Nossos planos</h1>
      <div
        id="planos"
        className="flex flex-col gap-2 items-center justify-center"
      >
        <div className="flex flex-row max-sm:flex-col gap-2">
          <PlanoDiario />
          <PlanoBronze />
        </div>
        <div className="flex flex-row max-sm:flex-col gap-2">
          <PlanoPrata />
          <PlanoOuro />
        </div>
        <div className="flex flex-row max-sm:flex-col gap-2">
          <PlanoDividas />
        </div>
      </div>
    </section>
  );
}
