import Image from "next/image";
import React from "react";
import Instagram from "../../public/instagram.svg";
import Youtube from "../../public/youtube.svg";
import Facebook from "../../public/facebook.svg";
import Linkedin from "../../public/linkedin(1).svg";

export const Empresa = () => {
  return (
    <section
      className="flex "
      style={{ backgroundColor: "#ededed" }}
      data-aos="fade-up"
    >
      <div className="flex flex-col px-10 py-7 gap-5 items-center justify-center lg:px-80 lg:py-14 lg:gap-10">
        <h1 className="text-4xl lg:text-5xl gradient-text text-center">
          Selo Verde de Sustentabilidade. Conheça mais essa empresa com{" "}
          <strong className="">Selo Verde de Sustentabilidade.</strong>
        </h1>
        <button className="bg-animado p-5 lg:px-10 lg:py-5 rounded-xl text-white font-bold shadow-2xl">
          VISITE O NOSSO SITE
        </button>
        <div className="flex flex-col items-center justify-center gap-5 lg:gap-10">
          <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-green-600">
            Nossa redes sociais
          </h1>
          <ul className="flex gap-6 items-center justify-center">
            <li className="flex items-center justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image src={Instagram} alt="" width={40}></Image>
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image src={Facebook} alt="" width={40}></Image>
              </a>
            </li>
            <li className="flex items-center justify-center m-auto text-center">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center m-auto text-center"
              >
                <Image src={Youtube} alt="" width={50} className="mt-4"></Image>
              </a>
            </li>
            <li className="">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image src={Linkedin} alt="" width={40} className=""></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
