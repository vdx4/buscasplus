'use client';

import { motion } from 'framer-motion';
import { planos } from '@/lib/planos';
import { CheckCircle, EarthLock, Package, ShoppingCart } from 'lucide-react';
import { Button } from '@heroui/button';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export function PlanoDividas() {
  const { consultas, id, title, duracao } = planos.dividas;
  const selected = duracao[0]; // Só existe uma opção

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      id="dividas"
      ref={ref}
      className="flex flex-row flex-wrap gap-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        key={id}
        className="bg-card rounded-xl p-4 flex flex-col gap-6 mx-auto w-full max-w-xs text-left"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: inView ? 1 : 0.9, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-center font-semibold text-lg">{title}</p>
        <div className="w-full">
          <div className="border rounded-lg py-2 px-4 text-center bg-muted">
            {selected.title}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-medium">Somente por</span>
          <div className="flex flex-row items-center gap-2">
            <p className="font-bold text-2xl">
              {selected.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-left">Incluso</p>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <CheckCircle size={20} className="text-primary" />
            </div>
            <span className="font-light">
              <b className="font-bold">{consultas}</b> consultas mensais
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
          href={`/whatsapp?plano=${encodeURIComponent(title)}&duracao=${encodeURIComponent(selected.title)}&preco=${encodeURIComponent(selected.price)}`}
        >
          <Button
            className="text-foreground"
            startContent={<ShoppingCart size={20} />}
            fullWidth
            color="primary"
            onClick={() =>
              gtag_report_conversion(
                `/whatsapp?plano=${encodeURIComponent(title)}&duracao=${encodeURIComponent(selected.title)}&preco=${encodeURIComponent(selected.price)}`,
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
