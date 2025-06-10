import { SectionHero } from './components/section-hero';
import SectionCards from './components/section-cards';
import RetroGrid from '@/components/ui/retro-grid';
import Logo from './components/logo';
import SectionReputacao from './components/section-reputacao';
import SectionFaq from './components/section-faq';
import WhatsappButton from './components/whatsapp-button';
import SectionModulos from './components/section-modulos';
import SectionPlanos from './components/section-planos';
import { ScrollToDiv } from './components/scroll-to-div';

export default function Home() {
  return (
    <>
      <WhatsappButton />
      <ScrollToDiv />
      <div className="relative w-full min-h-screen flex flex-col gap-8 font-[family-name:var(--font-poppins)] p-8">
        <Logo />

        <main className="relative max-w-screen-xl mx-auto min-h-screen flex flex-col gap-12">
          <div className="pointer-events-none w-full h-[500px] absolute z-0 top-0 left-0 inset-0 size-full blur-3xl opacity-20 bg-primary rounded-full" />
          <RetroGrid className="z-0 fixed top-0 left-0 w-full h-full opacity-100" />

          <SectionHero />
          <SectionCards />
        </main>

        <main className="z-10 w-full min-h-screen space-y-24 p-8 max-sm:px-2">
          <SectionModulos />
        </main>
        <main className="z-10 w-full min-h-screen space-y-24 p-8 max-sm:px-2">
          <SectionPlanos />
        </main>

        <main className="z-10 w-full min-h-screen space-y-14 p-8 max-sm:px-2">
          <SectionReputacao />
          <SectionFaq />
        </main>
      </div>
      <div className="relative z-10 p-8 h-[150px] w-full flex flex-col gap-2">
        <div className="max-w-xs w-full mx-auto flex flex-col justify-start items-center">
          <Logo />
          <span className="mx-auto text-center text-muted-foreground text-sm">
            Descubra o poder da informação com o InfoBuscas
          </span>
        </div>
      </div>
    </>
  );
}
