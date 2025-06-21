export const planos = {
  diario: {
    id: 12,
    readable_id: 'diario',
    title: 'Plano Diário',
    descricao: 'Diário',
    price: 40,
    consultas: 30,
    duracao: [
      {
        id: null,
        readable_id: 'diaria',
        title: '24 horas',
        descricao: 'Diária | 24 Horas',
        price: 40,
      },
    ],
  },

  bronze: {
    id: 'bronze',
    title: 'Plano Bronze',
    consultas: 30, // 30 consultas por dia em cada módulo
    duracao: [
      {
        id: null,
        readable_id: 'bronze30',
        title: '30 dias',
        descricao: 'Bronze | 30 Dias',
        price: 120,
      },
    ],
  },

  prata: {
    id: 'prata',
    title: 'Planos Prata',
    consultas: 100, // 100 consultas por dia em cada módulo
    duracao: [
      {
        id: null,
        readable_id: 'prata7',
        title: '7 dias',
        descricao: 'Prata | 7 Dias',
        price: 80,
      },
      {
        id: null,
        readable_id: 'prata15',
        title: '15 dias',
        descricao: 'Prata | 15 Dias',
        price: 120,
      },
      {
        id: null,
        readable_id: 'prata30',
        title: '30 dias',
        descricao: 'Prata | 30 Dias',
        price: 200,
      },
    ],
  },

  ouro: {
    id: 'ouro',
    title: 'Planos Ouro',
    consultas: null, // Maior quantidade de consultas, valor não especificado
    duracao: [
      {
        id: null,
        readable_id: 'ouro7',
        title: '7 dias',
        descricao: 'Ouro | 7 Dias',
        price: 120,
      },
      {
        id: null,
        readable_id: 'ouro15',
        title: '15 dias',
        descricao: 'Ouro | 15 Dias',
        price: 200,
      },
      {
        id: null,
        readable_id: 'ouro30',
        title: '30 dias',
        descricao: 'Ouro | 30 Dias',
        price: 300,
      },
    ],
  },

  dividas: {
    id: 'dividas',
    title: 'Planos Dívidas',
    consultas: 1500, // 1500 consultas mensal
    duracao: [
      {
        id: null,
        readable_id: 'dividas30',
        title: '30 dias',
        descricao: 'Dívidas | 30 Dias',
        price: 350,
      },
    ],
  },
};
