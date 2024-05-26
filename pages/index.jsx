import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Layout from "../app/layout";
import Navigation from "../components/navigation";
import { WavyBackgroundDemo } from "../components/wavybackground";
import Image from "next/image";
import Card from "../components/card";

export async function getServerSideProps() {
  const response = await axios.get(
    "https://apiportfolio.mathistogni.fr/wp-json/acf/v3/pages"
  );
  const data = await response.data;
  return {
    props: {
      pages: data,
    },
  };
}

const colors = [
  "red-400",
  "green-400",
  "blue-400",
  "yellow-400",
  "purple-400",
  "pink-400",
  "teal-400",
];

const filterColors = (pages) => {
  const filters = [
    ...new Set(
      pages.flatMap((page) => page.acf.filtre.map((flt) => flt.filtre))
    ),
  ];
  const filterColorMap = {};
  filters.forEach((filter, index) => {
    filterColorMap[filter] = colors[index % colors.length];
  });
  return filterColorMap;
};

const HomePage = ({ pages }) => {
  const filterColorMap = filterColors(pages);
  const [filterVisible, setFilterVisible] = useState(false);
  const gridRef = useRef();
  const isotopeInstanceRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") return;
    let Isotope;
    import("isotope-layout").then((IsotopeModule) => {
      Isotope = IsotopeModule.default;
      import("imagesloaded").then((imagesLoaded) => {
        imagesLoaded.default(gridRef.current, () => {
          isotopeInstanceRef.current = new Isotope(gridRef.current, {
            itemSelector: ".item",
            layoutMode: "masonry",
          });
        });
      });
    });

    const btnFilter = document.querySelector(".btnFilter");
    const filter = document.querySelector(".filter");
    if (btnFilter) {
      btnFilter.addEventListener("click", () => {
        const isActive = filter.classList.toggle("active");
        handleFilterClick(isActive ? "*" : "");
      });
    }
    return () => {
      isotopeInstanceRef.current?.destroy();
    };
  }, []);

  const handleFilterClick = (filterValue) => {
    const filterClass = "active";
    const filterContainer = document.querySelector(".item-menu.filter");
    if (filterContainer.classList.contains(filterClass)) {
      isotopeInstanceRef.current?.arrange({ filter: filterValue });
    } else {
      isotopeInstanceRef.current?.arrange({ filter: "*" });
    }
  };

  const handleFilterButtonClick = () => {
    setFilterVisible((prev) => !prev);
    const filter = document.querySelector(".item-menu.filter");
    if (!filterVisible) {
      filter.classList.add("active");
    } else {
      filter.classList.remove("active");
    }
  };

  const handleIconClick = (filterValue) => {
    handleFilterClick(filterValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <Navigation onFilterButtonClick={handleFilterButtonClick} />
      <WavyBackgroundDemo title="MATHIS TOGNI" />
      <div className="parentFilter">
        <div className="item-menu filter">
          <ul>
            {pages.map((page) =>
              page.acf.filtre.map((flt) => (
                <li
                  className="icon"
                  data-filter={`.${flt.filtre}`}
                  key={flt.image}
                  onClick={() => {
                    handleIconClick(`.${flt.filtre}`);
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
      <div className="item-detail text-center m-2" ref={gridRef}>
        {pages.map((page, pageIndex) => (
          <div key={pageIndex} className="flex flex-wrap">
            {page.acf.bloc_image.map((bloc, blocIndex) => (
              <Card
                key={blocIndex}
                bloc={bloc}
                blocIndex={blocIndex}
                filterColorMap={filterColorMap}
              />
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
