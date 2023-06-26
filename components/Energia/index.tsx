import Image from "next/image";
import React from "react";
import heart from "../../public/img7-768x768.png";

export const Energia = () => {
  return (
    <section
      className="flex flex-row-reverse bg-energia"
      style={{ backgroundColor: "#ededed" }}
      data-aos="fade-left"
    >
      <div className="bg-animado px-3 lg:px-3"></div>
      <div className="p-6 lg:px-52 lg:py-20 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="flex flex-col p-6 gap-5 lg:items-center lg:text-center bg-teste lg:p-10 lg:gap-10 shadow-lg">
          <h1 className="text-4xl lg:text-6xl texto-animado lg:h-20 capitalize">
            Energia
          </h1>
          <p className="text-xl text-white lg:w-8/12">
            A cogeração de energia encontra-se implantada na unidade de Itaúna,
            com capacidade de 3 MW, permitindo a autossuficiência energética da
            unidade. A cogeração produz eletricidade a partir da queima da
            biomassa (cavaco de eucalipto) por um sistema de turbinas e
            geradores. O excedente gerado é disponibilizado pela Patense para o
            SIN (Sistema Interligado Nacional).
          </p>
        </div>
      </div>
    </section>
  );
};
