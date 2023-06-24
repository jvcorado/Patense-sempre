import { Banner } from "@/components/Banner";
import { ODS } from "@/components/ODS";
import { PorQue } from "@/components/PorQue";
import { Reciclamos } from "@/components/Reciclamos";
import { Energia } from "@/components/Energia";
import { Fertirrigacao } from "@/components/Fertirrigacao";
import { Odores } from "@/components/Odores";
import { Biogestor } from "@/components/Biogestor";
import { Empresa } from "@/components/Empresa";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <PorQue></PorQue>
      <ODS></ODS>
      <Reciclamos></Reciclamos>
      <Biogestor></Biogestor>
      <Fertirrigacao></Fertirrigacao>
      <Energia></Energia>
      <Odores></Odores>
      <Empresa></Empresa>
      <Footer></Footer>
    </main>
  );
}
