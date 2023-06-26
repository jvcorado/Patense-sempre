import Image from "next/image";
import React from "react";
import Irrigation from "../../public/irrigation-system.webp";

export const Fertirrigacao = () => {
  return (
    <section
      className="flex flex-row-reverse lg:flex-row"
      data-aos="fade-right"
    >
      <div className="bg-animado px-3 lg:px-3"></div>
      <div className="p-6 flex flex-col items-center lg:flex-row lg:px-52 lg:py-20 lg:justify-between gap-10">
        <div className="flex flex-col flex-1 gap-10">
          <h1 className="text-4xl lg:text-6xl lg:h-20 texto-animado">
            Fertirrigação
          </h1>
          <p className="text-xl text-white ">
            A fertirrigação aproveita integral e racionalmente o efluente
            tratado proveniente do sistema produtivo e das áreas de apoio das
            unidades da Patense localizadas em Patos de Minas, Itaúna, Tanguá e
            Paranacity.
          </p>
          <p className="text-xl text-white">
            Através de um manejo adequado e devidamente monitorado, o efluente
            tratado, rico em nutrientes necessários para o solo, é aspergido em
            área de pastagem, promovendo a absorção dos nutrientes pelo capim
            vaqueiro e a disponibilidade de pasto para o gado durante todo o
            ano.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={Irrigation}
            alt=""
            className="rounded-xl shadow-2xl"
          ></Image>
        </div>
      </div>
    </section>
  );
};
