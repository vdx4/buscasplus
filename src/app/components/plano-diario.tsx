"use client";

import { motion } from "framer-motion";
import { planos } from "@/lib/planos";
import { CheckCircle, EarthLock, Package, ShoppingCart } from "lucide-react";
import { Button } from "@heroui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export function PlanoDiario() {
  const { consultas, id, price, title, readable_id } = planos.diario;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      id="diario"
      ref={ref}
      className="flex flex-row flex-wrap gap-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        key={id}
        className="bg-card rounded-xl p-4 flex flex-col gap-6 mx-auto w-full max-w-xs text-left"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: inView ? 1 : 0.9, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="text-center font-semibold text-lg">{title}</p>
        <Select disabled defaultValue="diaria">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a duração" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="diaria">24 horas</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-medium">
            {readable_id === "premium_anual" ? "A partir de" : "Somente por"}
          </span>
          <p className="font-semibold text-2xl">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-left">Incluso</p>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <CheckCircle size={20} className="text-primary" />
            </div>
            <span className="font-light">
              <b className="font-bold">
                {consultas !== null ? consultas : "Quantidade não especificada"}
              </b>{" "}
              consultas por dia por módulo
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
          href={`/whatsapp?${encodeURIComponent(`plano=${title}&duracao=24 horas&preco=${price}`)}`}
        >
          <Button
            className="text-foreground"
            startContent={<ShoppingCart size={20} />}
            fullWidth
            color="primary"
            onClick={() =>
              gtag_report_conversion(
                `/whatsapp?${encodeURIComponent(`plano=${title}&duracao=24 horas&preco=${price}`)}`,
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