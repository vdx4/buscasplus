'use client';

import React, { useState } from 'react';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/modal';
import { Button } from '@heroui/button';
import { Search } from 'lucide-react';
import { Input } from '@heroui/input';
import Image from 'next/image';
import { modules } from '@/lib/modulos';

export default function ModalSearchModules() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState(''); // Texto da busca
  const [filteredModules, setFilteredModules] = useState(modules); // Módulos filtrados

  // Função para lidar com mudanças no input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase(); // Converte para minúsculas
    setSearchTerm(term);

    // Filtra os módulos com base no título ou descrição
    const filtered = modules.filter(
      (module) =>
        module.title.toLowerCase().includes(term) ||
        module.description.toLowerCase().includes(term),
    );

    setFilteredModules(filtered);
  };

  // Função para destacar o texto pesquisado
  const highlightText = (text: string, term: string) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <strong key={index} className="text-primary">
          {part}
        </strong>
      ) : (
        part
      ),
    );
  };

  return (
    <>
      <Button
        className="max-w-sm mx-auto my-2 text-muted-foreground"
        fullWidth
        variant="flat"
        size="lg"
        startContent={<Search size={20} />}
        onClick={onOpen}
      >
        Buscar Módulos...
      </Button>

      <Modal
        isOpen={isOpen}
        placement="center"
        size="3xl"
        closeButton
        onOpenChange={onOpenChange}
        classNames={{ closeButton: 'z-10' }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1"></ModalHeader>
          <ModalBody>
            <Input
              size="md"
              startContent={
                <Search size={20} className="text-muted-foreground" />
              }
              variant="flat"
              placeholder="Procure pelo módulo"
              value={searchTerm}
              onChange={handleSearch} // Chama a função de busca
            />
            <div className="h-[600px] pt-3 overflow-y-auto flex flex-row justify-start items-start gap-x-3 gap-y-5 flex-wrap">
              {filteredModules.length > 0 ? (
                filteredModules.map(({ description, src, title }, index) => (
                  <div
                    className="w-full max-w-[32%] max-md:max-w-[49%] max-sm:max-w-full max-sm:flex-row max-sm:mx-auto max-sm:justify-between flex flex-col gap-x-3 gap-2 justify-center items-center text-center"
                    key={index}
                  >
                    <div>
                      <Image
                        alt={title}
                        width={150}
                        height={150}
                        src={`/images/modulos/${src}`}
                      />
                    </div>
                    <div className="w-full max-w-sm flex flex-col gap-1 max-sm:text-left">
                      <p className="mt-1">{highlightText(title, searchTerm)}</p>
                      <span className="text-muted-foreground text-xs">
                        {highlightText(description, searchTerm)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center w-full">
                  Nenhum módulo encontrado
                </p>
              )}
            </div>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
