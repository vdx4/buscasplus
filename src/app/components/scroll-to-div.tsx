'use client';

import { useEffect } from 'react';

export function ScrollToDiv() {
  useEffect(() => {
    // Verifica se há um hash na URL
    const hash = window.location.hash;
    if (hash) {
      // Espera a página carregar para garantir que os elementos estão no DOM
      const element = document.getElementById(hash.slice(1)); // Remove o "#" do hash
      if (element) {
        // Scroll suave até o elemento com o id correspondente ao hash
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest', // Alinha o topo do elemento com o topo da tela
        });
      }
    }
  }, []); // Executa uma vez quando o componente for montado

  return null; // Este componente não precisa renderizar nada, ele apenas faz o scroll
}
