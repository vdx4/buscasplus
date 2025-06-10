import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ana Silva',
    username: '@anasilva',
    body: 'Essa plataforma superou todas as minhas expectativas. É prática, rápida e eficiente!',
    img: '/images/feedback/1.jpeg',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    username: '@carlosedu',
    body: 'Fiquei impressionado com a qualidade e o suporte oferecido. Recomendo a todos!',
    img: '/images/feedback/1.jpeg',
    stars: 5,
  },
  {
    name: 'Mariana Oliveira',
    username: '@marianaoliveira',
    body: 'Nunca vi algo tão completo e bem pensado. É realmente incrível, estou adorando.',
    img: '/images/feedback/1.jpeg',
    stars: 4,
  },
  {
    name: 'Roberto Lima',
    username: '@robertolima',
    body: 'Simplesmente perfeito! Atendeu todas as minhas necessidades e ainda mais.',
    img: '/images/feedback/1.jpeg',
    stars: 4,
  },
  {
    name: 'Fernanda Costa',
    username: '@fernandacosta',
    body: 'Muito intuitivo e fácil de usar. A experiência é excelente e os resultados são rápidos.',
    img: '/images/feedback/1.jpeg',
    stars: 5,
  },
  {
    name: 'João Pereira',
    username: '@joaopereira',
    body: 'Uma ferramenta indispensável no meu dia a dia. Recomendo sem pensar duas vezes!',
    img: '/images/feedback/1.jpeg',
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
  const maxStars = 5; // Número máximo de estrelas

  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-border bg-card hover:bg-card/[.05]',
      )}
    >
      {/* Informações do usuário */}
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>

      {/* Corpo da avaliação */}
      <blockquote className="mt-2 text-sm">{body}</blockquote>

      {/* Estrelas */}
      <div className="mt-3 flex flex-row items-center gap-1">
        {Array.from({ length: maxStars }, (_, index) => (
          <Star
            key={index}
            fill={index < stars ? 'yellow' : 'none'} // Estrela preenchida ou vazia
            className={index < stars ? 'text-yellow-400' : 'text-gray-400'}
            size={20}
          />
        ))}
        <span className="ml-1 text-sm">
          {stars}/{maxStars}
        </span>
      </div>
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
