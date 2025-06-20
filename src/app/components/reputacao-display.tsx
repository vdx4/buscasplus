import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ana Silva',
    username: '@anasilva',
    body: 'O painel é extremamente completo! Encontrei informações detalhadas sobre empresas e pessoas em poucos minutos. Recomendo para quem precisa de agilidade e precisão.',
    img: '/images/feedback/1.jpeg',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    username: '@carlosedu',
    body: 'A plataforma facilitou muito minhas análises de crédito. Os relatórios são claros e sempre atualizados. O suporte também é excelente!',
    img: '/images/feedback/2.jpeg',
    stars: 5,
  },
  {
    name: 'Mariana Oliveira',
    username: '@marianaoliveira',
    body: 'Achei a interface super intuitiva. Em poucos cliques consegui acessar dados de veículos e checar restrições em CNPJs. Muito prático!',
    img: '/images/feedback/3.jpeg',
    stars: 4,
  },
  {
    name: 'Roberto Lima',
    username: '@robertolima',
    body: 'Uso o painel diariamente para consultas cadastrais e validação de clientes. Os módulos são completos e confiáveis. Recomendo para quem busca segurança nas informações.',
    img: '/images/feedback/4.jpeg',
    stars: 5,
  },
  {
    name: 'Fernanda Costa',
    username: '@fernandacosta',
    body: 'A plataforma oferece uma variedade incrível de módulos. Já utilizei para consultar dívidas, veículos e até processos judiciais. Tudo muito rápido!',
    img: '/images/feedback/5.jpeg',
    stars: 5,
  },
  {
    name: 'João Pereira',
    username: '@joaopereira',
    body: 'Ferramenta indispensável para meu trabalho. Os dados são sempre atualizados e a busca é muito eficiente. Recomendo sem dúvidas!',
    img: '/images/feedback/6.jpeg',
    stars: 5,
  },
  {
    name: 'Luciana Martins',
    username: '@lucianamartins',
    body: 'Precisei validar um cadastro e em segundos tive acesso a informações completas, inclusive score e restrições. Salvou meu tempo!',
    img: '/images/feedback/7.jpeg',
    stars: 5,
  },
  {
    name: 'Eduardo Gomes',
    username: '@eduardogomes',
    body: 'Gostei muito dos relatórios detalhados, especialmente para análise de crédito. A consulta de dívidas e veículos é super completa.',
    img: '/images/feedback/8.jpeg',
    stars: 4,
  },
  {
    name: 'Patrícia Souza',
    username: '@patriciasouza',
    body: 'Já utilizei outras plataformas, mas nenhuma tão rápida e confiável quanto essa. O painel é fácil de usar e os resultados são precisos.',
    img: '/images/feedback/9.jpeg',
    stars: 5,
  },
  {
    name: 'Marcelo Tavares',
    username: '@marcelotavares',
    body: 'Ótimo para quem precisa de informações detalhadas sobre pessoas e empresas. A consulta de processos judiciais é um diferencial!',
    img: '/images/feedback/10.jpeg',
    stars: 5,
  },
  {
    name: 'Juliana Dias',
    username: '@julianadias',
    body: 'A extração de contatos por faixa de renda e score me ajudou muito na captação de leads. Plataforma realmente completa.',
    img: '/images/feedback/11.jpeg',
    stars: 4,
  },
  {
    name: 'Rafael Almeida',
    username: '@rafaelalmeida',
    body: 'O painel é atualizado constantemente, trazendo sempre informações recentes. Ideal para quem precisa de dados confiáveis.',
    img: '/images/feedback/12.jpeg',
    stars: 5,
  },
  {
    name: 'Sofia Menezes',
    username: '@sofiamenezes',
    body: 'Consigo consultar desde dívidas até dados de veículos e empresas em um só lugar. Muito prático para o dia a dia!',
    img: '/images/feedback/13.jpeg',
    stars: 5,
  },
  {
    name: 'Bruno Ferreira',
    username: '@brunoferreira',
    body: 'A consulta por telefone direto da Anatel foi um diferencial que me surpreendeu. Recomendo para quem precisa de informações rápidas.',
    img: '/images/feedback/14.jpeg',
    stars: 5,
  },
  {
    name: 'Camila Rocha',
    username: '@camilarocha',
    body: 'O painel é seguro e os dados são confiáveis. Já precisei de suporte e fui muito bem atendida. Vale a pena!',
    img: '/images/feedback/15.jpeg',
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
            className="rounded-full flex-shrink-0"
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
