import React from 'react';
import { ModulosEnglobados } from './modulos-englobados';
import ModalSearchModules from './modal-search-modules';

export default function SectionModulos() {
  return (
    <section className="z-20 w-full max-w-screen-md mx-auto flex flex-col gap-4">
      <div className="md:hidden flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground/[0.8] to-foreground flex flex-row items-center gap-2">
          Mais de 50 módulos para você consultar
        </h1>
        <p className="text-gray-300 text-lg text-center">
          Confira todos os módulos disponíveis em nosso site, com eles você
          poderá simplicar suas análises de crédito, validação cadastral e
          consultas especificas com nossa plataforma completa.
        </p>
        <ModalSearchModules />
      </div>

      <ModulosEnglobados />
    </section>
  );
}
