import Image from "next/image";
import React from "react";
import heart from "../../public/img7-768x768.png";

export const Fertirrigacao = () => {
  return (
    <section className="flex flex-row-reverse lg:flex-row">
      <div className="bg-animado px-3 lg:px-6"></div>
      <div className="p-6 flex flex-col items-center lg:flex-row lg:px-52 lg:py-20 lg:justify-between">
        <div className="flex flex-col  gap-10">
          <h1 className="text-4xl lg:text-6xl lg:h-20 texto-animado">
            Fertirrigação
          </h1>
          <p className="text-xl text-white lg:w-8/12">
            A fertirrigação aproveita integral e racionalmente o efluente
            tratado proveniente do sistema produtivo e das áreas de apoio das
            unidades da Patense localizadas em Patos de Minas, Itaúna, Tanguá e
            Paranacity.
          </p>
          <p className="text-xl text-white lg:w-8/12">
            Através de um manejo adequado e devidamente monitorado, o efluente
            tratado, rico em nutrientes necessários para o solo, é aspergido em
            área de pastagem, promovendo a absorção dos nutrientes pelo capim
            vaqueiro e a disponibilidade de pasto para o gado durante todo o
            ano.
          </p>
        </div>
      </div>
    </section>
  );
};
