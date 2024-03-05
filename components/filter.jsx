import React from "react";
import Link from "next/link";
import Image from "next/image";
const Filter = ({ pages, onFilterClick }) => {
  return (
    <>
      <div className="parentFilter">
        <div className="item-menu filter">
          <ul>
            <li>
              <Link href="/mdr">MDR</Link>
            </li>
            <li></li>
          </ul>
          <ul>
            {pages.map((page) =>
              page.acf.filtre.map((flt) => (
                <li
                  className="icon"
                  data-filter={`.${flt.filtre}`}
                  key={flt.image}
                  onClick={() => {
                    onFilterClick(`.${flt.filtre}`);
                    const filter = document.querySelector(".item-menu.filter");
                    filter.classList.remove("active");
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={flt.image}
                    alt={flt.filtre}
                    priority
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
