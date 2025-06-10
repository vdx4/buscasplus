'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { modules } from '@/lib/modulos';

export function CarouselModules() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full mt-2 mx-auto max-sm:max-w-xs flex items-center justify-center"
    >
      <CarouselContent>
        {modules.map(({ title, description, src }) => (
          <CarouselItem
            key={src}
            className="basis-1/3 max-sm:basis-2/3 flex flex-col gap-1"
          >
            <Image
              alt={title}
              width={300}
              height={300}
              src={`/images/modulos/${src}`}
            />
            <p className="mt-1">{title}</p>
            <span className="text-muted-foreground text-xs">{description}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
