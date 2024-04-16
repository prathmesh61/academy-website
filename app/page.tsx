import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Whatsapp from "@/components/whatsapp-icon/Whatsapp";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-between px-8">
      <Header />
      <Hero />
      <Whatsapp />
    </main>
  );
}
