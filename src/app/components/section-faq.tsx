import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs: { title: string; subtitle: string; content: string }[] = [
  {
    title: 'O que vocês vendem?',
    subtitle: 'Serviços de busca e consulta de dados online',
    content:
      'Comercializamos nossos serviços de busca e consulta de dados online que permitem acessar informações públicas ou disponíveis em bancos de dados. Esses serviços podem incluir pesquisas de CPF, CNPJ, processos judiciais, consultas veiculares, endereços e outras informações.',
  },
  {
    title: 'De onde vêm os dados?',
    subtitle: 'Fontes públicas e privadas integradas',
    content:
      'As plataformas acessam dados de fontes públicas ou privadas mediante integração com APIs ou bancos de dados. Elas organizam essas informações em painéis fáceis de usar, permitindo buscas rápidas e eficientes.',
  },
  {
    title: 'É legal realizar consultas nesses sites?',
    subtitle: 'Conformidade com as leis locais',
    content:
      'As consultas são permitidas desde que sigam as leis locais, como a LGPD no Brasil. Os dados obtidos devem ter origem em fontes públicas ou autorizadas, e o uso dessas informações deve respeitar os direitos de privacidade.',
  },
  {
    title: 'Como recebo os dados de acesso?',
    subtitle: 'Acesso por cadastro após pagamento',
    content:
      'Ao falar com um consultor e efetuar o pagamento, será gerado um cadastro para você em nosso painel, e você poderá acessar a qualquer momento utilizando suas credenciais de acesso.',
  },
  {
    title: 'Qual método de pagamento vocês aceitam?',
    subtitle: 'Pagamentos via Pix',
    content: 'Aceitamos apenas pagamento via Pix no momento.',
  },
];

export default function SectionFaq() {
  return (
    <section className="z-20 w-full max-w-screen-md mx-auto flex flex-col gap-2">
      <div className="mx-auto flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-center">Perguntas Frequentes</h1>
        <p className="font-light text-center text-muted-foreground text-medium">
          Selecionamos algumas perguntas que recebemos frequentemente para te
          ajudar!
        </p>
      </div>

      <div className="w-full">
        <Accordion
          type="multiple"
          className="mt-2 w-full bg-card px-2 rounded-sm"
        >
          {faqs.map(({ title, content }, index) => (
            <AccordionItem
              className="w-full p-3 border-none text-left"
              key={index}
              value={`item${index}`}
            >
              <AccordionTrigger className="text-left">{title}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-left">
                {content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
