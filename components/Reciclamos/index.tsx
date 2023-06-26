import Image from "next/image";
import React from "react";
import Fish from "../../public/FISH-1024x284.webp";
import Chicken from "../../public/CHICKEN-1024x284.webp";
import Pig from "../../public/PIG-1024x284.webp";
import Bovine from "../../public/bovine-1-1024x284.webp";

export const Reciclamos = () => {
  return (
    <section
      className="flex flex-row-reverse lg:flex-row"
      data-aos="fade-right"
    >
      <div className="bg-animado px-3 lg:px-3"></div>
      <div className="p-6 lg:px-52 lg:py-20 flex flex-col gap-10 lg:flex-row items-center justify-between ">
        <div className="flex flex-1 flex-col gap-5 lg:gap-10">
          <h1 className="text-4xl lg:text-6xl texto-animado">
            Reciclamos resíduos de{" "}
            <strong>bovinos, suínos, aves e pescados.</strong>
          </h1>
          <p className="text-xl text-white">
            Coletamos subprodutos animais que antes eram destinados de forma
            incorreta ao meio ambiente e transformamos eles em matérias-primas
            para diversos setores da economia nacional.
          </p>
          <p className="text-xl text-white">
            Reciclamos resíduos de bovinos, suínos, aves e pescados. Coletamos
            subprodutos animais que antes eram destinados de forma incorreta ao
            meio ambiente e transformamos eles em matérias-primas para diversos
            setores da economia nacional. Produzimos farinhas, óleos e gorduras.
            As farinhas, ricas em proteína, cálcio e fósforo, são ingredientes
            indispensáveis na fabricação de rações para a nutrição de animais
            domésticos. Já os óleos e gorduras são insumos nas indústrias de
            higiene, limpeza, cosmética, farmacêutica, de biocombustível e de
            alimentação animal.
          </p>
        </div>
        <div className="grid grid-rows-4 gap-4 justify-end flex-1 ">
          <Image
            src={Bovine}
            alt="heart"
            width={500}
            className="shadow-2xl"
          ></Image>
          <Image
            src={Pig}
            alt="heart"
            width={500}
            className="shadow-2xl"
          ></Image>
          <Image
            src={Chicken}
            alt="heart"
            width={500}
            className="shadow-2xl"
          ></Image>
          <Image
            src={Fish}
            alt="heart"
            width={500}
            className="shadow-2xl"
          ></Image>
        </div>
        {/* <Image src={heart} alt="heart" width={500}></Image> */}
      </div>
    </section>
  );
};
