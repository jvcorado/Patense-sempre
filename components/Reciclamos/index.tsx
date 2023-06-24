import Image from "next/image";
import React from "react";
import heart from "../../public/img7-768x768.png";

export const Reciclamos = () => {
  return (
    <section className="flex flex-row-reverse lg:flex-row">
      <div className="bg-animado px-3 lg:px-6"></div>
      <div className="p-6 lg:px-52 lg:py-20 flex flex-row items-center justify-between">
        <div className="flex flex-col gap-5 lg:gap-10">
          <h1 className="text-4xl lg:text-6xl texto-animado">
            Reciclamos resíduos de{" "}
            <strong>bovinos, suínos, aves e pescados.</strong>
          </h1>
          <p className="text-xl text-white lg:w-8/12">
            Coletamos subprodutos animais que antes eram destinados de forma
            incorreta ao meio ambiente e transformamos eles em matérias-primas
            para diversos setores da economia nacional.
          </p>
          <p className="text-xl text-white lg:w-8/12">
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
        {/* <Image src={heart} alt="heart" width={500}></Image> */}
      </div>
    </section>
  );
};
