import Image from "next/image";
import React from "react";
import heart from "../../public/img7-768x768.png";

export const Biogestor = () => {
  return (
    <section
      className="flex flex-row-reverse bg-agricultura"
      style={{ backgroundColor: "#ededed" }}
    >
      <div className="bg-animado px-3 lg:px-6"></div>
      <div className="p-6 lg:px-52 lg:py-20 flex flex-row-reverse justify-between">
        <div className="flex flex-col p-5 gap-5 lg:text-right  lg:items-end  lg:gap-10 bg-teste lg:p-10">
          <h1 className="text-4xl lg:text-6xl  texto-animado lg:h-20 capitalize">
            Biogestor{" "}
          </h1>
          <p className="text-xl text-white lg:w-8/12">
            Para o tratamento do efluente líquido, ou seja, o esgoto gerado em
            seu processo produtivo, na descarga dos caminhões e na lavagem de
            veículos, a Patense utiliza nas unidades de Patos de Minas, Tanguá e
            Adamantina (em fase de implantação) biodigestores. Esse sistema de
            tratamento promove a degradação biológica da matéria orgânica,
            gerando ao final do processo dois produtos: o biofertilizante e o
            biogás. O biofertilizante segue para lagoas aeradas para a remoção
            de nutrientes presentes no efluente e posteriormente é reutilizado
            em áreas de fertirrigação. O biogás está em fase de viabilidade para
            diversos usos nas unidades.
          </p>
        </div>
      </div>
    </section>
  );
};
