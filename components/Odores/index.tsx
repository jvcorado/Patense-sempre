import Image from "next/image";
import React from "react";
import heart from "../../public/img7-768x768.png";

export const Odores = () => {
  return (
    <section className=" flex flex-row-reverse lg:flex-row">
      <div className="bg-animado px-3 lg:px-6"></div>
      <div>
        <div className="p-6 lg:px-52 lg:py-20 flex items-center lg:justify-between">
          <div className="flex flex-col gap-5 lg:gap-10">
            <h1 className="text-4xl lg:text-6xl texto-animado">
              Controle de <strong>Odores</strong>
            </h1>
            <p className="text-xl text-white lg:w-8/12">
              A atividade desenvolvida pela Patense possui um odor
              característico. No entanto, todos os gases gerados pela atividade
              são tratados através de aerocondensadores. Esse equipamento
              realiza a condensação dos gases, sendo o efluente gerado destinado
              para a estação de tratamento de efluentes. Já os gases
              incondensáveis são destinados para um sistema composto por
              lavadores de gases e biofiltro, que permitem a redução dos gases
              odoríferos na atmosfera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
