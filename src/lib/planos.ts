export const planos = {
  diario: {
    id: 12,
    readable_id: 'diario',
    title: 'Plano Diário',
    descricao: 'Diaria',
    price: 49,
    consultas: 30,
  },

  simples: {
    id: 'simples',
    title: 'Plano Simples',
    consultas: 50,
    duracao: [
      {
        id: 13,
        readable_id: 'simples',
        title: '30 dias',
        descricao: 'Simples | Mensal',
        price: 159,
      },
      {
        id: null,
        readable_id: 'simples_anual',
        title: '365 dias',
        descricao: 'Simples | Anual',
        price: 1679,
      },
    ],
  },

  basicos: {
    id: 'basico',
    title: 'Plano Básico',
    consultas: 100,
    duracao: [
      {
        id: 2,
        readable_id: 'basico7',
        title: '7 dias',
        descricao: 'Básico | Semanal',
        price: 99,
      },
      {
        id: 1,
        readable_id: 'basico15',
        title: '15 dias',
        descricao: 'Básico | Quinzenal',
        price: 149,
      },
      {
        id: 3,
        readable_id: 'basico30',
        title: '30 dias',
        descricao: 'Básico | Mensal',
        price: 249,
      },
      {
        id: null,
        readable_id: 'basico_anual',
        title: '365 dias',
        descricao: 'Básico | Anual',
        price: 2639,
      },
    ],
  },

  premium: {
    id: 'premium',
    title: 'Plano Premium',
    consultas: 200,
    duracao: [
      {
        id: 4,
        readable_id: 'premium7',
        title: '7 dias',
        descricao: 'PRO | Semanal',
        price: 169,
      },
      {
        id: 5,
        readable_id: 'premium15',
        title: '15 dias',
        descricao: 'PRO | Quinzenal',
        price: 269,
      },
      {
        id: 6,
        readable_id: 'premium30',
        title: '30 dias',
        descricao: 'PRO | Mensal',
        price: 369,
      },
      {
        id: null,
        readable_id: 'premium_anual',
        title: '365 dias',
        descricao: 'PRO | Anual',
        price: 3839,
      },
    ],
  },
};
