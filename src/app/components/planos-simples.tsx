'use client';

import { motion } from 'framer-motion';
import { planos } from '@/lib/planos';
import { CheckCircle, EarthLock, Package, ShoppingCart } from 'lucide-react';
import { Button } from '@heroui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer'; // Importando o hook

export function PlanosSimples() {
  const { consultas, id, title } = planos.simples;
  const [selected, setSelected] = useState<{
    id: number | null;
    readable_id: string;
    title: string;
    descricao: string;
    price: number;
  }>(planos.simples.duracao[0]);

  const { ref, inView } = useInView({
    triggerOnce: true, // O elemento será observado apenas uma vez
    threshold: 0.2, // O elemento precisa estar 50% visível para animar
  });

  function handleChangeValue(value: string) {
    const option = planos.simples.duracao.find(
      (plano) => plano.readable_id === value,
    );

    if (option) setSelected(option);
  }

  return (
    <motion.div
      id="simples"
      ref={ref} // Referenciando o elemento
      className="flex flex-row flex-wrap gap-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // A animação depende da visibilidade
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        key={id}
        className="bg-card rounded-xl p-4 flex flex-col gap-6 mx-auto w-full max-w-xs text-left"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: inView ? 1 : 0.9, opacity: inView ? 1 : 0 }} // Animar quando o elemento estiver visível
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-center font-semibold text-lg">{title}</p>
        <Select
          defaultValue={selected.readable_id}
          onValueChange={handleChangeValue}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a duração" />
          </SelectTrigger>
          <SelectContent>
            {planos.simples.duracao.map(({ id, readable_id, title }) => {
              return (
                <SelectItem key={id} value={readable_id}>
                  {title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-medium">
            {selected.readable_id === 'simples' ? 'A partir de' : 'Somente por'}
          </span>
          <div className="flex flex-row items-center gap-2">
            <p className="font-semibold text-2xl flex flex-row items-center gap-2">
              {selected.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            {selected.readable_id === 'simples_anual' && (
              <span className="text-xs font-medium bg-red-500 p-2 rounded-xl w-fit">
                -12%
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-left">Incluso</p>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <CheckCircle size={20} className="text-primary" />
            </div>
            <span className="font-light">
              <b className="font-bold">{consultas}</b> consultas por dia por
              módulo
            </span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <Package size={20} className="text-primary" />
            </div>
            <span className="font-light">Todos módulos básicos inclusos</span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <EarthLock size={20} className="text-primary" />
            </div>
            <span className="font-light">Sigilo Total</span>
          </div>
        </div>
        <Link
          href={`/whatsapp?${encodeURIComponent(`plano=Plano Básico&duracao=${selected.title}&preco=${selected.price}`)}`}
        >
          <Button
            className="text-foreground"
            startContent={<ShoppingCart size={20} />}
            fullWidth
            color="primary"
            onClick={() =>
              gtag_report_conversion(
                `/whatsapp?${encodeURIComponent(`plano=Plano Básico&duracao=${selected.title}&preco=${selected.price}`)}`,
              )
            }
          >
            Alugar Agora
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
