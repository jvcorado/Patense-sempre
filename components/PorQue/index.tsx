import React from "react";
import Selo from "../../public/01a-Selo-Verde-Divulgacao-208x300.png";
import Image from "next/image";

export const PorQue = () => {
  return (
    <section className="flex flex-col items-center gap-14 justify-between">
      <div className="bg-animado w-full py-5"></div>
      <div className="flex flex-col px-6 lg:flex-row items-center justify-center lg:justify-between lg:px-52 lg:py-20">
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl lg:text-6xl texto-animado">
            Por que a Patense é uma empresa com <br />
            <strong className=" texto-animado">
              Selo Verde de Sustentabilidade?
            </strong>
          </h1>
          <p className="text-xl text-white lg:w-8/12">
            A reciclagem é inerente ao rendering. Como líder no setor, a Patense
            garante destinação sustentável a toneladas de produtos de origem
            animal a cada dia.
          </p>
          <p className="text-xl  text-white lg:w-8/12">
            E vamos além na questão ambiental, nossas ações incluem desde
            estações de tratamento e reflorestamento até conscientização a
            colaboradores e comunidades.
          </p>
          <p className="text-xl  text-white lg:w-8/12">
            Sustentabilidade é mais que compromisso para nós: é a essência desta
            atividade e nossa grande inspiração.
          </p>
        </div>
        <div className="">
          <Image src={Selo} alt=""></Image>
        </div>
      </div>
    </section>
  );
};
