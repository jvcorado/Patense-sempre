import Image from "next/image";
import React from "react";
import UP from "../../public/seta-direita (1).png";

export const ButtonUp = () => {
  return (
    <button
      className="p-3 lg:p-4 rounded-full shadow-2xl fixed right-0 bottom-0 z-10 m-3"
      style={{ backgroundColor: "#f95909" }}
    >
      <a href="#">
        <Image src={UP} alt="arrow up" width={15}></Image>
      </a>
    </button>
  );
};
