import axios from "axios";
import Layout from "../app/layout";
import Filter from "../components/filter";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Atropos from "atropos/react";
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

const HomePage = ({ pages }) => {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <Filter pages={pages} onFilterClick={handleFilterClick} />
      <div className="item-detail text-center" ref={gridRef}>
        {pages.map((page) =>
          page.acf.bloc_image.map((blocImage) => (
            <div
              className={`item max-w-sm rounded shadow-lg m-4 ${blocImage.filtre}`}
              key={blocImage.image}
              onClick={() => {}}
            >
              <Atropos className="my-atropos">
                <div className="bg-white rounded-md overflow-hidden ">
                  <img
                    className="w-full "
                    src={blocImage.image}
                    alt={blocImage.titre}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {blocImage.titre}
                    </div>
                    <p className="text-gray-700 text-base">
                      {blocImage.dropdown}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <a
                      className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white hover:bg-blue-700"
                      href={blocImage.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VOIR PLUS
                    </a>
                  </div>
                </div>
              </Atropos>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
