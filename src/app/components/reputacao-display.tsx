import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ana Silva',
    username: '@anasilva',
    body: 'Painel completo! Achei dados detalhados de empresas e pessoas rapidamente. Recomendo pela agilidade.',
    img: '/images/feedback/1.jpg',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    username: '@carlosedu',
    body: 'Plataforma facilitou minhas análises. Relatórios claros, atualizados e suporte excelente. Muito bom!',
    img: '/images/feedback/2.jpg',
    stars: 5,
  },
  {
    name: 'Mariana Oliveira',
    username: '@marianaoliveira',
    body: 'Interface intuitiva. Em poucos cliques acessei dados de veículos e CNPJs. Recomendo, é prático!',
    img: '/images/feedback/3.jpg',
    stars: 4,
  },
  {
    name: 'Roberto Lima',
    username: '@robertolima',
    body: 'Uso o painel todo dia para validar clientes. Os módulos são confiáveis e completos. Gosto muito.',
    img: '/images/feedback/4.jpg',
    stars: 5,
  },
  {
    name: 'Fernanda Costa',
    username: '@fernandacosta',
    body: 'Ótima variedade de módulos! Já consultei dívidas, veículos e processos. Tudo muito rápido.',
    img: '/images/feedback/5.jpg',
    stars: 5,
  },
  {
    name: 'João Pereira',
    username: '@joaopereira',
    body: 'Ferramenta indispensável. Dados sempre atualizados e busca eficiente. Recomendo sem dúvidas!',
    img: '/images/feedback/6.jpg',
    stars: 5,
  },
  {
    name: 'Luciana Martins',
    username: '@lucianamartins',
    body: 'Validei um cadastro em segundos e tive acesso a informações completas. Salvou meu tempo!',
    img: '/images/feedback/7.jpg',
    stars: 5,
  },
  {
    name: 'Eduardo Gomes',
    username: '@eduardogomes',
    body: 'Relatórios detalhados ajudam na análise de crédito. Consulta de dívidas é super completa.',
    img: '/images/feedback/8.jpg',
    stars: 4,
  },
  {
    name: 'Patrícia Souza',
    username: '@patriciasouza',
    body: 'Já usei outras plataformas, mas essa é rápida e confiável. Resultados precisos e fáceis de ver.',
    img: '/images/feedback/9.jpg',
    stars: 5,
  },
  {
    name: 'Marcelo Tavares',
    username: '@marcelotavares',
    body: 'Ótimo para informações detalhadas sobre pessoas e empresas. Consulta de processos é diferencial!',
    img: '/images/feedback/10.jpg',
    stars: 5,
  },
  {
    name: 'Juliana Dias',
    username: '@julianadias',
    body: 'A extração de contatos por renda e score ajudou muito na captação de leads. Plataforma completa.',
    img: '/images/feedback/11.jpg',
    stars: 4,
  },
  {
    name: 'Rafael Almeida',
    username: '@rafaelalmeida',
    body: 'Painel sempre atualizado, trazendo informações recentes. Ideal para quem precisa de dados bons.',
    img: '/images/feedback/12.jpg',
    stars: 5,
  },
  {
    name: 'Sofia Menezes',
    username: '@sofiamenezes',
    body: 'Consigo consultar dívidas, veículos e empresas em um só lugar. Muito prático para o dia a dia!',
    img: '/images/feedback/13.jpg',
    stars: 5,
  },
  {
    name: 'Bruno Ferreira',
    username: '@brunoferreira',
    body: 'Consulta por telefone direto da Anatel foi diferencial. Recomendo para quem quer agilidade.',
    img: '/images/feedback/14.png',
    stars: 5,
  },
  {
    name: 'Camila Rocha',
    username: '@camilarocha',
    body: 'Painel seguro, dados confiáveis. Precisei de suporte e fui bem atendida. Vale a pena!',
    img: '/images/feedback/15.jpg',
    stars: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  stars,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  stars: number;
}) => {
  const maxStars = 5;

  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-border bg-card hover:bg-card/[.05]',
        'sm:w-64 w-72',
      )}
    >
      {/* Header com foto, nome e avaliação */}
      <div className="flex flex-row items-center justify-between">
        {/* Foto e nome */}
        <div className="flex flex-row items-center gap-2 min-w-0 flex-1">
          <Image
            className="rounded-full object-cover w-8 h-8"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col min-w-0">
            <figcaption className="text-sm font-medium dark:text-white truncate">
              {name}
            </figcaption>
          </div>
        </div>

        {/* Estrela com avaliação */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="text-yellow-400">⭐</span>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {stars}/{maxStars}
          </span>
        </div>
      </div>

      {/* Corpo da avaliação */}
      <blockquote
        className="mt-3 text-sm leading-relaxed"
        style={{
          whiteSpace: 'pre-line',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        {body}
      </blockquote>
    </figure>
  );
};

export function ReputacaoDisplay() {
  return (
    <div className="relative w-full">
      <div
        className="relative flex h-[400px] flex-col -translate-x-20 items-center justify-center overflow-hidden rounded-lg"
        style={{ width: 'calc(100vw)' }}
      >
        <Marquee pauseOnHover className="[--duration:20s] w-full">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
