import React from "react";
import Atropos from "atropos/react";
import Image from "next/image";

const Card = ({ bloc, filterColorMap }) => {
  const filterColor = filterColorMap[bloc.filtre];
  return (
    <div className={`item ${bloc.filtre}`}>
      <div
        className="carte overflow-hidden rounded-lg shadow-lg relative"
        style={{ margin: "0.5rem" }}
      >
        <p
          style={{ zIndex: "99", left: 0 }}
          className={`inline-flex items-center rounded-xl bg-black px-2 py-1 text-xs font-medium text-${filterColor} ring-1 ring-inset ring-${filterColor} absolute m-4`}
          data-atropos-offset="10"
        >
          {bloc.dropdown}
        </p>

        <Image
          src={bloc.image}
          alt={bloc.titre}
          layout="responsive"
          width={700}
          height={475}
          className="rounded"
          objectFit="cover"
        />
        <div className="overlay"></div>

        <div className="absolute bottom-0 w-full overflow-hidden ">
          <div className="flou w-full z-40 px-6 py-4 flex justify-between items-center rounded-b-md">
            <div>
              <div
                className="text-neutral-50 font-bold text-base lg:text-lg text-uppercase"
                data-atropos-offset="10"
              >
                {bloc.titre}
              </div>
            </div>
            <Atropos>
              <a
                href={bloc.lien}
                target="_blank"
                rel="noopener noreferrer"
                data-atropos-offset="10"
                className="buttonLink"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r  from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center"
                >
                  VOIR LE PROJET
                </button>
              </a>
            </Atropos>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
