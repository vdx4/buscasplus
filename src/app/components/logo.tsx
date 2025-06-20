import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ClassNameValue } from 'tailwind-merge';

export default function Logo({ className }: { className?: ClassNameValue }) {
  return (
    <Link className={cn(className, 'mx-auto')} href="/">
      <Image
        src={'/images/logo.png'}
        width={150}
        height={150}
        alt="Logo BuscasPlus"
        className="max-sm:mx-auto"
      />
    </Link>
  );
}
