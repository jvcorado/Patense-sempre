import { useEffect } from "react";
import { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";

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
import { ButtonUp } from "@/components/ButtonUp";

export default function Home({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Banner data-aos="fade-up" />
      <PorQue data-aos="fade-left" />
      <ODS data-aos="fade-up" />
      <Reciclamos data-aos="fade-up" />
      <Biogestor data-aos="fade-up" />
      <Fertirrigacao data-aos="fade-up" />
      <Energia data-aos="fade-up" />
      <Odores data-aos="fade-up" />
      <Empresa data-aos="fade-up" />
      <ButtonUp data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </div>
  );
}
