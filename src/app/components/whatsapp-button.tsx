'use client';

import { Button } from '@heroui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function WhatsappButton() {
  return (
    <div className="fixed rounded-full bg-foreground p-3 shadow-lg transition-transform hover:scale-110 flex justify-center items-center right-4 bottom-4 m-2 z-50 animate-bounce">
      <Link
        href="https://wa.me/5511958586780?text=Olá, gostaria de mais informações sobre o painel!"
        aria-label="Entre em contato pelo WhatsApp"
      >
        <Image
          width={40}
          height={40}
          alt="WhatsApp"
          src="/images/whatsapp.png"
        />
      </Link>
    </div>
  );
}
